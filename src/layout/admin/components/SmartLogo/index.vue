<template>
  <div class="wrapper" :class="{ collapse, 'has-transition': hasTransition }">
    <img src="@/assets/logo.png" alt="logo" height="32px" width="32px" />
    <b class="text">Admin</b>
  </div>
</template>

<script>
export default {
  name: 'SmartLogo',
  props: {
    hasTransition: {
      type: Boolean,
      default: true
    },
    collapse: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
$aside-width = 200px
$aside-min-width = 64px
$header-height = 60px

.wrapper
  line-height $header-height
  width $aside-width
  text-align center
  overflow hidden
  img
    vertical-align middle
  .text
    vertical-align middle
    padding 0 10px
  &.has-transition
    transition width .3s ease-in-out
  &.collapse
    width $aside-min-width
    .text
      display none
</style>
