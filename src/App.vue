<template>
  <transition name="fade">
    <div id="app" v-show="show">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </transition>
</template>

<script>
import app from '@/main'

export default {
  data() {
    return {
      show: false
    }
  },
  watch: {
    '$i18n.locale'(lang) {
      app.emit('changeLanguage', lang)
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
