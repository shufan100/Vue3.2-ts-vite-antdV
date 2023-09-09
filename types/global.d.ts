/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:52:59
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-12-05 16:25:10
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\types\global.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

declare global {
  const __APP_INFO__: {
    name: string
  }
  interface ImportMetaEnv extends ViteEnv {
    __: unknown
  }
}
declare type Recordable<T = any> = Record<string, T>
declare interface ViteEnv {
  VITE_PORT: number
  VITE_PUBLIC_BASE: string
  VITE_DROP_CONSOLE: boolean
  VITE_GLOB_APP_TITLE: string
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  // VITE_USE_MOCK: boolean;
  // VITE_USE_PWA: boolean;
  // VITE_PUBLIC_PATH: string;
  // VITE_PROXY: [string, string][];
  // VITE_GLOB_APP_SHORT_NAME: string;
  // VITE_USE_CDN: boolean;
  // VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  // VITE_LEGACY: boolean;
  // VITE_USE_IMAGEMIN: boolean;
  // VITE_GENERATE_UI: string;
}

// declare module 'figlet'
