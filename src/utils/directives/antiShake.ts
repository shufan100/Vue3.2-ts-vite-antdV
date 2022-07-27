import { Directive, App, DirectiveBinding } from 'vue';
// 防抖指令
const antiShakeDirective: Directive = {
  // 钩子函数接收4个参数 
  // 1、el：当前绑定的DOM元素  2、binding:{instance,value,oldValue,arg,modifiers,dir}属性  3、Vnode: 当前元素的虚拟DOM 4、prevNode：上一个虚拟节点（仅在 beforeUpdate 和 updated 钩子中可用 ）
  mounted(el: HTMLElement, binding: DirectiveBinding,) {
    const dom: any = el as HTMLElement
    dom.addEventListener('click', () => {
      if (!dom.disabled) {
        dom.disabled = true
        setTimeout(() => {
          dom.disabled = false
        }, binding.value || 1000)
      }
    })
  }
  // *** vue3指令的钩子函数 *** 
  // created 元素初始化的时候
  // beforeMount 指令绑定到元素后调用 只调用一次
  // mounted 元素插入父级dom调用
  // beforeUpdate 元素被更新之前调用
  // update 这个周期方法被移除 改用updated
  // beforeUnmount 在元素被移除前调用
  // unmounted 指令被移除后调用 只调用一次

};

export function setupAntiShakeDirective(app: App) {
  app.directive('antiShake', antiShakeDirective);
}

export default antiShakeDirective;
