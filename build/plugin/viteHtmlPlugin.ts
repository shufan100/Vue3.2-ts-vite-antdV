/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-12-05 14:11:52
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-12-05 14:56:34
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\build\plugin\html.ts
 * @Description:压缩html
 */
import type { PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export function viteHtmlPlugin(env: ViteEnv, isBuild: boolean): PluginOption[] {

  const { VITE_GLOB_APP_TITLE } = env;

  return createHtmlPlugin({
    // 是否压缩html
    minify: isBuild,
    // 将数据注入ejs模板(html就可以用)
    inject: {
      data: {
        title1: VITE_GLOB_APP_TITLE,
      },
    },
  });
}