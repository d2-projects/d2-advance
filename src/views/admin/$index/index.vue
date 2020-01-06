<template>
  <el-container class="admin-container">
    <el-header class="header">
      <smart-logo :collapse="isCollapse" />
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
            v-model="tabOpened"
            :options="tabOptions"
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
import { isCollapse, tabsData } from '@/store/modules/admin/mixins'
import { layout } from './components/mixins'
import menu from './menu'

export default {
  mixins: [layout, isCollapse, tabsData],
  data() {
    return {
      menu,
      hasTabs: true,
      pageTransition: 'fade-transverse' // '[name]' | ''
    }
  },
  methods: {
    handleSwitchTabs({ index }) {
      this.$router.push(index)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style.styl'
</style>
