<template>
  <div :class="'skin--' + skin">
    <el-container class="container full-container">
      <el-aside width="auto" class="aside">
        <auto-nav-menu :menu="menu" class="el-menu-vertical" />
      </el-aside>
      <el-container>
        <el-header height="56px" class="header">
          <div class="full"></div>
          <div class="btns">
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
              <el-table :data="skins">
                <el-table-column
                  property="name"
                  align="center"
                ></el-table-column>
                <el-table-column property="address"></el-table-column>
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
        <el-main class="main">
          <slide-x-right-transition mode="out-in">
            <keep-alive>
              <slot />
            </keep-alive>
          </slide-x-right-transition>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { SlideXRightTransition } from 'vue2-transitions'
import AutoNavMenu from '../../components/AutoNavMenu'
import screenfull from 'screenfull'

export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      skin: 'native',
      skins: [
        {
          name: 'Nitive',
          key: 'native'
        },
        {
          name: 'Violet',
          key: 'violet'
        }
      ],
      skinDialog: false
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
    }
  },
  components: {
    SlideXRightTransition,
    AutoNavMenu
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
</style>

<style lang="stylus">
/* SKIN */

// default .skin--native
@import './skin/violet';
</style>
