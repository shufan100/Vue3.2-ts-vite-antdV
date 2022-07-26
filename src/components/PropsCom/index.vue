<template>
  <div style="margin-top: 20px">
    <h2>props / refs</h2>
    <button @click="getChild">调用子组件内部的方法</button>
    <PropsChildVue ref="propsChild" title="传入的title" @add="add" />
  </div>
</template>

<script setup lang="ts">
import PropsChildVue from './PropsChild.vue'

let propsChild = ref()
const add = (data: any): void => {
  console.log('子组件调用父组件方法：', data)
}
// 调用子组件的方法
const getChild = (): void => {
  propsChild.value.getProps()
  console.log(propsChild.value.state)
}
</script>

<style lang="less" scoped>
// @import url(xxx);
</style>
