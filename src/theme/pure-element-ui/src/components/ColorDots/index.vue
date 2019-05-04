<template>
  <div v-if="colors.length" class="color-dots">
    <span
      v-for="color in colors"
      :key="color"
      class="color-dot"
      :style="{ background: color }"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.color-dots
  margin 0 10px
  display inline-block
  .color-dot
    display inline-block
    width 12px
    height 12px
    margin 0 5px
    border-radius 6px
    box-shadow 0 0 0px 2px rgba(158, 158, 158, 0.4)
</style>
