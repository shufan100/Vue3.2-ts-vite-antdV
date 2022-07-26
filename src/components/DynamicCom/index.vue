<template>
  <div style="margin-top: 30px">
    <h2>动态组件</h2>
    <button v-for="item in data" @click="current.comName = item.comName">{{ item.name }}</button>
    <component :is="current.comName"></component>
  </div>
</template>

<script setup lang="ts">
import { reactive, markRaw } from 'vue'

import A from './A.vue'
import B from './B.vue'

type Tab = {
  name: string
  comName: any
}
type Com = Pick<Tab, 'comName'> //从Tba类型中摘取出属性

const data = reactive<Tab[]>([
  {
    name: 'A组件',
    comName: markRaw(A) //组件属性太多，不进行proxy代理
  },
  {
    name: 'B组件',
    comName: markRaw(B)
  }
])
const current = reactive<Com>({
  comName: data[0].comName
})
</script>

<style lang="less" scoped>
// @import url(xxx);
</style>
