import { getField, updateField } from 'vuex-map-fields'
import { flattenMenuItemOfAdmin } from './utils'
import { createMenu } from './menu'
import storeAutoPersist from '@/utils/store-auto-persist'

export const namespace = 'admin'

const init = app => {
  const menu = createMenu()
  const tabOptions = flattenMenuItemOfAdmin(menu)

  const { savedValues, watchValues } = storeAutoPersist(
    app,
    namespace
  )({
    showTabs: true,
    tabOpened: [tabOptions[0]],
    asideCollapse: false,
    asideTransition: true,
    pageTransition: true,
    showSourceLink: true,
    flat: false,

    token: null
  })

  return {
    namespaced: true,
    state: {
      tabOptions,
      menu,
      ...savedValues
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
