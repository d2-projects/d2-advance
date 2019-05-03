<template>
  <el-menu-item-group>
    <template v-if="label" slot="title">{{ label }}</template>
    <template v-for="(item, index) in group">
      <auto-item :key="index" :meta="item" />
    </template>
  </el-menu-item-group>
</template>

<script>
import { get } from 'lodash'

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
    group() {
      return get(this, 'meta.group')
    }
  },
  components: {
    // @ https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
    AutoItem: () => import('./AutoItem')
  }
}
</script>
