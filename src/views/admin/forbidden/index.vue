<template>
  <page-container type="ghost">
    <template slot="header">
      <h1>{{ $t('Forbidden') }} <i class="el-icon-no-smoking"></i></h1>
      <p>{{ $t('forbidden-page-alert') }}</p>
    </template>
  </page-container>
</template>

<script>
import { container } from '@/views/admin/$index/components/mixins'

export default {
  mixins: [container]
}
</script>
