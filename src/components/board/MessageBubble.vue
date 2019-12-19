<template>
  <div class="qkb-board-message-bubble">
    <img :src="message.avatar" alt="msg-avatar" class="qkb-board-message-bubble__avatar" />
    <div class="qkb-board-message-bubble__message">{{ message.text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>
