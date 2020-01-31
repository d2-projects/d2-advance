import { mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import { namespace } from './index'

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
