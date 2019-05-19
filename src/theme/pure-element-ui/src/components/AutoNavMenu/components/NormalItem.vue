<template>
  <el-menu-item :index="link">
    <i v-if="icon" :class="'el-icon-' + icon"></i>
    <span v-if="label" slot="title">{{ label }}</span>
  </el-menu-item>
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
    icon() {
      return get(this, 'meta.icon', 'document')
    },
    link() {
      return get(this, 'meta.link')
    }
  }
}
</script>
