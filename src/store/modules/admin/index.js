import { includes } from 'lodash'
import { FLAGS } from '@/constants/flags'
import { getField, updateField } from 'vuex-map-fields'
import menu from '@/views/admin/$index/menu'
import { flattenMenuItemOfAdmin } from '@/views/admin/$index/utils'

export const namespace = 'admin'

const init = _app => {
  const tabOptions = flattenMenuItemOfAdmin(menu)
  return {
    namespaced: true,
    state: {
      flags: [FLAGS.TRANSITION],

      isCollapse: false,
      tabOpened: [tabOptions[0]],
      tabOptions,
      asideTransition: true,
      pageTransition: 'fade-transverse'
    },
    getters: {
      getField,
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
