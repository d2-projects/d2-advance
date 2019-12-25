<template>
  <el-container class="admin-container">
    <el-header class="header">
      <el-radio-group v-model="isCollapse" size="mini">
        <el-radio-button :label="false">Open</el-radio-button>
        <el-radio-button :label="true">Close</el-radio-button>
      </el-radio-group>
    </el-header>
    <el-container>
      <el-aside class="aside" width="auto">
        <nav-menu :menu="menu" :collapse="isCollapse" />
      </el-aside>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from './components/NavMenu'
import menu from './menu'

export default {
  data() {
    return {
      isCollapse: false,
      menu
    }
  },
  components: {
    NavMenu
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../style/variable.styl'

$aside-width = 200px
$header-height = 60px

.admin-container
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  .header
    height $header-height
    line-height @height
  .aside
    >>> .el-menu-vertical:not(.el-menu--collapse)
      width $aside-width
  .main
    padding 0
</style>
