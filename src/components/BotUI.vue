<template>
  <div class="qkb-bot-ui">
    <board></board>
    <bot-bubble></bot-bubble>
  </div>
</template>

<script>
import Board from './board/Board'
import BotBubble from './bot-bubble/BotBubble'

export default {
  name: 'VBotUI',
  components: {
    Board,
    BotBubble
  },
  created () {
    // console.log('ok')
  }
}
</script>

<style src="../assets/scss/_app.scss" lang="scss"></style>
