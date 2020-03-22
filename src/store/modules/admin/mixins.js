import { mapGetters, mapMutations } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import { namespace } from './index'
import { get } from 'lodash'
import { getStringHash } from '@/utils/get-hash'

export const asideCollapse = {
  computed: {
    ...mapFields(namespace, ['asideCollapse'])
  }
}

export const pageTabs = {
  computed: {
    ...mapFields(namespace, ['tabOpened', 'tabOptions', 'showTabs'])
  }
}

export const pageTransition = {
  computed: {
    ...mapFields(namespace, ['pageTransition'])
  }
}

export const asideTransition = {
  computed: {
    ...mapFields(namespace, ['asideTransition'])
  }
}

export const menu = {
  computed: {
    ...mapGetters(namespace, ['menu'])
  }
}

export const sourceLink = {
  computed: {
    ...mapFields(namespace, ['showSourceLink'])
  }
}

export const token = {
  computed: {
    ...mapFields(namespace, ['token'])
  }
}

export const flat = {
  computed: {
    ...mapFields(namespace, ['flat'])
  }
}

export const hotQueryMapQueryKey = '_qs'
export const hotQueryMap = {
  computed: {
    ...mapGetters(namespace, ['hotQueryMap']),
    hotQuery: {
      set(object) {
        const oldHo = get(this.$route, `query.${hotQueryMapQueryKey}`)
        const ho = getStringHash(JSON.stringify(object || ''))
        const existed = !!this.hotQueryMap[ho]
        if (!existed) {
          this.pushHotQuery([ho, Object.freeze(object)])
        } else {
          this.incrementHotQuery(ho)
        }
        if (oldHo !== ho) {
          this.$router.replace({
            query: { ...this.$route.query, [hotQueryMapQueryKey]: ho }
          })
        }
      },
      get() {
        const ho = get(this.$route, `query.${hotQueryMapQueryKey}`)
        return ho ? get(this.hotQueryMap[ho], 'value', {}) : {}
      }
    }
  },
  methods: {
    ...mapMutations(namespace, ['pushHotQuery', 'incrementHotQuery'])
  }
}
