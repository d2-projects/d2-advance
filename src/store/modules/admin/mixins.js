import { mapFields } from 'vuex-map-fields'
import { namespace } from './index'

export const isCollapse = {
  computed: {
    ...mapFields(namespace, ['isCollapse'])
  }
}

export const tabsData = {
  computed: {
    ...mapFields(namespace, ['tabOpened', 'tabOptions'])
  }
}
