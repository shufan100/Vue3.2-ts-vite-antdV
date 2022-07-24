<template>
  <h1>to全家桶</h1>
  <button @click="change">按钮</button>
  {{ state }}
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, toRef } from 'vue'
type Props = {
  title?: string
  list: number[]
  flag: boolean
  tab: Function
}
withDefaults(defineProps<Props>(), {
  title: 'title',
  list: () => [1, 2, 4],
  flag: false,
  tab: () => {}
})

const obj = {
  foo: 1,
  bar: 1
}
const state = toRef(obj, 'bar')
// bar 转化为响应式对象
const change = () => {
  state.value++
  console.log(obj, state)
}
onBeforeMount(() => {
  console.log(1111111)
})
defineExpose
</script>
