import Vue from 'vue'
import App from './App.vue'
import VueBotUI from './vue-bot-ui'

import store from './_store'

Vue.config.productionTip = false

Vue.use(VueBotUI)

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
