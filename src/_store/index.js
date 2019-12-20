import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  isTyping: false,
  botStatus: false,
  listMessageBubble: []
}

const getters = {}

const actions = {
  openBot ({ commit }) {
    commit('openBot')
  },
  closeBot ({ commit }) {
    commit('closeBot')
  },
  enableTyping ({ commit }) {
    commit('enableTyping')
  },
  disableTyping ({ commit }) {
    commit('disableTyping')
  },
  addMessage ({ commit }, message) {
    commit('addMessage', message)
  }
}

const mutations = {
  openBot (state) {
    state.botStatus = true
  },
  closeBot (state) {
    state.botStatus = false
  },
  enableTyping (state) {
    state.isTyping = true
  },
  disableTyping (state) {
    state.isTyping = false
  },
  addMessage (state, message) {
    state.listMessageBubble.push(message)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
})
