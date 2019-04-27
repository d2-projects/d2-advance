<template>
  <div>
    <el-menu router :default-active="$route.path" mode="horizontal">
      <template v-for="(item, index) in menu">
        <el-menu-item :index="item.link" :key="index">
          <template slot="title">
            <i v-if="item.icon" :class="'el-icon-' + item.icon"></i>
            <span class="label" v-if="item.label">{{ item.label }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
import { compact } from 'lodash'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLogin']),
    menu() {
      return compact([
        { label: 'home', link: '/welcome', icon: 'house' },
        !this.isLogin && { label: 'login', link: '/login', icon: 'user' },
        this.isLogin && { label: 'dashboard', link: '/admin', icon: 'odometer' }
      ])
    }
  }
}
</script>

<style lang="stylus" scoped>
.label
  text-transform capitalize
</style>
