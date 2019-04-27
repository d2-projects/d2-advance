<template>
  <el-container class="full-container">
    <el-aside width="auto">
      <el-menu
        default-active="1"
        :collapse="useCollapse && isCollapse"
        class="el-menu-vertical-demo"
      >
        <el-menu-item
          v-if="useCollapse"
          @click="isCollapse = !isCollapse"
          style="text-align: center"
        >
          <transition>
            <i v-bind:key="arrow" :class="'el-icon-arrow-' + arrow"></i>
          </transition>
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-odometer"></i>
          <span slot="title">Dashboard</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="56px" class="header">
        <div class="full">
          <span>Header</span>
        </div>
        <div>
          <el-popover placement="bottom-end" width="100" trigger="click">
            <div style="text-align: center;">
              <p>Exit from current user?</p>
              <el-button type="primary" size="mini" @click="handleLogout"
                >Yes</el-button
              >
            </div>
            <el-button slot="reference" type="text" icon="el-icon-switch-button"
              >EXIT</el-button
            >
          </el-popover>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { mapActions } from 'vuex'

const useCollapse = true
const defaultOpenCollapse = false

export default {
  data() {
    return {
      useCollapse,
      isCollapse: defaultOpenCollapse
    }
  },
  methods: {
    ...mapActions(['logout']),
    async handleLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  },
  computed: {
    arrow() {
      return this.isCollapse ? 'right' : 'left'
    }
  }
}
</script>

<style lang="stylus" scoped>
.full-container
  height 100vh
.el-menu-vertical-demo
  height 100vh

.header
.footer
  display flex
  flex-direction row
  justify-content flex-start
  align-items center
  .full
    flex 1

.el-menu-vertical-demo:not(.el-menu--collapse)
  width 200px
  min-height 400px
</style>
