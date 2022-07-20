<template>
  <div class="home">首页内容</div>
  <Demo />
  {{ ggs() }}
  <!-- <Demo1 /> -->
  <!-- <Demo1 /> -->
</template>

<script lang="ts" setup>
import Demo from '@/components/demo.vue'
// d:/my-project/Vue3/Vue3.2-ts-vite-antdv/src/components/demo.vue
// d:/my-project/Vue3/Vue3.2-ts-vite-antdv/src/components/demo.vue
// import global from '#/global.d.ts'

// import Demo1 from '@/components/demo.vue'
// console.log('/@/')
import { ggs } from '@/utils/index.ts'
</script>

<style lang="less" scoped>
// @import "xxx";
// @import url(xxx);
</style>
