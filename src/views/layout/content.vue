<template>
  <div class="Content">
    Content组件
    <button @click="goRouter('/home')">首页</button>
    <button @click="goRouter('/about')">作者</button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goRouter = (name: string): void => {
  router.push(name)
}
</script>

<style lang="less" scoped>
// @import "xxx";
// @import url(xxx);
</style>
