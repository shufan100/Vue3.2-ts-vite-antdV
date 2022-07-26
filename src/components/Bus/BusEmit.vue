<template>
  <div>BusEmit--组件</div>
  <button @click="tagbus">触发bus</button>
  <button @click="tagbus2">触发bus2</button>
</template>

<script setup lang="ts">
import Bus from '@/utils/Bus'
// eventBus 模仿react的消息订阅
const tagbus = () => {
  Bus.emit('tag', '参数', true)
}
const tagbus2 = () => {
  Bus.emit('tag2', '参数111', false)
}
</script>

<style lang="less" scoped>
// @import url(xxx);
</style>
