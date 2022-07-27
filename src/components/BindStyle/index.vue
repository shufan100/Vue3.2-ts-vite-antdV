<template>
  <div style="margin-top: 30px">
    <h2 class="h2">动态样式{{ val }}</h2>
    <input type="text" v-model="val" />
    <h3 class="h3">标题33333{{ state.val }}</h3>
    <input type="text" v-model="state.val" />
    <h3 :class="[$style.h33, $style.h331]">标题4444</h3>
    <h3 :class="[zs.h44, zs.h441]">标题555</h3>
  </div>
</template>
<script setup lang="ts">
type State = {
  val: string
  val2: string
}
let val = ref<string>('#099')
const state = reactive<State>({
  val: '#f88',
  val2: '#000'
})
</script>

<style scoped lang="less">
//@import url('xxx');
.h2 {
  color: v-bind(val);
}
.h3 {
  color: v-bind('state.val');
}
</style>
<style module>
.h33 {
  color: aquamarine;
}
.h331 {
  font-size: 16px;
}
</style>
<style module="zs">
.h44 {
  color: blue;
}
.h441 {
  font-size: 20px;
}
</style>
