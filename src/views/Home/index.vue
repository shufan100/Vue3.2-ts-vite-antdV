<template>
  <div class="home">
    <h2>首页--home</h2>
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
    <ul>
      <li v-for="(i, index) in arr">{{ i.id }} -- {{ i.name }}>>{{ arr2[index] }}</li>
    </ul>
    {{ arr }} {{ arr2 }}
    <button @click="edit">修改</button>
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

let isDirective = ref<boolean>(true)

let arr = ref<any[]>([])
let arr2 = ref(['11', '22', '33'])

// 获取全局属性
const {
  appContext: {
    config: { globalProperties }
  }
} = <ComponentInternalInstance>getCurrentInstance()
console.log('setup获取全局属性：', globalProperties.$name, globalProperties.$bool)

onMounted(() => {
  arr.value = [
    { id: 1, name: '2121' },
    { id: 2, name: '33333' },
    { id: 3, name: 'ggggg' }
  ]
})

const add = () => {
  console.log(11111)
}
const edit = () => {
  arr.value[1] = reactive({ id: 4, name: '34343' })
  // arr2.value[1] = '44'
}
</script>

<style lang="less" scoped></style>
