<template>
  <div class="Content">
    <h2>layout--Content</h2>
    <div>
      路由：
      <button @click="goRouter('/home')">首页</button>
      <button @click="$router.push('/about')">作者</button>
    </div>
    <div>祖组件注入数据： {{ state.name }}--{{ state.num }}</div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const goRouter = (name: string): void => {
  router.push(name);
};

type State = {
  name: string;
  num: number;
};
const state = reactive<State>({
  name: 'Content组件',
  num: 100
});
provide('stateData', state);
</script>

<style lang="less" scoped>
// @import "xxx";
// @import url(xxx);
</style>
