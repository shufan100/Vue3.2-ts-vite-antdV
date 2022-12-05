/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-12-05 14:11:52
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-12-05 16:09:55
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\build\plugin\html.ts
 * @Description:压缩img
 */
import type { PluginOption } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export function vitePluginImagemin(): PluginOption[] {
  return viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    mozjpeg: {
      quality: 20,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  })
}