<template>
  <el-container class="admin-container">
    <el-header class="header">
      <smart-logo :has-transition="asideTransition" :collapse="asideCollapse" />
      <aside-nav-menu-toggle v-model="asideCollapse" />
      <action-bar class="action-bar">
        <!-- <action-bar-item
          type="button"
          tooltip="tooltip"
          icon="el-icon-shopping-cart-full"
          >action</action-bar-item
        > -->
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
      </action-bar>
    </el-header>
    <el-container class="body">
      <el-aside class="aside" ref="aside" width="auto">
        <div>
          <aside-nav-menu
            :has-transition="asideTransition"
            :menu="menu"
            :collapse="asideCollapse"
          />
        </div>
      </el-aside>
      <el-container class="center-wrapper">
        <el-header class="tabs-wrapper" height="auto" v-show="showTabs">
          <page-tabs
            :current="$route.path"
            v-model="tabOpened"
            :options="tabOptions"
            @switch="handleSwitchTabs"
          />
        </el-header>
        <el-main class="main">
          <transition :name="pageTransition ? 'fade-transverse' : null">
            <keep-alive>
              <router-view
                class="page-wrapper"
                :class="{ 'sharp-top': showTabs }"
              />
            </keep-alive>
          </transition>
        </el-main>
        <source-link v-if="showSourceLink" />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { filter, uniqBy, assign } from 'lodash'
import internalComponents from './components/internal-components'
import containerComponents from './components/container-components'
import asideBscroll from './mixins/aside-bscroll'
import {
  asideCollapse,
  pageTabs,
  pageTransition,
  asideTransition,
  menu,
  sourceLink
} from '@/store/modules/admin/mixins'

export default {
  mixins: [
    asideCollapse,
    pageTabs,
    pageTransition,
    asideTransition,
    menu,
    sourceLink,
    asideBscroll
  ],
  provide: {
    '@adminContainer'(v) {
      assign(v.$options.components, containerComponents)
    },
    '@adminInternal'(v) {
      assign(v.$options.components, internalComponents)
    }
  },
  methods: {
    handleSwitchTabs({ index }) {
      this.$router.push(index)
    }
  },
  components: internalComponents
}
</script>

<style lang="stylus" scoped src="./style.styl" />
