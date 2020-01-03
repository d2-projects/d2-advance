<template>
  <page-container type="ghost">
    <el-radio-group slot="header" v-model="isCollapse" size="mini">
      <el-radio-button :label="false">Open</el-radio-button>
      <el-radio-button :label="true">Close</el-radio-button>
    </el-radio-group>
    <el-container class="demo-container">
      <el-header
        ><p><b>Real Menu</b></p></el-header
      >
      <el-container>
        <el-aside class="aside" width="auto">
          <aside-nav-menu :menu="realMenu" :collapse="isCollapse" />
        </el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>

    <el-container class="demo-container">
      <el-header
        ><p><b>Custom Menu</b></p></el-header
      >
      <el-container>
        <el-aside class="aside" width="auto">
          <aside-nav-menu :menu="menu" :collapse="isCollapse" />
        </el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
  </page-container>
</template>

<script>
import { layout, container } from '@/views/admin/$index/components/mixins'
import menu from './menu'
import realMenu from '../../$index/menu'

export default {
  mixins: [layout, container],
  data() {
    return {
      menu,
      realMenu,
      isCollapse: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../style/variable.styl'

$aside-width = 200px

.demo-container
  min-width 260px
  float left

.aside
  border-radius $base-radius
  border $solid-border
  background $background-white-color
  >>> .el-menu-vertical:not(.el-menu--collapse)
    width $aside-width
</style>
