<template>
  <el-tabs
    :value="current"
    type="card"
    class="tabs"
    @tab-remove="onClose"
    @tab-click="onClick"
  >
    <el-tab-pane
      v-for="(item, index) in opened"
      :key="item.index"
      :label="item.label"
      :name="item.index"
      :closable="item.closeable || !!index"
    />
  </el-tabs>
</template>

<script>
import { find, uniqBy } from 'lodash'

export default {
  name: 'PageTabs',
  props: {
    current: {
      // recommend $route.path
      type: String,
      required: true
    },
    opened: {
      type: Array,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  watch: {
    current: {
      immediate: true,
      handler(index) {
        const optional = find(this.options, { index })
        if (optional) {
          const opened = find(this.opened, { index })
          if (!opened) {
            this.$emit('update:opened', [...this.opened, optional])
          }
        } else {
          // eslint-disable-next-line no-console
          console.warn('not found index', index)
        }
      }
    }
  },
  methods: {
    onClose(targetIndex) {
      let tabs = this.opened
      let current = this.current
      if (current === targetIndex) {
        tabs.forEach((tab, index) => {
          if (tab.index === targetIndex) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              current = nextTab.index
            }
          }
        })
      }
      if (this.current !== current) {
        this.$emit('switch', find(this.opened, { index: current }))
      }
      this.$emit(
        'update:opened',
        tabs.filter(tab => tab.index !== targetIndex)
      )
    },
    onClick(tab) {
      if (tab.name !== this.current) {
        this.$emit('switch', find(this.opened, { index: tab.name }))
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../style/variable.styl'

.tabs
  color $regular-text-color
  >
    >>>
      .el-tabs__header
        margin 0
        border-color $border-base-color
        .el-tabs__nav
          overflow hidden
        .el-tabs__nav
        .el-tabs__item
          color inherit
          border-color $border-base-color
          background $background-solid-color
        .el-tabs__item
          &.is-active
            color $foreground-color
            border-bottom none
            background $background-white-color
          &:not(.is-active)
            &:hover, &:active
              color inherit
      .el-tabs__content
        display none
</style>
