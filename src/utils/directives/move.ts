import type { Directive, DirectiveBinding, App } from 'vue';

// 拖拽指令
const moveDirective: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {
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
export function setupMoveDirective(app: App) {
  app.directive('move', moveDirective);
}
export default moveDirective;