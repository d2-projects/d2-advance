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
        <div class="box-body">
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
  </div>
</template>

<style lang="stylus" scoped>
@import '../style/variable.styl'

.home
  width 100%
  height 100vh
  .colorful-box-wrapper
    margin auto
    max-width 800px
    padding-top 10vh
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
        padding 100px 10px
        flex 1
        text-align center
        h1
          font-weight 300
        .foreground-text
          color $primary-color
</style>
