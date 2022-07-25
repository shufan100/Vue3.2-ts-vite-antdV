<template>
  <div class="home">首页内容</div>
  <Demo />
  {{ ggs() }}
  {{ aa() }}
  <DynamicCom />
  {{ stateData.name }}{{ stateData.num }}
  <button @click="stateData.num++">333</button>
</template>

<script lang="ts" setup>
import { inject, Ref, reactive } from 'vue'
import Demo from '@/components/demo.vue'
import DynamicCom from '@/views/DynamicCom/index.vue'
import { ggs } from '@/utils'
import { aa } from '@/utils/tool'

const stateData = inject<{
  name: string
  num: number
}>('stateData', {
  name: '',
  num: 0
})
console.log(stateData)
</script>

<style lang="less" scoped>
// @import "xxx";
// @import url(xxx);
</style>
