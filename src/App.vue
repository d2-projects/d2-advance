<template>
  <div id="app">
    <router-view />
    <source-viewer />
  </div>
</template>

<script>
import SourceViewer from '@/components/extend/SourceViewer'

export default {
  components: {
    SourceViewer
  }
}
</script>
