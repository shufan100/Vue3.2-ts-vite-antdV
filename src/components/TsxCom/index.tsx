import { reactive, ref } from 'vue'

const code = ref<string>('1')
const val = ref<string>('请输入')
const isBool = ref<boolean>(false)
const data = reactive<string[]>(['小强', '小芳', '小红'])
const add = (data: number, ctx: any): void => {
  console.log(data)
  isBool.value = !isBool.value
  console.log(ctx)
  // emit调用父级方法
  ctx.emit('add')
}

const TsxCom = (props: any, ctx: any) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Tsx组件</h2>
      <div>{code.value}</div>
      <div>{props.title}</div>
      <span>{val.value}</span>
      <input type='text' v-model={val.value} />
      <button onClick={() => add(1, ctx)}>点击</button>
      <h2 v-show={isBool.value}>1111</h2>
      <ul>
        {data.map((item: string) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}
export default TsxCom
