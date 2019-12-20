<template>
  <div class="start-loading">
    <div class="start-loading-inner">
      <div class="logo-for-spinner">
        <atom-spinner
          v-if="!error"
          :animation-duration="800"
          :size="120"
          color="#589ff8"
        />
      </div>
      <div v-if="error" class="error-info">
        <h1>Ops!</h1>
        <pre>{{ error }}</pre>
      </div>
      <div v-else>Please wait for loading...</div>
    </div>
  </div>
</template>

<script>
import AtomSpinner from 'epic-spinners/src/components/lib/AtomSpinner'

export default {
  props: ['error'],
  components: {
    AtomSpinner
  }
}
</script>

<style lang="stylus" scoped>
.start-loading
  height 100vh
  width 100%
  .start-loading-inner
    margin auto
    margin-top 25vh
    text-align center
    .logo-for-spinner
      position relative
      height 120px
      width 120px
      display inline-block
      background no-repeat center/70% url('../assets/logo.png')
    .error-info
      color red
</style>

<style lang="stylus">
.start-loading
  .atom-spinner
    .spinner-circle
      display none !important
</style>
