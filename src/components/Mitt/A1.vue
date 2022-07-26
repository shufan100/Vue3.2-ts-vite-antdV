<template>
  <div>MittOn--A1组件</div>
  {{ stata }}
</template>

<script setup lang="ts">
import { getCurrentInstance, onBeforeUnmount, ref } from 'vue'
const currentInstance = getCurrentInstance()

let stata = ref<any>('初始值--')

// 接收所有事件 （*事件靠后）
// currentInstance?.proxy?.$Mitt.on('*', (type: string, data: any): void => {
//   console.log(type, data)
// })

currentInstance?.proxy?.$Mitt.on('on-click', (data: any) => {
  console.log(data)
  stata.value = data
})
currentInstance?.proxy?.$Mitt.on('on-tab', (data: any) => {
  console.log(data)
  stata.value = data
})

onBeforeUnmount(() => {
  currentInstance?.proxy?.$Mitt.off('on-click') //清除对应事件
  currentInstance?.proxy?.$Mitt.all.clear() //清除所有事件
})
</script>

<style lang="less" scoped>
// @import url(xxx);
</style>
