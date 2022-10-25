
import { Directive, DirectiveBinding, App } from 'vue'
const color: Directive = (el: HTMLElement, binding: DirectiveBinding) => {
  // console.log(binding, '==')
  el.style.color = binding.value
}
export function setupColorDirective(app: App) {
  app.directive('color', color);
}

export default color;