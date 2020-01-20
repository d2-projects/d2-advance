import { getField, updateField } from 'vuex-map-fields'
import { flattenMenuItemOfAdmin } from './utils'
import { createMenu } from './menu'
import { pick, keys } from 'lodash'
import getStorage from '@/utils/get-storage'

export const namespace = 'admin'

const init = app => {
  const menu = createMenu()
  const tabOptions = flattenMenuItemOfAdmin(menu)

  const defaults = {
    showTabs: true,
    tabOpened: [tabOptions[0]],
    asideCollapse: false,
    asideTransition: true,
    pageTransition: true,
    showSourceLink: true
  }

  const storage = getStorage(namespace, { defaults })
  const watchValues = state => pick(state, keys(defaults))
  app.on('done:createStore', ({ store }) => {
    store.watch(
      rootState => watchValues(rootState[namespace]),
      values => storage.setState(values).write()
    )
  })

  return {
    namespaced: true,
    state: {
      tabOptions,
      ...storage.getState(),
      menu
    },
    getters: {
      getField,
      watchValues,
      menu(state) {
        return state.menu
      }
    },
    mutations: {
      updateField
    }
  }
}

export default { namespace, init }
