<template>
  <div class="wrapper" @click="handleClick">
    <i
      class="icon"
      :class="value ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'AsideNavMenuToggle',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../style/variable.styl'

.wrapper
  padding 0 20px
  cursor pointer
  color $regular-text-color
  &:focus, &:hover, &.is-active
    color $foreground-color
    transition color .3s
  .icon
    font-size 24px
    text-align center
</style>
