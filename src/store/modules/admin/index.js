import { getField, updateField } from 'vuex-map-fields'
import menu from '@/views/admin/$index/menu'
import { flattenMenuItemOfAdmin } from '@/views/admin/$index/utils'

export const namespace = 'admin'

const init = _app => {
  const tabOptions = flattenMenuItemOfAdmin(menu)
  return {
    namespaced: true,
    state: {
      isCollapse: false,
      tabOpened: [tabOptions[0]],
      tabOptions
    },
    getters: {
      getField
    },
    mutations: {
      updateField
    }
  }
}

export default { namespace, init }
