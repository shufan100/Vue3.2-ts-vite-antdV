<template>
  <h1>to全家桶</h1>
  <button @click="change">按钮</button>
  {{ state }}
</template>

<script setup lang="ts">
import { reactive, toRef } from 'vue'

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
</script>
