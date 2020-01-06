<template>
  <el-container class="admin-container">
    <el-header class="header">
      <smart-logo :has-transition="asideTransition" :collapse="isCollapse" />
      <aside-nav-menu-toggle v-model="isCollapse" />
    </el-header>
    <el-container>
      <el-aside class="aside" width="auto">
        <aside-nav-menu
          :has-transition="asideTransition"
          :menu="menu"
          :collapse="isCollapse"
        />
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
import { layout } from './components/mixins'
import menu from './menu'
import {
  isCollapse,
  tabsData,
  pageTransition,
  asideTransition
} from '@/store/modules/admin/mixins'

export default {
  mixins: [layout, isCollapse, tabsData, pageTransition, asideTransition],
  data() {
    return {
      menu,
      hasTabs: true
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
