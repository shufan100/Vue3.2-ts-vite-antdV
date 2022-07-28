<template>
  <div style="margin-top: 30px">
    <h2>NextTick</h2>
    <div ref="divRef">{{ msg }}</div>
    <input type="text" v-model="msg" />
    <button @click="tab">edit</button>
  </div>
</template>

<script setup lang="ts">
let divRef = ref<HTMLElement>()
let msg = ref<string>('shufan')

const tab = () => {
  msg.value = '舒梵' //数据发生改变，马上操作dom，拿到的还是上一次的值
  // dom更新完再操作dom获取值
  nextTick(() => {
    let val = divRef.value?.innerText
    console.log(val)
  })
}
</script>

<style lang="less" scoped>
// @import url(xxx);
</style>
