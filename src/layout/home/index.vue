<template>
  <div>
    <app-nav :menu="menu" />
    <router-view />
  </div>
</template>

<script>
import { compact } from 'lodash'
import AppNav from '@/components/AppNav'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLogin']),
    menu() {
      return compact([
        { label: 'home', link: '/' },
        !this.isLogin && { label: 'login', link: '/login' },
        this.isLogin && { label: 'admin', link: '/admin' }
      ])
    }
  },
  components: {
    AppNav
  }
}
</script>
