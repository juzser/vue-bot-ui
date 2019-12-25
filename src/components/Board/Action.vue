<template lang="pug">
.qkb-board-action(
  :class="actionClass"
)
  input.qkb-board-action__input(
    type="text",
    v-model="messageText",
    :disabled="disableInput",
    :placeholder="inputPlaceholder",
    @keydown.enter="sendMessage",
  )
  button.qkb-board-action__btn-send(@click="sendMessage")
    slot(name="sendButton")
      .qkb-send-icon
        IconSend.qkb-send-icon--plane
</template>
<script>
import IconSend from '@/assets/icons/send.svg'

export default {
  components: {
    IconSend
  },

  props: {
    inputPlaceholder: {
      type: String
    }
  },

  data () {
    return {
      messageText: null,
      disableInput: false
    }
  },

  computed: {
    actionClass () {
      const actionClasses = []

      if (this.disableInput) {
        actionClasses.push('qkb-board-action--disabled')
      }
      // TODO: sending

      return actionClasses
    }
  },

  methods: {
    sendMessage () {
      this.disableInput = true
      this.$emit('msg-send', this.messageText)
    }
  }
}
</script>
