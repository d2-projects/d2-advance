<template>
  <pure-element-ui-home-layout :menu="menu">
    <router-view></router-view>
  </pure-element-ui-home-layout>
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
