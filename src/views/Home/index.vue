<template>
  <div class="home">首页内容</div>
  <Demo />
  {{ ggs() }}
  {{ aa() }}
</template>

<script lang="ts" setup>
import Demo from '@/components/demo.vue'
import { ggs } from '@/utils'
import { aa } from '@/utils/tool'
</script>

<style lang="less" scoped>
// @import "xxx";
// @import url(xxx);
</style>
