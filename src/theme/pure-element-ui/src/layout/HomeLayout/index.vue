<template>
  <div style="overflow-x: hidden">
    <auto-nav-menu :menu="menu" mode="horizontal" />
    <slide-x-right-transition mode="out-in">
      <keep-alive>
        <slot />
      </keep-alive>
    </slide-x-right-transition>
  </div>
</template>

<script>
import { SlideXRightTransition } from 'vue2-transitions'
import AutoNavMenu from '../../components/AutoNavMenu'

export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  components: {
    SlideXRightTransition,
    AutoNavMenu
  }
}
</script>

<style lang="stylus" scoped>
.label
  text-transform capitalize
</style>
