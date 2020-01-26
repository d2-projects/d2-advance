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
        <h2>{{ $t('startup-failed-title') }}</h2>
        <p>{{ $t('startup-failed-desc') }}</p>
        <pre class="error-text">{{ error.stack }}</pre>
      </div>
      <div v-else>{{ $t('waiting') }}</div>
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
    position relative
    margin auto
    padding-top 25vh
    text-align center
    .logo-for-spinner
      position relative
      height 120px
      width 120px
      display inline-block
      background no-repeat center/70% url('../assets/logo.png')
      >>>
        .atom-spinner
          .spinner-circle
            display none !important
    .error-info
      color red
      .error-text
        color #909399
        display inline-block
        border 1px solid #cfd7e5
        padding 10px
        border-radius 5px
        background #e5e9ee
        text-align left
        max-width 90vw
        white-space pre-wrap
        font-size 12px
</style>
