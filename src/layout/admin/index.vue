<template>
  <div
    class="layout-wrapper"
    :class="{
      collapse: asideCollapse,
      tabs: showTabs,
      flat,
      ['admin-theme--' + theme]: true
    }"
  >
    <aside class="layout-aside">
      <header class="layout-header">
        <smart-logo
          v-if="!flat"
          :has-transition="asideTransition"
          :collapse="asideCollapse"
        />
      </header>
      <nav class="layout-nav">
        <div>
          <aside-nav-menu
            :has-transition="asideTransition"
            :menu="menu"
            :collapse="asideCollapse"
            @select="handleAsideMenuItemSelected"
          />
        </div>
      </nav>
    </aside>
    <section class="layout-main">
      <header class="layout-header">
        <aside-nav-menu-toggle v-model="asideCollapse" />
        <el-button type="text" @click="handleSwitchTheme">
          <i v-if="theme === 'dark'" class="el-icon-sunny" />
          <i v-if="theme === 'd2-classic'" class="el-icon-moon" />
        </el-button>
        <action-bar class="action-bar">
          <action-bar-item>
            <el-dropdown
              style="cursor: pointer;"
              size="small"
              @command="handleCommand"
            >
              <span style="padding-left: 10px; padding-right: 10px;">
                {{ $t('hello') }}
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">{{
                  $t('admin.logout')
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </action-bar-item>
        </action-bar>
      </header>
      <el-header v-show="showTabs" class="tabs-wrapper" height="auto">
        <page-tabs
          v-model="tabOpened"
          :current="$route.path"
          :options="tabOptions"
          @switch="handleSwitchTabs"
        />
      </el-header>
      <section class="layout-content">
        <transition :name="pageTransition ? routerViewTransition : null">
          <router-view :class="{ 'sharp-top': showTabs, flat }" />
        </transition>
        <source-link v-if="showSourceLink" />
      </section>
    </section>
  </div>
</template>

<script>
import { assign } from 'lodash'
import internalComponents from './components/internal-components'
import containerComponents from './components/container-components'
// import asideBscroll from './mixins/aside-bscroll'
import {
  theme,
  asideCollapse,
  pageTabs,
  pageTransition,
  asideTransition,
  menu,
  sourceLink,
  token,
  flat
} from '@/store/modules/admin/mixins'
import { loginPath } from '@/routes/admin'
import screenSizeMixin from '@/utils/screen-size-mixin'
import { isUndefined } from 'lodash'

export default {
  components: internalComponents,
  mixins: [
    theme,
    asideCollapse,
    pageTabs,
    pageTransition,
    asideTransition,
    menu,
    sourceLink,
    // asideBscroll,
    token,
    flat,
    screenSizeMixin
  ],
  provide: {
    '@adminContainer'(v) {
      assign(v.$options.components, containerComponents)
    },
    '@adminInternal'(v) {
      assign(v.$options.components, internalComponents)
    }
  },
  data() {
    return {
      routerViewTransition: 'fade-transverse'
    }
  },
  watch: {
    theme: {
      handler(val) {
        document.body.setAttribute('data-admin-theme', val)
      }
    },
    $vssWidth: {
      immediate: true,
      handler(size, oldSize) {
        if (!isUndefined(oldSize)) {
          this.asideCollapse = size < 1024
        }
        this.flat = size < 768
        if (size < 768) {
          this.asideCollapse = true
        }
      }
    }
  },
  methods: {
    handleSwitchTabs({ index }) {
      this.$router.push(index)
    },
    handleCommand(command) {
      if (command === 'logout') {
        this.token = null
        this.$router.push(loginPath)
      }
    },
    handleAsideMenuItemSelected(/* selectedTarget */) {
      if (this.flat) {
        this.asideCollapse = true
      }
    },
    handleSwitchTheme() {
      if (this.theme === 'dark') {
        this.theme = 'd2-classic'
        return
      }
      if (this.theme === 'd2-classic') {
        this.theme = 'dark'
        return
      }
    }
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>
<style lang="stylus" src="./themes.styl"></style>
