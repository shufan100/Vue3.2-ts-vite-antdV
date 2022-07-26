<template>
  <div id="Directive" v-move>
    <header>
      <span>拖拽弹窗{{ isDirective }}</span>
      <span @click="emit('update:isDirective', false)">X</span>
    </header>
    <main>
      自定义拖拽指令
      <button v-antiShake @click="onClick">防抖按钮</button>
    </main>
  </div>
</template>

<script setup lang="ts">
type Props = {
  isDirective: boolean
}
withDefaults(defineProps<Props>(), {
  isDirective: true
})
const emit = defineEmits(['update:isDirective'])

const onClick = (): void => {
  console.log(111111)
}
</script>

<style lang="less" scoped>
#Directive {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 350px;
  transform: translate(-50%, -50%);
  border: 1px solid #999;
  border-radius: 4px;
  background: #fff;
  //  阴影
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 40%);
  box-sizing: border-box;
  header {
    display: flex;
    justify-content: space-between;
    height: 30px;
    padding: 0 15px;
    line-height: 30px;
    border-bottom: 1px solid #999;
    span:nth-child(2) {
      cursor: pointer;
    }
  }
  main {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 30px);
    padding: 15px;
  }
}
</style>
