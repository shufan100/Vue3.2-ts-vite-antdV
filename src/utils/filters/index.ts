// 自定义全局filter
export default {
  //
  getStatus(status: number): string {
    let temp
    switch (status) {
      case 1:
        temp = '直播中'
        break
      case 2:
        temp = '已结束'
        break
      default:
        temp = '待开播'
    }
    return temp
  },
  getStatus2(status: number): boolean {
    let temp
    switch (status) {
      case 1:
        temp = false
        break
      default:
        temp = true
    }
    return temp
  }
}
