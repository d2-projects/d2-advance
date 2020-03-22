import Vue from 'vue'
import { getField, updateField } from 'vuex-map-fields'
import { flattenMenuItemOfAdmin } from './utils'
import { createMenu } from './menu'
import storeAutoPersist from '@/utils/store-auto-persist'
import { keys, chain } from 'lodash'

export const namespace = 'admin'

const init = app => {
  const menu = createMenu()
  const tabOptions = flattenMenuItemOfAdmin(menu)

  const defaultAutoPersist = storeAutoPersist(
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

  const hotQueryAutoPersist = storeAutoPersist(app, namespace, {
    storageKey: 'hotQuery',
    deep: true
  })({
    hotQueryMap: {}
  })

  return {
    namespaced: true,
    state: {
      tabOptions,
      menu,
      ...defaultAutoPersist.savedValues,
      ...hotQueryAutoPersist.savedValues
    },
    getters: {
      getField,
      menu(state) {
        return state.menu
      },
      hotQueryMap(state) {
        return state.hotQueryMap
      }
    },
    mutations: {
      updateField,
      incrementHotQuery(state, ho) {
        state.hotQueryMap[ho].count++
      },
      pushHotQuery(state, [key, value]) {
        Vue.set(state.hotQueryMap, key, { value, count: 0 })

        // ! GC: keep 10 recent and 10 max count when over 50
        const allKey = keys(state.hotQueryMap)
        if (allKey.length > 50) {
          chain(allKey)
            .take(allKey.length - 10)
            .map(key => ({ count: state.hotQueryMap[key].count, key }))
            .sortBy('count')
            .take(allKey.length - 20)
            .value()
            .map(({ key }) => Vue.delete(state.hotQueryMap, key))
        }
      }
    }
  }
}

export default { namespace, init }
