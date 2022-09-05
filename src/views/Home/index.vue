<template>
  <div class="home">
    <h2>首页--home</h2>
    <a-button type="primary">1111</a-button>
    <a-button color="warning">32</a-button>
    <div>
      <h3 style="color: brown">1、读取ts文件</h3>
      &nbsp;&nbsp;&nbsp;&nbsp;1、 {{ ggs() }}
    </div>
    <div>
      <h3 style="color: red">2、*全局变量</h3>
      &nbsp;&nbsp;&nbsp;&nbsp;1、全局变量1： {{ $name }}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;2、全局变量2： {{ $bool }}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;3、全局自定义过滤器1： {{ $filters.getStatus(1) }}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;4、全局自定义过滤器2： {{ $filters.getStatus2(1) }}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;5、全局路由属性(route)： {{ $route.fullPath }}等等<br />
      &nbsp;&nbsp;&nbsp;&nbsp;6、全局路由(router)： <button @click="$router.push('/about')">跳转</button><br />
      &nbsp;&nbsp;&nbsp;&nbsp;7、全局自定义指令： <button @click="isDirective = !isDirective">拖拽弹窗{{ isDirective }}</button><br />
    </div>
    <DynamicCom />
    <ProvideOrInject />
    <BusCom />
    <MittCom />
    <TsxCom title="Home" @add="add" />
    <PropsCom />
    <DirectiveCom v-if="isDirective" v-model:isDirective="isDirective" />
    <BindStyle />
    <NextTickCom />
    <StoreCom />

    <div class="asss">1111</div>
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
import BindStyle from '@/components/BindStyle/index.vue'
import NextTickCom from '@/components/NextTick/index.vue'
import StoreCom from '@/components/StoreCom/index.vue'
import { ggs } from '@/utils'

let isDirective = ref<boolean>(true)
// 获取全局属性
const {
  appContext: {
    config: { globalProperties }
  }
} = <ComponentInternalInstance>getCurrentInstance()
console.log('setup获取全局属性：', globalProperties.$name, globalProperties.$bool)

const add = () => {
  console.log(11111)
}
</script>

<style lang="less" scoped>
.asss {
  color: @primary-color;
}
</style>
