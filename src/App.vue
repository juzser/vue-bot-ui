<template lang="pug">
#app
  img(
    alt="Vue Bot UI",
    src="./assets/logo.png"
  )
  VueBotUI(
    :options="botOptions"
  )
</template>
<script>
import BotIcon from '@/assets/icons/bot.png'

export default {
  components: {
    BotIcon
  },

  data () {
    return {
      botOptions: {
        botAvatarImg: BotIcon,
        boardContentBg: '#f4f4f4',
        msgBubbleBgBot: '#fff',
        inputPlaceholder: 'Type hereeee...'
      }
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
