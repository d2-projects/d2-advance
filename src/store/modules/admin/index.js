import { includes } from 'lodash'
import { FLAGS } from '@/constants/flags'
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
      flags: [FLAGS.TRANSITION],

      showTabs: true,
      tabOpened: [tabOptions[0]],
      tabOptions,

      asideCollapse: false,
      asideTransition: true,
      pageTransition: 'fade-transverse',

      showSourceLink: true,

      menu
    },
    getters: {
      getField,
      menu(state) {
        return state.menu
      },
      asideTransition(state) {
        return includes(state.flags, FLAGS.TRANSITION)
          ? state.asideTransition
          : null
      },
      pageTransition(state) {
        return includes(state.flags, FLAGS.TRANSITION)
          ? state.pageTransition
          : null
      }
    },
    mutations: {
      updateField
    }
  }
}

export default { namespace, init }
