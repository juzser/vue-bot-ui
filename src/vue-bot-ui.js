import VueBotUI from './components/BotUI.vue'

const Plugin = {
  install (Vue, options) {
    Vue.component('VueBotUI', VueBotUI)

    if (options) {
      // console.log('options', options)
    }
  }
}

export default Plugin
export { VueBotUI }
