<template>
  <el-container class="page-container" :class="[type]">
    <el-header v-if="$slots.header" class="header">
      <slot name="header" />
    </el-header>
    <el-container class="center-wapper">
      <el-aside v-if="$slots.aside" width="auto" class="aside">
        <slot name="aside" />
      </el-aside>
      <el-main class="body">
        <slot />
      </el-main>
    </el-container>
    <el-footer v-if="$slots.footer" class="footer">
      <slot name="footer" />
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'PageContainer',
  props: {
    type: {
      type: String,
      default: 'card' // card | ghost | none
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../style/variable.styl'

.page-container
  display flex
  flex-direction column
  height 100%
  box-sizing border-box
  >
    .header, .footer
      padding $base-padding
      height unset !important
    .center-wapper
      height 0
      >
        .aside, .body
          overflow auto
          height 100%
        .aside
          min-width 200px
          max-width 360px
        .body
          padding $base-padding
          flex 1
  &.card
    background $background-white-color
    border $solid-border
    border-radius $top-radius
    border-bottom none
    >
      .header
        border-bottom $solid-border
      .center-wapper > .aside
        border-right $solid-border
      .footer
        border-top $solid-border
  &.ghost
    background transparent
    >
      .header, .footer
        background $background-white-color
        border $solid-border
      .header
        border-radius $base-radius
      .footer
        border-bottom none
        border-radius $top-radius
</style>
