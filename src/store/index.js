import Vuex from 'vuex'
import admin from './modules/admin'

export default app =>
  new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      [admin.namespace]: admin.init(app)
    }
  })
