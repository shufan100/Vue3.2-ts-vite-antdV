import { Directive, App, DirectiveBinding } from 'vue';
// 防抖指令
const antiShakeDirective: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
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
};

export function setupAntiShakeDirective(app: App) {
  app.directive('antiShake', antiShakeDirective);
}

export default antiShakeDirective;
