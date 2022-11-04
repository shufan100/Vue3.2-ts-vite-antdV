// 组合式函数（hooks）

import { $$, $ref } from "vue/macros"

// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
  // 被组合式函数封装和管理的状态
  const x = ref<number>(0)
  const y = ref<number>(0)


  // 组合式函数可以随时更改其状态。
  function update(event: any): void {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // 通过返回值暴露所管理的状态
  // 这样返回会丢失响应式
  return { x, y }
}
export function useMouse$() {
  // 被组合式函数封装和管理的状态
  let x1 = 0
  let y1 = 0

  // 组合式函数可以随时更改其状态。
  function update(event: any): void {
    x1 = event.pageX
    y1 = event.pageY
    // console.log(x1, y1, '===')
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // 给结构丢失的响应式加上响应式
  return $$({
    x1, y1
  })
}

// 
export function useFetch() {
  // 
  const data = {
    name: ref("SHUF"),
    age: ref(19)
  }
  const data2 = reactive({
    name: 'SHUF',
    age: 18
  })
  return data
}
