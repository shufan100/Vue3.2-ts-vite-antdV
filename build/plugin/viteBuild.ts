/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-12-05 14:11:52
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-12-05 15:53:28
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\build\plugin\html.ts
 * @Description: 编译包大小，编译时间
 */
import type { PluginOption } from 'vite';
import { readdir, stat } from 'fs'
import figlet from 'figlet'
import dayjs, { Dayjs } from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const staticPath = 'dist'
const fileListTotal: number[] = []
// 编译
export function viteBuild(env: ViteEnv, isBuild: boolean) {
  // const { VITE_GLOB_APP_TITLE } = env;
  let startTime: Dayjs;
  let endTime: Dayjs;

  return {
    name: 'vite:build',

    // 编译开始
    buildStart() {
      figlet.text('H i   S H U F   A d m i n', function (err: any, data: string) {
        // 通过打印的方式显示在编译之前
        console.log(data, '')
      })
      if (isBuild) {
        startTime = dayjs(new Date())
      }
    },


    // 编译结束
    closeBundle() {
      if (isBuild) {
        endTime = dayjs(new Date())
        recursiveDirectory(staticPath, () => {
          let total = fileListTotal.reduce((prev, next) => prev + next)
          console.log(`--恭喜打包完成🎉🎉🎉：（总用时${dayjs.duration(endTime.diff(startTime)).format('mm分ss秒')}，打包后的大小为${formatBytes(total)}）`)
        })
      }
    }
  }
}

// 将打包后的文件大小存到数组
const recursiveDirectory = (folder: string, callback: Function): void => {
  readdir(folder, (err, files: string[]) => {
    if (err) throw err
    let count = 0
    const checkEnd = () => {
      ++count == files.length && callback()
    }
    files.forEach((item: string) => {
      stat(folder + '/' + item, async (err, stats) => {
        if (err) throw err
        if (stats.isFile()) {
          fileListTotal.push(stats.size)
          checkEnd()
        } else if (stats.isDirectory()) {
          recursiveDirectory(`${staticPath}/${item}/`, checkEnd)
        }
      })
    })
    files.length === 0 && callback()
  })
}

// 内存转换
const formatBytes = (a: number, b?: number): string => {
  if (0 == a) return '0 Bytes'
  const c = 1024,
    d = b || 2,
    e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    f = Math.floor(Math.log(a) / Math.log(c))
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
}