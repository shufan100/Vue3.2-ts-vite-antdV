import { defineConfig } from 'vite'
import { loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
// import path from 'path';
import { resolve, join } from 'path';
import { wrapperEnv } from './build/utils';

// defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  console.log(command, mode, '===')
  const root = process.cwd();
  const env = loadEnv(mode, root); // 环境变量对象
  console.log('环境变量------', env)
  console.log('文件路径（ process.cwd()）------', root)
  console.log('文件路径（dirname）------', __dirname + '/src')
  const { VITE_DROP_CONSOLE } = wrapperEnv(env)

  // // dev 独有配置
  return {
    root,  //项目根目录（index.html 文件所在的位置） 默认： process.cwd()
    base: '/', //  开发或生产环境服务的公共基础路径：默认'/'   1、绝对 URL 路径名： /foo/；  2、完整的 URL： https://foo.com/； 3、空字符串或 ./（用于开发环境）
    publicDir: resolve(__dirname, './dist'),  //默认'public'  作为静态资源服务的文件夹  (打包public文件夹会没有，里面得东西会直接编译在dist文件下)
    assetsInclude: resolve(__dirname, './src/assets'),  // 静态资源处理
    plugins: [vue()],  // 需要用到的插件数组。
    // ******开发服务器配置******
    server: {
      https: true, //(使用https)启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS
      host: true, // 监听所有地址
      port: 8080,  //指定开发服务器端口：默认3000
      open: true,  //启动时自动在浏览器中打开
      cors: false,  //为开发服务器配置 CORS 
      proxy: {  //配置自定义代理规则
        // 字符串简写写法
        '/jpi': 'http://192.168.1.97:4567',
        '/api': {
          target: "http://192.168.1.97:108",
          changeOrigin: true, //是否跨域
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      // hmr: {
      //   overlay: false
      // }
    },
    // ******项目构建配置******
    build: {
      target: 'modules',  //设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
      outDir: 'dist',  // 构建得包名  默认：dist
      assetsDir: 'assets', // 静态资源得存放路径文件名  assets
      sourcemap: false,   //构建后是否生成 source map 文件
      brotliSize: false,  // 启用/禁用 brotli 压缩大小报告。 禁用该功能可能会提高大型项目的构建性能
      minify: 'esbuild',   // 项目压缩 :boolean | 'terser' | 'esbuild'
      chunkSizeWarningLimit: 1000,  //chunk 大小警告的限制（以 kbs 为单位）默认：500
      cssTarget: 'chrome61',   //防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
    },
    // ******resolver配置******
    resolve: {
      alias: {  // 别名配置
        // 键必须以斜线开始和结束
        '@': resolve(__dirname, 'src'),
        'assets': resolve(__dirname, './src/assets'),
        '#': resolve(__dirname, 'types'),
        'build': resolve(__dirname, 'build')
      },
    },
    // 除测试环境删除其他环境的打印
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },

    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // 全局变量样式 使用：@primary-color
          modifyVars: {
            'primary-color': "#2858f8",
            'success-color': '#55D187', //  Success color
            'error-color': '#ED6F6F', //  False color
            'warning-color': '#EFBD47', //   Warning color
            'border-color-base': '#EEEEEE',
            'font-size-base': '14px', //  Main font size
            'border-radius-base': '2px', //  Component/float fillet
            'app-content-background': '#fafafa', //   Link color
          },
        },
      },
    },
  };
})
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}