<template>
  <div>MittEmit--B1组件</div>
  <button @click="onMitt">触发mitt1</button>
  <button @click="onMitt2">触发mitt2</button>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const currentInstance = getCurrentInstance()
console.log(currentInstance)
const onMitt = (): void => {
  currentInstance?.proxy?.$Mitt.emit('on-click', '数据111')
}
const onMitt2 = (): void => {
  currentInstance?.proxy?.$Mitt.emit('on-tab', false)
}
</script>

<style lang="less" scoped>
// @import url(xxx);
</style>
