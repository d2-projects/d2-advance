<template>
  <div class="wrapper">
    <img width="100px" src="../assets/logo.png" />
    <h1>{{ $t('ooops') }}</h1>
    <p>{{ $t('page-not-found') }}</p>
    <el-button type="primary" icon="el-icon-back" @click="handleGoBack">{{
      $t('go-back')
    }}</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleGoBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  padding 25vh 10px
  text-align center
</style>
