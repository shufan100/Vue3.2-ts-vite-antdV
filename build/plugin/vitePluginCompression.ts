/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-12-05 16:18:46
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-12-05 17:21:48
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\build\plugin\vitePluginCompression.ts
 * @Description: 使用gizp 或 brotii 压缩资源
 */
import type { PluginOption } from 'vite';
import viteCompressPlugin from 'vite-plugin-compression';

// 进行代码压缩，配合后端时候，有gzip的文件读gizp的文件
export function vitePluginCompression(compress: 'gzip' | 'brotli' | 'none', deleteOriginFile = false): PluginOption {
  const plugins: PluginOption[] = [];

  console.log('压缩类型------', compress)

  if (compress == 'gzip') {
    plugins.push(
      viteCompressPlugin({
        // threshold: 1024,
        ext: '.gz', //文件类型
        algorithm: 'gzip', ////压缩算法
        deleteOriginFile,
      }),
    );
  }

  if (compress === 'brotli') {
    plugins.push(
      viteCompressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile,
      }),
    );
  }
  return plugins;
}