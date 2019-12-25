<template lang="pug">
.qkb-bot-ui
  .qkb-board(v-if="botActive")
    BoardHeader(
      :bot-title="options.botTitle",
      @close-bot="botToggle"
    )
    BoardContent(
      :main-data="messageData"
    )
    BoardAction(
      :input-placeholder="options.inputPlaceholder",
      @msg-send="sendMessage"
    )
  .qkb-bot-bubble
    button.qkb-bubble-btn(
      @click="botToggle"
    )
      slot(name="bubbleButton")
        BubbleIcon
</template>

<script>
import BoardHeader from './Board/Header'
import BoardContent from './Board/Content'
import BoardAction from './Board/Action'
import { messageService } from '@/services/'
import BubbleIcon from '@/assets/icons/bubble.svg'

export default {
  name: 'VBotUI',
  components: {
    BoardHeader,
    BoardContent,
    BoardAction,
    BubbleIcon
  },

  props: {
    options: {
      type: Object
    }
  },

  data () {
    return {
      botActive: false,
      messageData: []
    }
  },

  methods: {
    botToggle () {
      this.botActive = !this.botActive
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
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style src="../assets/scss/_app.scss" lang="scss"></style>
