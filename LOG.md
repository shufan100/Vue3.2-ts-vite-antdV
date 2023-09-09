## 日志

- 2023-09-09
  1. 布局重构
  2. 路由优化
  3. store 增加 types 类型定义文件
  4. 环境变量优化

## 待处理问题

1. 图片压缩插件未安装
2.

## 问题

1. resolve 方法找不到？
   1、安装 path -D

2. 找不到\_\_dirname？
   1、安装'@/types/node'

3. _.d.ts 文件声明的全局 global 类型报警告？
   1、tscofig.json includ 数组内增加 "types/\*\*/_.d.ts"

4. 全局 global 内定义的类型使用找不到？
   1、放在 global 单独 declare 定义，vue 和 ts 使用都不会报找不到了

5. ts 文件内 引用 ts 文件，路径提示找不到？
   1、注释 tsconfig.json "references": [{ "path": "./tsconfig.node.json" }]

6. vue 文件内 引用 ts 文件，路径提示找不到？
   1、tsconfig.json 配置：baseUrl 和 path
   2、开一下引入其他文件的再打开就会取消提示

7. 引入 vue 文件提示找不到模块？
   1、关闭重新打开

8. 类型“ImportMeta”上不存在属性“globEager”?
   1、tsconfog.json 配置 "types": ["vite/client"]
