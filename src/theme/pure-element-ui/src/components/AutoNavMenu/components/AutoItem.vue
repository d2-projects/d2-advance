<template>
  <component :is="component" :meta="meta"></component>
</template>

<script>
import { get } from 'lodash'
import NormalItem from './NormalItem'
import SubItem from './SubItem'
import GroupItem from './GroupItem'

export default {
  props: {
    meta: {
      type: Object,
      required: true
    }
  },
  computed: {
    label() {
      return get(this, 'meta.label')
    },
    icon() {
      return get(this, 'meta.icon')
    },
    link() {
      return get(this, 'meta.link')
    },
    group() {
      return get(this, 'meta.group')
    },
    children() {
      return get(this, 'meta.children')
    },
    component() {
      if (this.group) return 'group-item'
      if (this.children) return 'sub-item'
      return 'normal-item'
    }
  },
  components: {
    NormalItem,
    SubItem,
    GroupItem
  }
}
</script>
