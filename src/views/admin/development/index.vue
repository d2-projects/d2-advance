<template>
  <page-container>
    <template #header>
      <h1>{{ $t('Development') }} <i class="el-icon-magic-stick"></i></h1>
    </template>

    <h2>process.env</h2>
    <pre>{{ env }}</pre>
  </page-container>
</template>

<script>
export default {
  inject: ['@adminContainer'],
  data() {
    return {
      env: process.env
    }
  }
}
</script>
