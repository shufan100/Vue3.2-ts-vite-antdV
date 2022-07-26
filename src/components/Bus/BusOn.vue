<template>
  <div>BusOn--组件</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import Bus from '@/utils/Bus'
Bus.on('tag', (data: string, bool: boolean) => {
  console.log(data, bool)
})
Bus.on('tag', (data: string, bool: boolean) => {
  console.log(data, bool)
})

Bus.on('tag2', (data: string, bool: boolean) => {
  console.log(data, bool)
})
onBeforeUnmount(() => {
  Bus.off('tag')
  Bus.off('tag2')
})
</script>

<style lang="less" scoped>
// @import url(xxx);
</style>
