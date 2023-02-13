<!--
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:52:59
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-02-13 18:37:21
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\src\views\Home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <h2>首页--home</h2>
    <a-button type="primary">1111</a-button>
    <a-button color="warning">32</a-button>
    <a-input v-model:value="inpVal" placeholder="请输入11111" />
    <a-radio-group v-model:value="radioVal" name="radioGroup">
      <a-radio value="1">A</a-radio>
      <a-radio value="2">B</a-radio>
      <a-radio value="3">C</a-radio>
      <a-radio value="4">D</a-radio>
    </a-radio-group>
    <a-time-picker :bordered="false" />
    <a-time-range-picker :bordered="false" />
    <a-pagination :total="50" show-size-changer />


    <a-range-picker v-model:value="date" />
    <!-- <p>{{ $omitTextPlugin('xxxxxxzfaffa') }}</p> -->
    <div>
      <h3 style="color: red">1、读取ts文件</h3>
      &nbsp;&nbsp;&nbsp;&nbsp;1、 {{ ggs() }}
    </div>
    <div>
      <h3 style="color: red">2、*全局变量1</h3>
      &nbsp;&nbsp;&nbsp;&nbsp;1、全局变量1： {{ $name }}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;2、全局变量2： {{ $bool }}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;3、全局自定义过滤器1： {{ $filters.getStatus(1) }}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;4、全局自定义过滤器2： {{ $filters.getStatus2(1) }}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;5、全局路由属性(route)： {{ $route.fullPath }}等等<br />
      &nbsp;&nbsp;&nbsp;&nbsp;6、全局路由(router)： <button @click="$router.push('/about')">跳转</button><br />
      &nbsp;&nbsp;&nbsp;&nbsp;7、全局自定义指令： <button @click="isDirective = !isDirective">拖拽弹窗{{
        isDirective
      }}</button><br />
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
import { Input, Button, RadioGroup, Radio } from 'ant-design-vue';

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
import type { Dayjs } from 'dayjs';
type RangeValue = [Dayjs, Dayjs];

// const { name } = __APP_INFO__
// console.log(name)

let isDirective = ref<boolean>(true)
let inpVal = ref<string>('')
let radioVal = ref<string>('2')
let date = ref<RangeValue>()
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
