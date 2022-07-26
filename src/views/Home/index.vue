<template>
  <div class="home">
    <h2>首页--home</h2>
    {{ ggs() }}
    {{ aa() }}
    <div style="color: red">
      <h2>全局变量</h2>
      {{ globalProperties.$name }}
    </div>
    <button @click="isDirective = !isDirective">拖拽弹窗{{ isDirective }}</button>
    <DynamicCom />
    <ProvideOrInject />
    <BusCom />
    <MittCom />
    <TsxCom title="Home" @add="add" />
    <PropsCom />
    <DirectiveCom v-if="isDirective" v-model:isDirective="isDirective" />
  </div>
</template>

<script lang="ts" setup>
import { ComponentInternalInstance } from 'vue'
import DynamicCom from '@/components/DynamicCom/index.vue'
import BusCom from '@/components/Bus/index.vue'
import ProvideOrInject from '@/components/ProvideOrInject/index.vue'
import MittCom from '@/components/Mitt/index.vue'
import TsxCom from '@/components/TsxCom/index'
import PropsCom from '@/components/PropsCom/index.vue'
import DirectiveCom from '@/components/Directive/index.vue'

import { ggs } from '@/utils'
import { aa } from '@/utils/tool'

let isDirective = ref<boolean>(true)

// 获取全局属性
const {
  appContext: {
    config: { globalProperties }
  }
} = getCurrentInstance() as ComponentInternalInstance

const add = () => {
  console.log(11111)
}
</script>

<style lang="less" scoped>
.home {
  margin-top: 30px;
}
</style>
