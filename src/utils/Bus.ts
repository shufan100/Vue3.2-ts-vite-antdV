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

    // 订阅后：就会和下面的例子一样
    // this.list = {
    //   'tag': [Fun1, Fun2...],
    //   'tag2': [Fun1, ...],
    //   ...
    // }
  }

  // 发布
  // 使用：name:方法名   ...agrs：传入的多个参数，扩展接收就成数组了
  emit(name: string, ...args: Array<any>) {
    let eventName: Array<Function> = this.list[name] //因为订阅会有多个，需要循环给每个订阅者都发送参数
    console.log('触发消息订阅：', eventName,)
    eventName.forEach(fn => {
      fn.apply(this, args)
    })
  }
  // 订阅：--------可以多个地方接收
  // 接收：name：接收的方法名    callback：callback使用的回调函数
  on(name: string, callback: Function) {
    let fn: Array<Function> = this.list[name] || [] //可多个地方使用，所以必须是数组（函数的数组）
    fn.push(callback)
    this.list[name] = fn
    console.log('注册消息订阅：', name, this.list)
  }

  // 取消订阅
  off(name: string) {
    console.log(this.list)
    if (this.list[name]) {
      delete this.list[name];
    }
    console.log('销毁消息订阅：', this.list)
  }
}

// 导出Bus对象实例
export default new Bus()