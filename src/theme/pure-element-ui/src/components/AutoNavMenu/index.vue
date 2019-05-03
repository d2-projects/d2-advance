<template>
  <el-menu
    router
    :default-active="$route.path"
    :collapse="useCollapse && computedIsCollapse"
    :mode="mode"
  >
    <el-menu-item
      v-if="mode === 'vertical' && useCollapse"
      @click="switchCollapse"
      style="text-align: center"
    >
      <transition>
        <i v-bind:key="arrow" :class="'el-icon-arrow-' + arrow"></i>
      </transition>
    </el-menu-item>
    <template v-for="(item, index) in menu">
      <auto-item :meta="item" :key="index" />
    </template>
  </el-menu>
</template>

<script>
import AutoItem from './components/AutoItem'

export default {
  model: {
    prop: 'isCollapse',
    event: 'changeCollapse'
  },
  props: {
    useCollapse: {
      type: Boolean,
      required: false,
      default: () => true
    },
    defaultCollapse: {
      type: Boolean,
      required: false,
      default: () => false
    },
    isCollapse: {
      type: Boolean,
      required: false,
      default: () => undefined
    },
    menu: {
      type: Array,
      required: false,
      default: () => []
    },
    mode: {
      type: String,
      required: false,
      default: () => 'vertical'
    }
  },
  data() {
    return {
      innerIsCollapse: this.defaultCollapse
    }
  },
  computed: {
    arrow() {
      return this.computedIsCollapse ? 'right' : 'left'
    },
    computedIsCollapse() {
      return this.isCollapse === undefined
        ? this.innerIsCollapse
        : this.isCollapse
    }
  },
  methods: {
    switchCollapse() {
      if (this.isCollapse === undefined) {
        this.innerIsCollapse = !this.innerIsCollapse
      } else {
        this.$emit('changeCollapse', !this.isCollapse)
      }
    }
  },
  components: {
    AutoItem
  }
}
</script>
