<template>
  <div class="start-loading">
    <atom-spinner :animation-duration="1000" :size="60" :color="'#ff1d5e'" />
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
  text-align center
</style>
