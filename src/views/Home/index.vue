<template>
  <div class="home">
    {{ x }}--{{ y }} {{ data.name }}
    <h2 v-color="colors">首页--home</h2>
    <p>{{ $omitTextPlugin('xxxxxxzfaffa') }}</p>
    <a-button type="primary">1111</a-button>
    <a-button color="warning">32</a-button>
    <div>
      <h3 style="color: red">1、读取ts文件</h3>
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
    <div>
      <h3 style="color: red">3、*全局样式变量</h3>
      <div class="asss">全局样式变量</div>
    </div>
    <div>
      <h3 style="color: red">4、public静态资源（开发期间路径'/'）</h3>

      <img src="/public/logo2.png" alt="" />
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
// hooks
import { useMouse, useFetch } from '@/hooks'

// const { name } = __APP_INFO__
// console.log(name)
const colors = ref<string>('yellow')

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

//
const { x, y } = useMouse()
console.log(x, y, '--=')
const data = useFetch()
setTimeout(() => {
  data.name.value = '舒梵'
  // console.log(name.value, age.value)
}, 1000)
</script>

<style lang="less" scoped>
.asss {
  color: @primary-color;
}
</style>
