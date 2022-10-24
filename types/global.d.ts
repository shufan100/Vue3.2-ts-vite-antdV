// 环境变量
declare interface ViteEnv {
  VITE_DROP_CONSOLE: boolean
}

declare type Recordable<T = any> = Record<string, T>

declare global {
  const __APP_INFO__:{
    name:string
  }
}