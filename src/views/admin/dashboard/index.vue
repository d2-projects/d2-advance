<template>
  <page-container>
    <h1>{{ $t('hello') }}</h1>
  </page-container>
</template>

<script>
import { container } from '@/views/admin/$index/components/mixins'

export default {
  mixins: [container]
}
</script>
