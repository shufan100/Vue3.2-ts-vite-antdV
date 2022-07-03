<template>
  <h1>reactive</h1>
  {{ arr }}
  <button @click="get">请求1</button><br />
  {{ person.list }}
  <button @click="get2">请求2</button><br />
  {{ person.num }}
  <button @click="readonlys">readonly</button><br />

  {{ state }}
  <button @click="chage1">chage1</button>
  <button @click="chage2">chage2</button><br />
</template>
<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue'

// -------------------- reactive ------------------------

//方式1：定义数组
let arr = reactive<object[]>([])
const get = () => {
  let res = [
    { id: '001', name: '111' },
    { id: '002', name: '222' }
  ]
  setTimeout(() => {
    // arr = res //这样数据会更新，但视图不会更新 (这样赋值页面是不会变化的因为会脱离响应式)
    arr.push(...res)
  }, 1000)
}

//方式2：定义对象
type Person = {
  list?: Array<object>
  num: number
}
let person = reactive<Person>({
  list: [],
  num: 0
})
const get2 = () => {
  setTimeout(() => {
    const arr = [
      { id: '004', name: '444' },
      { id: '006', name: '666' }
    ]
    person.list = arr
  }, 1000)
  person.num++
}
// -------------------- readonly (只读)------------------------
const readonlys = () => {
  const copy = readonly(person)
  // copy.num++ //无法分配到 "num" ，因为它是只读属性
}

// -------------------- shallowReactive(浅层次响应式) ------------------------
const state = shallowReactive({
  test: '我是销售',
  nav: {
    bar: {
      name: '我试试'
    }
  }
})

const chage1 = () => {
  state.test = '我修改了'
}
const chage2 = () => {
  state.nav.bar.name = '我修改了--state.nav.bar.name'
}

//这样是会生效的e,dom更新完再去操作就深层次的数据不会更新视图了
// chage1()
// chage2()
</script>

<style scoped></style>
