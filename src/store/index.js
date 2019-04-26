import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    isLogin: state => state.isLogin
  },
  state: {
    isLogin: false
  },
  mutations: {
    SET_IS_LIGON(state, value) {
      state.isLogin = value
    }
  },
  actions: {
    async init() {
      // ...
    },
    async login({ commit }) {
      commit('SET_IS_LIGON', true)
    },
    async logout({ commit }) {
      commit('SET_IS_LIGON', false)
    }
  }
})
