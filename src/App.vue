<template>
  <transition name="fade">
    <div v-show="show" id="app">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  }
}
</script>

<style lang="stylus" scoped>
.fade
  &-enter-active
  &-leave-active
    transition opacity .5s
  &-enter
  &-leave-to
    opacity 0
</style>
