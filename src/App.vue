<template>
  <div id="app">
    <fade-transition mode="out-in">
      <router-view />
    </fade-transition>
    <source-link />
  </div>
</template>

<script>
import SourceLink from '@/components/extend/SourceLink'
import { FadeTransition } from 'vue2-transitions'
import packageInfo from '../package.json'

export default {
  mounted() {
    this.$app.logger.capsule('D2', 'Advance', `Version ${packageInfo.version}`)
  },
  components: {
    SourceLink,
    FadeTransition
  }
}
</script>
