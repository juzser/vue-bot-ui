<template lang="pug">
.qkb-bot-ui(
  :class="uiClasses"
)
  transition(name="qkb-fadeUp")
    .qkb-board(v-if="botActive")
      BoardHeader(
        :bot-title="optionsMain.botTitle",
        @close-bot="botToggle"
      )
      BoardContent(
        :main-data="messageData"
      )
      BoardAction(
        :input-placeholder="optionsMain.inputPlaceholder",
        @msg-send="sendMessage"
      )
  .qkb-bot-bubble
    button.qkb-bubble-btn(
      @click="botToggle"
    )
      slot(name="bubbleButton")
        transition(name="qkb-scaleUp")
          BubbleIcon.qkb-bubble-btn-icon(
            v-if="!botActive",
            key="1"
          )
          CloseIcon.qkb-bubble-btn-icon.qkb-bubble-btn-icon--close(
            v-else,
            key="2"
          )
  AppStyle(:options="optionsMain")
  .qkb-preload-image
    .qkb-msg-avatar__img(v-if="optionsMain.botAvatarImg")
</template>
<script>
import EventBus from '@/helpers/event-bus'
import { messageService } from '@/services/'
import BoardHeader from './Board/Header'
import BoardContent from './Board/Content'
import BoardAction from './Board/Action'
import AppStyle from './AppStyle'
import BubbleIcon from '@/assets/icons/bubble.svg'
import CloseIcon from '@/assets/icons/close.svg'

export default {
  name: 'VBotUI',
  components: {
    BoardHeader,
    BoardContent,
    BoardAction,
    BubbleIcon,
    CloseIcon,
    AppStyle
  },

  props: {
    options: {
      type: Object,
      default: () => { return {} }
    }
  },

  data () {
    return {
      botActive: true,
      messageData: [],
      defaultOptions: {
        inputPlaceholder: 'Message',
        botTitle: 'Chatbot',
        colorScheme: '#1b53d0',
        boardContentBg: '#fff',
        textColor: '#fff',
        bubbleBtnSize: 56,
        animation: true,
        botAvatarSize: 32,
        botAvatarImg: 'http://placehold.it/200x200',
        msgBubbleBgBot: '#f0f0f0',
        msgBubbleColorBot: '#000',
        msgBubbleBgUser: '#4356e0',
        msgBubbleColorUser: '#fff'
      }
    }
  },

  computed: {
    optionsMain () {
      return { ...this.defaultOptions, ...this.options }
    },

    // Add class to bot ui wrapper
    uiClasses () {
      let classes = []

      if (this.optionsMain.animation) {
        classes.push('qkb-bot-ui--animate')
      }

      return classes
    }
  },

  created () {
    EventBus.$on('select-button-option', this.selectOption)
  },

  destroyed () {
    EventBus.$off('select-button-option')
  },

  methods: {
    botToggle () {
      this.botActive = !this.botActive

      if (this.botActive) {
        this.init()
      }
    },

    init () {
      messageService.getMessage()
        .then((response) => {
          const replyMessage = {
            agent: 'bot',
            ...response,
            avatar: 'https://placehold.it/200x200'
          }

          this.disableInput = response.disableInput
          this.messageData.push(replyMessage)
        })
    },

    sendMessage (message) {
      const messageObj = {
        agent: 'customer',
        type: 'text',
        text: message
      }

      // Push to local data
      this.messageData.push(messageObj)

      // TODO: Request
      messageService.createMessage(messageObj)
        .then((response) => {
          const replyMessage = {
            agent: 'bot',
            ...response,
            avatar: 'https://placehold.it/200x200'
          }

          this.disableInput = response.disableInput
          this.messageData.push(replyMessage)
        })
    },

    selectOption (e) {
      // console.log(e)
    }
  }
}
</script>

<style src="../assets/scss/_app.scss" lang="scss"></style>
