<template>
  <div>BusOn--组件</div>
  {{ stata }}
</template>

<script setup lang="ts">
import { onBeforeUnmount, reactive } from 'vue'
import Bus from '@/utils/Bus'

type State = {
  data: string
  bool: boolean
}
let stata = reactive<State>({
  data: '',
  bool: false
})

Bus.on('tag', (data: string, bool: boolean) => {
  console.log(data, bool)
  stata.data = data
  stata.bool = bool
})
Bus.on('tag', (data: string, bool: boolean) => {
  console.log(data, bool)
  stata.data = data
  stata.bool = bool
})

Bus.on('tag2', (data: string, bool: boolean) => {
  console.log(data, bool)
  stata.data = data
  stata.bool = bool
})
onBeforeUnmount(() => {
  Bus.off('tag')
  Bus.off('tag2')
})
</script>

<style lang="less" scoped>
// @import url(xxx);
</style>
