<template>
  <page-container>
    <h2>process.env</h2>
    <pre>{{ env }}</pre>
  </page-container>
</template>

<script>
import { container } from '@/views/admin/$index/components/mixins'

export default {
  mixins: [container],
  data() {
    return {
      env: process.env
    }
  }
}
</script>
