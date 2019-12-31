<template lang="pug">
.qkb-board-action(
  :class="actionClass"
)
  .qkb-board-action__wrapper
    input.qkb-board-action__input(
      type="text",
      v-model="messageText",
      ref="qkbMessageInput",
      :disabled="disableInput",
      :placeholder="inputPlaceholder",
      @keydown.enter="sendMessage",
    )
    .qkb-board-action__box
      slot(name="actions")
        button.qkb-action-item.qkb-action-item--emo

      button.qkb-action-item.qkb-action-item--send(@click="sendMessage")
        slot(name="sendButton")
          IconSend.qkb-action-icon.qkb-action-icon--send
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

      if (this.messageText) {
        actionClasses.push('qkb-board-aciton--typing')
      }

      // TODO: sending

      return actionClasses
    }
  },

  mounted () {
    this.$refs.qkbMessageInput.focus()
  },

  methods: {
    sendMessage () {
      if (this.messageText) {
        this.$emit('msg-send', this.messageText)
        this.messageText = null
      }
    }
  }
}
</script>
