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
            :label="translate(item.label)"
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
          <el-dropdown-item command="closeLeft">{{
            translate('Close Left')
          }}</el-dropdown-item>
          <el-dropdown-item command="closeRight">{{
            translate('Close Right')
          }}</el-dropdown-item>
          <el-dropdown-item command="closeOther">{{
            translate('Close Other')
          }}</el-dropdown-item>
          <el-dropdown-item command="closeAll">{{
            translate('Close All')
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { find } from 'lodash'
import { closeAll, closeOther, closeLeft, closeRight } from './utils'

export default {
  name: 'PageTabs',
  props: {
    current: {
      // recommend $route.path
      type: String,
      required: true
    },
    value: {
      type: Array,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    opened() {
      return this.value
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
            this.$emit('input', [...this.opened, optional])
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
          result = closeLeft(tabs, currentValue)
          break
        case 'closeRight':
          result = closeRight(tabs, currentValue)
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
        this.$emit('input', result.tabs)
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
        'input',
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
    },
    translate(text) {
      // * i18n support
      return this.$t ? this.$t(text) : text
    }
  }
}
</script>

<style lang="stylus" scoped src="./style.styl" />
