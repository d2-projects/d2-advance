<template>
  <div class="start-loading">
    <atom-spinner
      class="spinner"
      :animation-duration="800"
      :size="120"
      color="#589ff8"
    />
  </div>
</template>

<script>
import AtomSpinner from 'epic-spinners/src/components/lib/AtomSpinner'

export default {
  components: {
    AtomSpinner
  }
}
</script>

<style lang="stylus" scoped>
.start-loading
  height 100vh
  width 100%
  .spinner
    position relative
    top 36vh
    margin auto
    background no-repeat center/70% url('../assets/logo.png')
</style>

<style lang="stylus">
.start-loading
  .atom-spinner
    .spinner-circle
      display none !important
</style>
