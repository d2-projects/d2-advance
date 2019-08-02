<template>
  <div id="app">
    <fade-transition mode="out-in">
      <router-view />
    </fade-transition>
    <source-viewer />
  </div>
</template>

<script>
import SourceViewer from '@/components/extend/SourceViewer'
import { FadeTransition } from 'vue2-transitions'
import packageInfo from '../package.json'

export default {
  mounted() {
    this.$app.logger.capsule('D2', 'Advance', `Version ${packageInfo.version}`)
  },
  components: {
    SourceViewer,
    FadeTransition
  },
}
</script>
