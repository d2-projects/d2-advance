<template>
  <el-container class="admin-container">
    <el-header class="header">
      <aside-nav-menu-toggle v-model="isCollapse" />
    </el-header>
    <el-container>
      <el-aside class="aside" width="auto">
        <aside-nav-menu :menu="menu" :collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header class="tabs-wrapper" height="auto" v-if="hasTabs">
          <page-tabs
            :current="$route.path"
            v-bind.sync="tabsData"
            @switch="handleSwitchTabs"
          />
        </el-header>
        <el-main class="main">
          <transition :name="pageTransition">
            <div class="page-wrapper" :key="$route.path">
              <router-view :class="{ 'sharp-top': hasTabs }" />
            </div>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { filter, uniqBy } from 'lodash'
import AsideNavMenu from './components/AsideNavMenu'
import AsideNavMenuToggle from './components/AsideNavMenuToggle'
import PageTabs from './components/PageTabs'
import menu from './menu'
import { flattenMenuItemOfAdmin } from './utils'

export default {
  data() {
    const tabOptions = flattenMenuItemOfAdmin(menu)
    const tabOpened = [tabOptions[0]]

    return {
      menu,

      hasTabs: true,
      tabsData: {
        opened: tabOpened,
        options: tabOptions
      },

      isCollapse: false,
      pageTransition: 'fade-transverse' // '[name]' | ''
    }
  },
  methods: {
    handleSwitchTabs({ index }) {
      this.$router.push(index)
    }
  },
  components: {
    AsideNavMenu,
    AsideNavMenuToggle,
    PageTabs
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
  .tabs-wrapper
    padding 0
    margin-right $right-margin
  .main
    position relative
    padding 0
    .page-wrapper
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
    transition-duration .3s
    transition-timing-function ease-out
  &-enter
    opacity 0
    transform translateX(-$right-margin)
  &-leave-to
    opacity 0
    transform translateX($right-margin)
</style>
