<template>
  <div class="error-ops-wrap">
    <h1>{{ title }}</h1>
    <p v-if="message">{{ message }}</p>
    <el-button type="primary" icon="el-icon-arrow-right" @click="handleBack">{{
      handleBackText
    }}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: false
    },
    handleBack: {
      type: Function,
      required: true
    },
    handleBackText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.error-ops-wrap
  text-align center
</style>
