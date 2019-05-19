import Vue from 'vue'
import Vuex from 'vuex'

import { get } from 'lodash'
import { app } from '@/core'

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
    async init({ commit }) {
      // fetch user profile by local token
      const token = app.localStorage.get('token').value()
      if (token) {
        try {
          // TODO: fetch user profile to state
          commit('SET_IS_LIGON', true)
        } catch (error) {
          // remove local token when matching some error code
          app.localStorage.unset('token').write()
          throw error
        }
      }
    },
    async login({ commit }) {
      // TODO: post login & save token to local
      commit('SET_IS_LIGON', true)
      app.localStorage.set('token', 'THISISAFAKETOKEN').write()
    },
    async logout({ commit }) {
      // TODO: post logout & remove local token
      commit('SET_IS_LIGON', false)
      app.localStorage.unset('token').write()
    }
  }
})
