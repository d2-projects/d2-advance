<template>
  <component :is="layoutComponent" :menu="menu">
    <router-view />
  </component>
</template>

<script>
import { compact } from 'lodash'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLogin', 'mainTheme']),
    layoutComponent() {
      return this.mainTheme.name + '-home-layout'
    },
    menu() {
      return compact([
        { label: 'Home', link: '/welcome', icon: 'house' },
        !this.isLogin && { label: 'Login', link: '/login', icon: 'user' },
        this.isLogin && { label: 'Dashboard', link: '/admin', icon: 'odometer' }
      ])
    }
  }
}
</script>
