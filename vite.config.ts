import { defineConfig, loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


// import path from 'path';
import { resolve, join } from 'path'
// 
import { wrapperEnv } from './build/utils'
// 插件
import { createVitePlugins } from './build/plugin';

// defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {

  /** 
   * vite默认不加载.env文件，
   */
  const root: string = process.cwd() // 通过process获取路径
  const env: Record<string, string> = loadEnv(mode, root) // 加载对应的环境变量(第三个参数为空就是加载所有环境变量)

  console.log('环境变量------', env)
  console.log('文件路径（ process.cwd()）------', root)
  console.log('文件路径（dirname）------', __dirname + '/src')
  const viteEnv = wrapperEnv(env)
  const { VITE_DROP_CONSOLE } = viteEnv

  // command: 开发serve  生产build
  const isBuild: boolean = command === 'build'

  // // dev 独有配置
  return {
    root, //项目根目录（index.html 文件所在的位置） 默认： process.cwd()
    base: '/', //  开发或生产环境服务的公共基础路径：默认'/'   1、绝对 URL 路径名： /foo/；  2、完整的 URL： https://foo.com/； 3、空字符串或 ./（用于开发环境）
    publicDir: resolve(__dirname, './dist'), //默认'public'  作为静态资源服务的文件夹  (打包public文件夹会没有，里面得东西会直接编译在dist文件下)
    assetsInclude: resolve(__dirname, './src/assets'), // 静态资源处理

    // ******resolve配置******
    resolve: {
      // 别名配置
      alias: {
        // 1、键必须以斜线开始和结束；2、键：始终使用绝对路径（'/'），相对路径('./ , ../')会原封不动被使用
        '@': resolve(__dirname, 'src'),
        components: resolve(__dirname, './src/components'),
        assets: resolve(__dirname, './src/assets'),
        '#': resolve(__dirname, 'types'),
        build: resolve(__dirname, 'build')
      }
    },
    // ******开发服务器配置******
    server: {
      https: false, //(使用https)启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS
      host: true, // 监听所有地址
      port: 8080, //指定开发服务器端口：默认3000
      open: true, //启动时自动在浏览器中打开
      cors: false, //为开发服务器配置 CORS。默认启动并允许任何源（类似后端配置跨越）
      force: false, // 强制使依赖预构建
      proxy: {
        //配置自定义代理规则
        // 字符串简写写法
        '/jpi': 'http://192.168.1.97:4567',
        '/api': {
          target: 'http://192.168.1.97:108',
          changeOrigin: true, //是否跨域
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
      // hmr: { //禁用hrm热更新 连接
      //   overlay: false
      // }
    },
    // ******项目构建配置******(本地开发和打包都会走这)
    build: {
      target: 'modules', //设置最终构建的浏览器兼容目标  //es2015(编译成es5) | 默认：modules
      polyfillModulePreload: true, //polyfill会被自动注入到每个index.html入口的proxy模块中   默认true
      outDir: 'dist', // 编译输出的路径  默认：dist
      assetsDir: 'assets', // 静态资源的存放路径 默认assets
      assetsInlineLimit: 4096, // 导入和引用的资源小于4kb将内联成base64编码  默认(4kb)
      cssCodeSplit: false,  // css代码拆分，false css会被提取到一个css文件中。  默认true
      cssTarget: 'chrome61', //编译css的兼容目标 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
      sourcemap: false, //构建后是否生成 source map 文件
      minify: 'esbuild', // 项目压缩 :boolean | 'terser' | 'esbuild'
      brotliSize: true, // 启用/禁用 brotli 压缩大小报告。 禁用该功能可能会提高大型项目的构建性能
      chunkSizeWarningLimit: 1000, //chunk 大小警告的限制（以 kbs 为单位）默认：500
      reportCompressedSize: true, // gzip压缩大小报告
      // rollupOptions:{} //自定义底层rollup打包配置，并将与vite的内部rollup选项合并。
      // commonjsOptions:{} // plugin-commonjs插件配置
      // dynamicImportVarsOptions:{} //pulgin-dynamic-import-vars插件配置
    },

    // 插件
    plugins: createVitePlugins(viteEnv, isBuild),
    // ******打印+debugger清除配置******
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },
    // 可在vite编译的时候将环境变量+固定数据编译到项目里
    define: {
      __APP_INFO__: {
        name: "SHUF"
      }
    },
    css: {
      // 全局变量+全局引入less+配置antdv主题色
      preprocessorOptions: {
        // 注：less-loader版本需要大于6.0.0版本
        less: {
          javascriptEnabled: true,
          // 全局变量使用：@primary-color
          modifyVars: {
            'primary-color': '#1890ff', // 全局主色
            'link-color': ' #1890ff', // 链接色
            'success-color': ' #52c41a', // 成功色
            'warning-color': ' #faad14', // 警告色
            'error-color': ' #f5222d', // 错误色
            'font-size-base': ' 14px', // 主字号
            'heading-color': ' rgba(0, 0, 0, 0.85)', // 标题色
            'text-color': ' rgba(0, 0, 0, 0.65)', // 主文本色
            'text-color-secondary': ' rgba(0, 0, 0, 0.45)', // 次文本色
            'disabled-color': ' rgba(0, 0, 0, 0.25)', // 失效色
            'border-radius-base': ' 2px', // 组件/浮层圆角
            'border-color-base': ' #d9d9d9', // 边框色
            'box-shadow-base': ' 0 2px 8px rgba(0, 0, 0, 0.15)' // 浮层阴影
          }
        }
      }
    }
  }
})
