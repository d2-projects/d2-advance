<template>
  <div :class="'skin--' + skin">
    <el-container class="container full-container">
      <el-aside width="auto" class="aside">
        <auto-nav-menu :menu="menu" class="el-menu-vertical" />
      </el-aside>
      <el-container class="section">
        <el-header height="56px" class="header">
          <div class="full"></div>
          <div class="btns">
            <el-tooltip
              content="Search navigation"
              placement="bottom-end"
              :open-delay="500"
            >
              <el-button
                type="text"
                icon="el-icon-search"
                @click="showSearchNavigation = !showSearchNavigation"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              content="Go home"
              placement="bottom-end"
              :open-delay="500"
            >
              <el-button
                type="text"
                icon="el-icon-house"
                @click="$router.push('/')"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              content="Switch fullscreen"
              placement="bottom-end"
              :open-delay="500"
            >
              <el-button
                type="text"
                icon="el-icon-full-screen"
                @click="handleFullscreen"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              content="Choice skin"
              placement="bottom-end"
              :open-delay="500"
            >
              <el-button
                type="text"
                icon="el-icon-umbrella"
                @click="skinDialog = true"
              ></el-button>
            </el-tooltip>
            <el-dialog title="Skin" :visible.sync="skinDialog" width="500px">
              <el-table :data="skins" :show-header="false">
                <el-table-column>
                  <template slot-scope="scope">
                    <color-dots :colors="scope.row.colors" />
                    <span>{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column width="200px" align="center">
                  <template slot-scope="scope">
                    <el-button
                      v-if="scope.row.key !== skin"
                      @click="skin = scope.row.key"
                      >Use</el-button
                    >
                    <el-button v-else type="primary">In use</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-dialog>
            <el-popover placement="bottom-end" width="100" trigger="click">
              <div style="text-align: center;">
                <p>Exit from current user?</p>
                <el-button type="primary" size="mini" @click="handleLogout"
                  >Yes</el-button
                >
              </div>
              <el-button
                slot="reference"
                type="text"
                icon="el-icon-switch-button"
              ></el-button>
            </el-popover>
          </div>
        </el-header>
        <el-container class="body" :class="{ slid: showSearchNavigation }">
          <el-main class="main">
            <slide-x-right-transition mode="out-in" :duration="280">
              <div v-if="showSearchNavigation" class="slider-outer">
                <div class="slider">
                  <el-input
                    clearable
                    placeholder="search"
                    suffix-icon="el-icon-search"
                    v-model="searchNavigationContent"
                    autofocus
                    @keyup.esc.native="showSearchNavigation = false"
                    style="max-width: 512px"
                  >
                  </el-input>
                </div>
                <div class="search-navigation-list">
                  <template v-for="(item, index) in searchNavigationList">
                    <div
                      :key="index"
                      class="item"
                      @click="handleClickNavigation(item)"
                    >
                      <div class="item-wrapper">
                        <div class="item-icon">
                          <i :class="'el-icon-' + item.icon" />
                        </div>
                        <div class="item-content">
                          <div class="label">{{ item.label }}</div>
                          <div class="tags">
                            <span
                              v-for="(children, index) in item.children"
                              :key="index"
                              >{{ children.label }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <keep-alive v-else>
                <slot />
              </keep-alive>
            </slide-x-right-transition>
          </el-main>
          <el-footer class="footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
import { SlideXRightTransition } from 'vue2-transitions'
import AutoNavMenu from '../../components/AutoNavMenu'
import ColorDots from '../../components/ColorDots'

import screenfull from 'screenfull'

const flat = (arr, level = 0) =>
  arr
    ? arr.reduce((x, i) => {
        const { children, group, ...rest } = i
        const { label, link } = rest
        if (label && link) x.push({ ...rest, level })
        return [...x, ...flat(children, level + 1), ...flat(group, level)]
      }, [])
    : []

export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showSearchNavigation: false,
      searchNavigationContent: '',
      skin: 'd2-classics',
      skins: [
        {
          name: 'D2 Classics',
          key: 'd2-classics',
          colors: ['#2f74ff', '#ebf1f6']
        },
        {
          name: 'Native',
          key: 'native',
          colors: ['#409EFF', '#ffffff']
        },
        {
          name: 'Thanos',
          key: 'thanos',
          colors: ['#5b65d6', '#373c43']
        },
        {
          name: 'Violet',
          key: 'violet',
          colors: ['#573493', '#f9f9f9']
        },
        {
          name: 'Monroe',
          key: 'monroe',
          colors: ['#5e6675', '#ff6600']
        },
        {
          name: 'Deep Sea',
          key: 'deep-sea',
          colors: ['#364073', '#1d224d']
        }
      ],
      skinDialog: false
    }
  },
  watch: {
    '$route'() {
      this.showSearchNavigation = false
    }
  },
  computed: {
    flatMenu() {
      return flat(this.menu)
    },
    searchNavigationList() {
      return this.searchNavigationContent
        ? new Fuse(this.flatMenu, {
            tokenize: true,
            threshold: 0.6,
            sort: false,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ['label']
          }).search(this.searchNavigationContent)
        : this.flatMenu
    }
  },
  methods: {
    handleLogout() {
      this.$emit('logout')
    },
    handleFullscreen() {
      if (screenfull.isFullscreen) {
        screenfull.exit()
      } else {
        screenfull.request()
      }
    },
    handleClickNavigation(item) {
      this.$router.push(item.link)
    }
  },
  components: {
    SlideXRightTransition,
    AutoNavMenu,
    ColorDots
  }
}
</script>

<style lang="stylus" scoped>
.full-container
  height 100vh
.el-menu-vertical
  height 100vh
  &:not(.el-menu--collapse)
    width 200px

.header
  display flex
  flex-direction row
  justify-content flex-start
  align-items center
  .full
    flex 1
  .btns > *
    margin-right 20px
    margin-left 0
    &:last-child
      margin-right 0

.main
  overflow-x hidden

.footer
  display flex
  flex-direction row
  justify-content flex-start
  align-items center
  height 70px

.body
.main
  padding 0
  transition margin .28s

.body.slid
  margin-top 110px
  .main
    margin-top -110px
.slider-outer
  display flex
  flex-direction column
.slider
  text-align center
  height 110px
  line-height @height
.search-navigation-list
  .item
    padding 5px 0
    height 50px
    line-height @height
    cursor pointer
    color #606266
    transition all .28s
    &:hover
      color #000
      background #f5f7fa
      .item-wrapper
        .item-icon
          color #2f74ff
    .item-wrapper
      display flex
      .item-icon
        font-size 18px
        padding 0 20px
      .item-content
        .label
          font-size 16px
        .tags
          font-size 14px
</style>

<style lang="stylus">
/* SKIN */

// default .skin--native
@import './skin/d2-classics';
@import './skin/thanos';
@import './skin/violet';
@import './skin/monroe';
@import './skin/deep-sea';
</style>
