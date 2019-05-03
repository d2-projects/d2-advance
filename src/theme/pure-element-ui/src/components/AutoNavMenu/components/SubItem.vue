<template>
  <el-submenu :index="link">
    <template slot="title">
      <i v-if="icon" :class="'el-icon-' + icon"></i>
      <span v-if="label" slot="title">{{ label }}</span>
    </template>
    <template v-if="children">
      <template v-for="(sub, index) in children">
        <auto-item :meta="sub" :key="index" />
      </template>
    </template>
  </el-submenu>
</template>

<script>
import { get } from 'lodash'

export default {
  name: 'SubItem',
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
    children() {
      return get(this, 'meta.children')
    }
  },
  components: {
    // @ https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
    AutoItem: () => import('./AutoItem')
  }
}
</script>
