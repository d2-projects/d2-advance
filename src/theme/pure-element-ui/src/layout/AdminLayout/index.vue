<template>
  <el-container class="full-container">
    <el-aside width="auto">
      <auto-nav-menu :menu="menu" />
    </el-aside>
    <el-container>
      <el-header height="56px" class="header">
        <div class="full"></div>
        <div class="btns">
          <el-button type="text" icon="el-icon-house" @click="$router.push('/')"
            >Home</el-button
          >
          <el-popover placement="bottom-end" width="100" trigger="click">
            <div style="text-align: center;">
              <p>Exit from current user?</p>
              <el-button type="primary" size="mini" @click="handleLogout"
                >Yes</el-button
              >
            </div>
            <el-button slot="reference" type="text" icon="el-icon-switch-button"
              >Exit</el-button
            >
          </el-popover>
        </div>
      </el-header>
      <el-main style="overflow-x: hidden">
        <slide-x-right-transition mode="out-in">
          <keep-alive>
            <slot />
          </keep-alive>
        </slide-x-right-transition>
      </el-main>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { SlideXRightTransition } from 'vue2-transitions'
import AutoNavMenu from '../../components/AutoNavMenu'

export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleLogout() {
      this.$emit('logout')
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
.el-menu-vertical-demo
  height 100vh

.header
  display flex
  flex-direction row
  justify-content flex-start
  align-items center
  .full
    flex 1
  .btns > *
    margin-right 20px
    &:last-child
      margin-right 0

.footer
  display flex
  flex-direction row
  justify-content flex-start
  align-items center

.el-menu-vertical-demo:not(.el-menu--collapse)
  width 200px
  min-height 400px
</style>
