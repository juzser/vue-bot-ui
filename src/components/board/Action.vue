<template lang="pug">
  .qkb-board-action
    input.qkb-board-action__input(
      type='text',
      v-model='messageText',
      @keydown.enter='sendMessage',
      :disabled='disableInput'
    )
    button.qkb-board-action__btn-send(@click='sendMessage') SEND
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { messageService } from '../../_services'

export default {
  data () {
    return {
      messageText: '',
      disableInput: false
    }
  },
  computed: {
    ...mapState([
      'isTyping'
    ])
  },
  methods: {
    ...mapActions(['enableTyping', 'disableTyping', 'addMessage']),
    async sendMessage () {
      const messageText = this.messageText
      const message = {
        agent: 'customer',
        type: 'text',
        text: messageText
      }
      this.addMessage(message)
      this.messageText = ''
      this.enableTyping()
      const response = await messageService.createMessage(message)
      if (response) {
        this.disableTyping()
        const replyMessage = {
          agent: 'bot',
          ...response,
          avatar: 'https://www.w3schools.com/css/paris.jpg'
        }
        this.disableInput = response.disableInput
        this.addMessage(replyMessage)
      }
    }
  }
}
</script>
