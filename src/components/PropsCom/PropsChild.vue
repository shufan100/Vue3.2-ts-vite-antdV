<template>
  <div style="margin-top: 20px; padding-left: 20px">
    <h4>propscom--子组件 {{ show }}</h4>
    <ul>
      <li>{{ stateData?.id }}</li>
      <li>{{ stateData?.title }}</li>
      <li>{{ stateData?.list }}</li>
      <li>{{ title }}</li>
      <li><button @click="emit('add', '00')">调用父组件的方法</button></li>
      <li><button @click="emit('update:show', !show)">修改父组件的show</button></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type Props = {
  show: boolean
  title?: string
  stateData?: {
    id: string
    title: string
    list: string[]
  }
}
type State = {
  name: string
  flag: boolean
}
const props = withDefaults(defineProps<Props>(), {
  show: false,
  title: '3333',
  stateData: () => ({
    id: '009',
    title: '默认值',
    list: ['默认值1', '默认值2', '默认值3']
  })
})
const emit = defineEmits(['add', 'update:show'])
// const emit = defineEmits<{
//   (e: 'add', data: string): void
//   (e: 'update:show'): void
// }>()
const state = reactive<State>({
  name: '11111',
  flag: true
})

const getProps = (): void => {
  console.log('父组件调用子组件方法：', props)
}
// 暴露给父组件用
defineExpose({
  state,
  getProps
})
</script>

<style lang="less" scoped>
// @import url(xxx);
</style>
