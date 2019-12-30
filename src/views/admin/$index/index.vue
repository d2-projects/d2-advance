<template>
  <el-container class="admin-container">
    <el-header class="header">
      <aside-nav-menu-toggle v-model="isCollapse" />
    </el-header>
    <el-container>
      <el-aside class="aside" width="auto">
        <aside-nav-menu :menu="menu" :collapse="isCollapse" />
      </el-aside>
      <el-main class="main">
        <transition :name="transition">
          <div class="transition-wrapper" :key="$route.path">
            <router-view />
          </div>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideNavMenu from './components/AsideNavMenu'
import AsideNavMenuToggle from './components/AsideNavMenuToggle'
import menu from './menu'

export default {
  data() {
    return {
      isCollapse: false,
      menu,
      transition: 'fade-transverse'
    }
  },
  methods: {
    switchCollapse() {
      this.isCollapse = !this.isCollapse
    }
  },
  components: {
    AsideNavMenu,
    AsideNavMenuToggle
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../style/variable.styl'

$aside-width = 200px
$header-height = 60px
$right-margin = 20px

.admin-container
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  .header
    height $header-height
    line-height @height
    padding-left 0
    display flex
  .aside
    >>> .el-menu-vertical:not(.el-menu--collapse)
      width $aside-width
  .main
    position relative
    padding 0
    .transition-wrapper
      position absolute
      top 0
      left 0
      right $right-margin
      bottom 0
      overflow auto

.fade-transverse
  &-leave-active
  &-enter-active
    transition-property opacity transform
    transition-duration .45s
    transition-timing-function ease-out
  &-enter
    opacity 0
    transform translateX(-$right-margin)
  &-leave-to
    opacity 0
    transform translateX($right-margin)
</style>
