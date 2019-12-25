import Vue from 'vue'
import App from './App.vue'
import VueBotUI from './vue-bot-ui'

Vue.config.productionTip = false

Vue.use(VueBotUI)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
