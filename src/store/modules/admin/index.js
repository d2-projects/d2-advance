import { getField, updateField } from 'vuex-map-fields'
import { flattenMenuItemOfAdmin } from './utils'
import { createMenu } from './menu'

export const namespace = 'admin'

const init = _app => {
  const menu = createMenu()
  const tabOptions = flattenMenuItemOfAdmin(menu)

  return {
    namespaced: true,
    state: {
      showTabs: true,
      tabOpened: [tabOptions[0]],
      tabOptions,

      asideCollapse: false,
      asideTransition: true,
      pageTransition: true,

      showSourceLink: true,

      menu
    },
    getters: {
      getField,
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
