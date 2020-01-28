<template>
  <div class="page-container">
    <div class="login-wrapper">
      <h1>Admin</h1>
      <div class="form-container">
        <el-form ref="form" :model="form" label-width="0">
          <el-form-item>
            <el-input
              :placeholder="$t('admin.login.placeholder.username')"
              v-model="form.username"
              clearable
            >
              <template slot="prepend"><i class="el-icon-user"/></template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              :placeholder="$t('admin.login.placeholder.password')"
              v-model="form.password"
              clearable
            >
              <template slot="prepend"><i class="el-icon-key"/></template>
            </el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit" class="submit-button">{{
            $t('admin.login.button.login')
          }}</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      // ...
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../style/variable.styl'

$min-height = 480px
$max-width = 280px

.page-container
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  display flex
  align-items center
  justify-content center
  height 100%
  min-height $min-height
.login-wrapper
  min-height $min-height
  h1
    text-align center
    font-weight normal
  .form-container
    margin $base-padding auto
    max-width $max-width
    padding $base-padding
    background #fff
    border-radius $base-radius
    box-shadow 0 1px 3px 0 #0000001a
    .submit-button
      width 100%
</style>
