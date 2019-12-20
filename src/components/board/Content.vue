<template>
  <div class="qkb-board-content">
    <template v-if="listMessageBubble.length">
      <message-bubble v-for="(message, i) in listMessageBubble" :key="i" :message="message"></message-bubble>
    </template>
  </div>
</template>

<script>
import MessageBubble from './MessageBubble'
import { mapState } from 'vuex'
export default {
  components: {
    MessageBubble
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'listMessageBubble'
    ])
  }
}
</script>
