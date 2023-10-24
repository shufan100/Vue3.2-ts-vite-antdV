/*
 *                                                     __----~~~~~~~~~~~------___
 *                                    .  .   ~~//====......          __--~ ~~
 *                    -.            \_|//     |||\\  ~~~~~~::::... /~
 *                 ___-==_       _-~o~  \/    |||  \\            _/~~-
 *         __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
 *     _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 *   .~       .~       |   \\ -_    /  /-   /   ||      \   /
 *  /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 *  |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
 *           '         ~-|      /|    |-~\~~       __--~~
 *                       |-~~-_/ |    |   ~\_   _-~            /\
 *                            /  \     \__   \/~                \__
 *                        _--~ _/ | .-~~____--~-/                  ~~==.
 *                       ((->/~   '.|||' -_|    ~~-/ ,              . _||
 *                                  -_     ~\      ~~---l__i__i__i--~~_/
 *                                  _-~-__   ~)  \--______________--~~
 *                                //.-~~~-~_--~- |-------~~~~~~~~
 *                                       //.-~~~--\
 *                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *                               神兽保佑            永无BUG
 */

/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-12-05 13:47:27
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-12-06 17:01:47
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\build\plugin\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' //tsx插件引入

//-----------------------------------快捷引入------------------------------------
import AutoImport from 'unplugin-auto-import/vite' //自动引入ref,reactive等等等
// 配置antd-v自动按需引入（自定义组件也会自动引）
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

//-----------------------------------压缩------------------------------------
// 压缩html插件
import { viteHtmlPlugin } from './viteHtmlPlugin'
// 压缩img插件
import { vitePluginImagemin } from './vitePluginImagemin'
// gizp 或brotli 压缩资源
import { vitePluginCompression } from './vitePluginCompression'

//-----------------------------------编译------------------------------------
// 打包时间、包大小、炫酷字体
import { viteBuild } from './viteBuild'
// 打包进度条
// import vitePluginProgress from 'vite-plugin-progress'
// 打包分析
// import { visualizer } from 'rollup-plugin-visualizer'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_BUILD_COMPRESS
    // VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
    // VITE_USE_IMAGEMIN,
    // VITE_USE_MOCK,
    // VITE_LEGACY,
  } = viteEnv

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    // 自动引入ref...
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          axios: [
            ['default', 'axios'] // import { default as axios } from 'axios',
          ]
        }
      ],
      dirs: ['./src/api'], // 本地模块api，可以不用引
      dts: 'types/auto-import.d.ts' //生成全局引入的文件
    }),
    // 自动引入UI和组件
    Components({
      // 指定组件位置，默认是src/components
      // dirs: ['types/components'],
      // ui库解析器
      //  resolvers: [ElementPlusResolver()],
      //  extensions: ['vue'],
      //  配置文件生成位置
      dts: 'types/components.d.ts',
      // dirs: ['src/types/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less' //修改antdv主题色
        })
      ]
    }),

    // ******************************************编译*****************************************
    // vite编译
    viteBuild(viteEnv, isBuild)
    // 打包进度条(bug:不显示打包的文件)
    // vitePluginProgress(),
    // // rollup-plugin-visualizer(打包后的视图文件)
    // visualizer({
    //   filename: './node_modules/.cache/visualizer/stats.html',
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true
    // })
  ]


  // ******************************************打包压缩*****************************************
  if (isBuild) {
    // vite-plugin-html（压缩html）
    vitePlugins.push(viteHtmlPlugin(viteEnv, isBuild))
    // vite-plugin-imagemin（压缩img）
    // vitePlugins.push(vitePluginImagemin())
    // vite-plugin-compression（使用gizp 或 brotii 压缩资源）
    vitePlugins.push(vitePluginCompression(VITE_BUILD_COMPRESS, false))
  }

  return vitePlugins
}
