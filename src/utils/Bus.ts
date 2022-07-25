// this.$bus.$emit('tags', this.tagsList)
// this.$bus.$on('tags', (msg) => {  })
// this.$bus.$on('tags', (msg) => {  })

// Eventbus通讯使用的是发布订阅的设计模式

type BusClass = {
  emit: (name: string, ...agrs: Array<any>) => void
  on: (name: string, callback: Function) => void
}


// implements：给类定义 类型校验
class Bus implements BusClass {
  list: { [key: string]: Array<Function> };
  constructor() {
    // 收集订阅信息,调度中心
    this.list = {}
  }

  // 发布
  // 使用：name:方法名   ...agrs：传入的多个参数，扩展接收就成数组了
  emit(name: string, ...args: Array<any>) {
    let eventName: Array<Function> = this.list[name]
    eventName.forEach(fn => {
      fn.apply(this, args)
    })
  }
  // 订阅：--------可以多个地方接收
  // 接收：name：接收的方法名    callback：callback使用的回调函数
  on(name: string, callback: Function) {
    let fn: Array<Function> = this.list[name] || []
    fn.push(callback)

    this.list[name] = fn
  }

  // 取消订阅
  off(name: string) {
    if (this.list[name]) {
      delete this.list[name];
    }
  }
}

// 导出Bus对象实例
export default new Bus()