<template>
  <div style="overflow-x: hidden">
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
    <slide-x-right-transition mode="out-in">
      <keep-alive>
        <slot />
      </keep-alive>
    </slide-x-right-transition>
  </div>
</template>

<script>
import { SlideXRightTransition } from 'vue2-transitions'

export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  components: {
    SlideXRightTransition
  }
}
</script>

<style lang="stylus" scoped>
.label
  text-transform capitalize
</style>
