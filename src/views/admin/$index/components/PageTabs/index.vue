<template>
  <div class="wrapper">
    <div class="tabs">
      <div class="tabs-inner">
        <el-tabs
          :value="current"
          type="card"
          @tab-remove="onClose"
          @tab-click="onClick"
        >
          <el-tab-pane
            v-for="(item, index) in opened"
            :key="item.index"
            :label="item.label"
            :name="item.index"
            :closable="item.closeable !== undefined || !!index"
          />
        </el-tabs>
      </div>
    </div>
    <div class="controller">
      <el-dropdown
        split-button
        @click="handleCommand('closeAll')"
        @command="handleCommand"
      >
        <i class="el-icon-close" />
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item command="closeLeft">Close Left</el-dropdown-item>
          <el-dropdown-item command="closeRight">Close Right</el-dropdown-item> -->
          <el-dropdown-item command="closeOther">Close Other</el-dropdown-item>
          <el-dropdown-item command="closeAll">Close All</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { find, uniqBy, filter, isUndefined, findIndex, slice } from 'lodash'
import { closeAll, closeOther } from './utils'

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
    handleCommand(type) {
      let tabs = this.opened
      let result = null
      let currentValue = this.current

      switch (type) {
        case 'closeAll':
          result = closeAll(tabs, currentValue)
          break
        case 'closeLeft':
          // TODO
          break
        case 'closeRight':
          // TODO
          break
        case 'closeOther':
          result = closeOther(tabs, currentValue)
          break
        default:
          // eslint-disable-next-line no-console
          console.warn('not found command', type)
          break
      }

      if (result) {
        if (result.switchTo) {
          this.emitSwitch(result.switchTo.index)
        }
        this.$emit('update:opened', result.tabs)
      }
    },
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
      this.emitSwitch(current)
      this.$emit(
        'update:opened',
        tabs.filter(tab => tab.index !== targetIndex)
      )
    },
    onClick(tab) {
      this.emitSwitch(tab.name)
    },
    emitSwitch(targetIndex) {
      if (targetIndex !== this.current) {
        this.$emit('switch', find(this.opened, { index: targetIndex }))
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style.styl'
</style>
