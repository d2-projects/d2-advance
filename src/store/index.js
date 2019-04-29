import Vue from 'vue'
import Vuex from 'vuex'

import { get } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    isLogin: state => state.isLogin,
    mainTheme: state => state.mainTheme,
    mainThemeName: state => get(state, 'mainTheme.name')
  },
  state: {
    isLogin: false,
    mainTheme: {
      name: 'pure-element-ui'
    }
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
