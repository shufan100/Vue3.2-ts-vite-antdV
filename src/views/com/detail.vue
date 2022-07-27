<template>
  <div>
    <input type="text" v-model="val1" :disabled="disabled" />
    <input type="text" v-model="val2" :disabled="disabled" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  type: string
}>()
let val1 = ref<string>('')
let val2 = ref<string>('')
let disabled = ref<boolean>(false)
onMounted(() => {
  console.log(props.type, '---')
  if (props.type == 'edit') {
    val1.value = 'edit'
    val2.value = 'edit'
  }
  if (props.type == 'look') {
    val1.value = 'look'
    val2.value = 'look'
    disabled.value = true
  }
})
</script>

<style scoped lang="less">
//@import url('xxx');
</style>
