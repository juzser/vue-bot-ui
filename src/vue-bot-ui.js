import BotUI from '@/components/BotUI.vue'

const Plugin = {
  install (Vue, options) {
    Vue.component('VueBotUI', BotUI)

    if (options) {
      // console.log('options', options)
    }
  }
}

export default Plugin
