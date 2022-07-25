<template>
  {{ state.name }}{{ state.num }}
  <router-view />
</template>
<script setup lang="ts">
import { provide, reactive } from 'vue'
type State = {
  name: string
  num: number
}
const state = reactive<State>({
  name: 'App组件',
  num: 100
})
console.log(state)

provide('stateData', state)
</script>
