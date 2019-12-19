<template>
  <div class="qkb-board-content">
    <message-bubble :message="message"></message-bubble>
  </div>
</template>

<script>
import MessageBubble from './MessageBubble'
export default {
  components: {
    MessageBubble
  },
  data () {
    return {
      message: {
        text: 'Hello',
        avatar: 'https://www.w3schools.com/css/paris.jpg'
      }
    }
  }
}
</script>
