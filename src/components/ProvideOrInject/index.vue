<template>
  <div style="margin-top: 30px">
    <h2>Provide / Inject (数据注入)</h2>
    <div>接收祖组件注入的数据：<br />{{ stateData.name }}{{ stateData.num }}</div>
    <button @click="edit">修改注入数据</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
const stateData = inject<{
  name: string
  num: number
}>('stateData', {
  name: '',
  num: 0
})
console.log(stateData)

const edit = (): void => {
  stateData.name = 'ProvideOrInject组件'
  stateData.num++
}
</script>

<style lang="less" scoped>
// @import url(xxx);
</style>
