<template>
  <h1>{{ msg }}</h1>
  <span>{{ count }}</span>
  <button @click="editCount">修改count</button><br />
  <button @click="isRefs">isRef判断ref对象</button><br />
  <span>{{ message }} -- {{ message.name }}</span>
  <button @click="shallowRefs">shallowRefs修改ref对象</button><br />
  <button @click="triggerRefs">triggerRefs修改ref对象某个属性</button><br />
</template>
<script setup lang="ts">
import { ref, Ref, isRef, shallowRef, triggerRef } from 'vue'
defineProps<{ msg: string }>()
// -------------------- ref ------------------------

// const count = ref<number>(0) // 定义方法1
const count: Ref<number> = ref(0) // 定义方法2
let notRef: number = 123

// ref.value
const editCount = () => {
  count.value++
}

// isRef
const isRefs = () => {
  console.log(isRef(count))
  console.log(isRef(notRef))
}

// shallowRef
type Obj = {
  name: string
  age: number
}
let message: Ref<Obj> = shallowRef({
  name: '小满',
  age: 19
})
const shallowRefs = () => {
  message.value = {
    //具备响应式
    ...message.value,
    name: '大满11'
  }
}

// triggerRef
const triggerRefs = () => {
  message.value.name = 'damm' //不具备响应式
  triggerRef(message) //强制更新dom
}
</script>

<style scoped></style>
