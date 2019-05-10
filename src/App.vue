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

export default {
  mounted() {
    this.$app.logger('xxx')
  },
  components: {
    SourceViewer,
    FadeTransition
  }
}
</script>
