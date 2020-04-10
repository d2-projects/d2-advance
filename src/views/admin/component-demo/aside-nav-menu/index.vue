<template>
  <page-container type="ghost">
    <el-radio-group slot="header" v-model="isCollapse" size="mini">
      <el-radio-button :label="false">{{ $t('Open') }}</el-radio-button>
      <el-radio-button :label="true">{{ $t('Close') }}</el-radio-button>
    </el-radio-group>
    <el-container class="demo-container">
      <el-header
        ><p>
          <b>{{ $t('Real Menu') }}</b>
        </p></el-header
      >
      <el-container>
        <el-aside class="aside" width="auto">
          <aside-nav-menu :menu="menu" :collapse="isCollapse" />
        </el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>

    <el-container class="demo-container">
      <el-header
        ><p>
          <b>{{ $t('Custom Menu') }}</b>
        </p></el-header
      >
      <el-container>
        <el-aside class="aside" width="auto">
          <aside-nav-menu :menu="customMenu" :collapse="isCollapse" />
        </el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
  </page-container>
</template>

<script>
import { menu } from '@/store/modules/admin/mixins'

import customMenu from './menu'

export default {
  inject: ['@adminContainer', '@adminInternal'],
  mixins: [menu],
  data() {
    return {
      customMenu,
      isCollapse: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/style/variable.styl'

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
