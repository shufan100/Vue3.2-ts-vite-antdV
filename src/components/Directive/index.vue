<template>
  <div id="Directive" v-move>
    <header>
      <span>拖拽弹窗{{ isDirective }}</span>
      <span @click="emit('update:isDirective', false)">X</span>
    </header>
    <main>自定义拖拽指令）</main>
  </div>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding } from 'vue'
type Props = {
  isDirective: boolean
}
withDefaults(defineProps<Props>(), {
  isDirective: true
})
const emit = defineEmits(['update:isDirective'])

// 自定义拖拽指令
//函数接收4个参数：el:是Directive--dom节点  binding
const vMove: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {
  let headerDom: HTMLDivElement = el.firstElementChild as HTMLDivElement //获取header的dom节点
  let appDom: HTMLDivElement = document.querySelector('#app') as HTMLDivElement //获取header的dom节点
  console.log(appDom)
  // 鼠标按下事件
  const mousedown = (e: MouseEvent): void => {
    console.log(e, '鼠标按下时的')
    // 鼠标移动事件
    el.style.cursor = 'move'
    const X = e.clientX - el.offsetLeft
    const Y = e.clientY - el.offsetTop
    const move = (evt: MouseEvent): void => {
      // console.log(e, '鼠标移动时的')
      let posX = evt.clientX - X
      let posY = evt.clientY - Y

      // 左
      if (posX <= el.offsetWidth / 2) {
        posX = el.offsetWidth / 2
      }
      // 上
      if (posY <= el.offsetHeight / 2) {
        posY = el.offsetHeight / 2
      }
      // 右
      if (posX >= appDom.clientWidth - el.offsetWidth) {
        posX = appDom.clientWidth - el.offsetWidth + el.offsetWidth / 2
      }
      // 下
      if (posY >= appDom.clientHeight - el.offsetHeight) {
        posY = appDom.clientHeight - el.offsetHeight + el.offsetHeight / 2
      }
      el.style.left = posX + 'px'
      el.style.top = posY + 'px'
    }
    // 鼠标按下 -- 触发-- 移动事件
    document.addEventListener('mousemove', move)
    // 鼠标抬起 -- 触发-- 移除移动事件
    document.addEventListener('mouseup', () => {
      el.style.cursor = 'default'
      document.removeEventListener('mousemove', move)
    })
  }
  // 给header节点绑定鼠标按下事件 （需要触发move事件）
  headerDom?.addEventListener('mousedown', mousedown)
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
