import { mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import { namespace } from './index'

export const asideCollapse = {
  computed: {
    ...mapFields(namespace, ['asideCollapse'])
  }
}

export const tabsData = {
  computed: {
    ...mapFields(namespace, ['tabOpened', 'tabOptions'])
  }
}

export const pageTransition = {
  computed: {
    ...mapGetters(namespace, ['pageTransition'])
  }
}

export const asideTransition = {
  computed: {
    ...mapGetters(namespace, ['asideTransition'])
  }
}

export const menu = {
  computed: {
    ...mapGetters(namespace, ['menu'])
  }
}

export const flags = {
  computed: {
    ...mapFields(namespace, ['flags'])
  }
}
