<template>
  <el-container class="admin-container">
    <el-header class="header">
      <smart-logo :has-transition="asideTransition" :collapse="asideCollapse" />
      <aside-nav-menu-toggle v-model="asideCollapse" />
      <action-bar class="action-bar">
        <action-bar-item>
          <el-dropdown style="cursor: pointer" size="small">
            <span style="padding-left: 10px; padding-right: 10px">
              {{ $t('hello') }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>menu item</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </action-bar-item>
        <action-bar-item
          type="button"
          tooltip="tooltip"
          icon="el-icon-shopping-cart-full"
          >action</action-bar-item
        >
      </action-bar>
    </el-header>
    <el-container>
      <el-aside class="aside" width="auto">
        <aside-nav-menu
          :has-transition="asideTransition"
          :menu="menu"
          :collapse="asideCollapse"
        />
      </el-aside>
      <el-container>
        <el-header class="tabs-wrapper" height="auto" v-show="showTabs">
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
              <router-view :class="{ 'sharp-top': showTabs }" />
            </div>
          </transition>
        </el-main>
        <source-link />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { filter, uniqBy } from 'lodash'
import { layout } from './components/mixins'
import {
  asideCollapse,
  pageTabs,
  pageTransition,
  asideTransition,
  menu
} from '@/store/modules/admin/mixins'
import SourceLink from './components/SourceLink'

export default {
  mixins: [
    layout,
    asideCollapse,
    pageTabs,
    pageTransition,
    asideTransition,
    menu
  ],
  methods: {
    handleSwitchTabs({ index }) {
      this.$router.push(index)
    }
  },
  components: {
    SourceLink
  }
}
</script>

<style lang="stylus" scoped>
@import './style.styl'
</style>
