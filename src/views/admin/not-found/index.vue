<template>
  <page-container type="ghost">
    <template slot="header">
      <h1>{{ $t('Not Found') }} <i class="el-icon-help"></i></h1>
      <p>{{ $t('page-not-found') }}</p>
      <el-button type="primary" icon="el-icon-back" @click="handleGoBack">{{
        $t('go-back')
      }}</el-button>
    </template>
  </page-container>
</template>

<script>
import { container } from '@/views/admin/$index/components/mixins'

export default {
  mixins: [container],
  methods: {
    handleGoBack() {
      this.$router.go(-1)
    }
  }
}
</script>
