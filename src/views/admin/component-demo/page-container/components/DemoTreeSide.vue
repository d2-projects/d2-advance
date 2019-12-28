<template>
  <el-tree :data="data" />
</template>

<script>
import { map, range } from 'lodash'

const treeData = [
  {
    label: 'Side menu'
  },
  ...map(range(1, 10), index1 => ({
    label: 'Menu item ' + index1,
    children: map(range(1, 20), index2 => ({
      label: 'Menu item ' + index1 + '-' + index2,
      children: map(range(1, 5), index3 => ({
        label: 'Menu item ' + index1 + '-' + index2 + '-' + index3
      }))
    }))
  }))
]

export default {
  name: 'DemoTreeSide',
  data() {
    return {
      data: treeData
    }
  }
}
</script>
