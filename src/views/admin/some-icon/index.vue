<template>
  <page-container>
    <template #header>
      <h1>{{ $t('Some icon') }} <i class="el-icon-star-off"></i></h1>
    </template>
    <P>{{ $t('TODO') }}</P>
  </page-container>
</template>

<script>
import { container } from '@/views/admin/$index/components/mixins'

export default {
  mixins: [container]
}
</script>
