<template>
  <div class="home">
    <div class="colorful-box-wrapper">
      <div class="colorful-box">
        <div class="box-head">
          <div class="dots">
            <span class="a"></span>
            <span class="b"></span>
            <span class="c"></span>
          </div>
        </div>
        <div class="box-body main">
          <img
            class="right-logo"
            width="100"
            height="100"
            src="../assets/logo.png"
          />
          <h1><span class="foreground-text">D2</span> Advance</h1>
        </div>
      </div>
    </div>
    <div class="colorful-box-wrapper">
      <div class="colorful-box">
        <div class="box-body demo">
          <h2>Admin</h2>
          <p>{{ $t('home.admin.desc') }}</p>
          <router-link :to="adminHomePath">
            <el-button
              size="medium"
              type="primary"
              icon="el-icon-right"
              circle
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { homePath as adminHomePath } from '@/routes/admin'

export default {
  data() {
    return {
      adminHomePath
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../style/variable.styl'

.home
  width 100%
  height 100vh
  .colorful-box-wrapper
    margin auto
    max-width 800px
    padding-top 10vh
    &+.colorful-box-wrapper
      padding-top 10px
    .colorful-box
      position relative
      display flex
      flex-direction column
      margin 10px
      background $background-white-color
      border-radius 10px
      overflow hidden
      .box-head
        padding 10px
        height 22px
        line-height @height
        background $background-solid-color
        .dots
          display inline-block
          vertical-align middle
          .a, .b, .c
            display inline-block
            width 14px
            height 14px
            background red
            margin-right 10px
            border-radius 50%
          .a
            background #ed6a5e
          .b
            background #f6be4f
          .c
            background #72be47
      .box-body
        padding 10px
        flex 1
        h1, h2
          font-weight 400
        p
          color $secondary-text-color
        &.main
          padding 100px 10px
          text-align center
        &.demo
          padding 10px 10px 20px
          text-align center
        .foreground-text
          color $primary-color
</style>
