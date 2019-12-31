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
export default {
  data () {
    return {
      botOptions: {
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
