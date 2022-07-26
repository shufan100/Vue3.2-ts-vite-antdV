<template>
  <div class="home">
    <h2>首页--home</h2>
    {{ ggs() }}
    {{ aa() }}
    <div style="color: red">
      <h2>全局变量</h2>
      {{ globalProperties.$name }}
    </div>
    <DynamicCom />
    <ProvideOrInject />
    <BusCom />
    <MittCom />
    <TsxCom title="Home" @add="add" />
    <PropsCom />
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

import { ggs } from '@/utils'
import { aa } from '@/utils/tool'

let flag = ref<boolean>(false)
let list = reactive<(string | number)[]>([1, '2', 'sdsd'])

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
