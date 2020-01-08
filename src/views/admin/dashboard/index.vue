<template>
  <page-container>
    <template slot="header">
      <h1>{{ $t('hello') }}</h1>
    </template>
    <el-calendar v-model="date" />
  </page-container>
</template>

<script>
import { container } from '@/views/admin/$index/components/mixins'

export default {
  mixins: [container],
  data() {
    return {
      date: new Date()
    }
  }
}
</script>
