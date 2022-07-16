# Vue 3 + TypeScript + Vite + antdV

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```


# 目录结构
```bash
# ├─ public                     # 静态资源
# │   └─ favicon.ico            # favicon图标
# │
# ├─ src                        # 源代码文件夹
# │   ├─ api                    # 接口
# │   │   ├─ modules              # 接口模块
# │   │   └─ index.ts             # 接口入口
# │   ├─ assets                 # 静态资源 (打包会被编译)
# │   │   ├─ css                  # 全局样式
# │   │   ├─ icon                 # icon图标
# │   │   └─ img                  # 图片
# │   ├─ components             # 全局注册组件
# │   │   ├─ TheCom1              # 组件1
# │   │   └─ TheCom2              # 组件2
# │   ├─ router                 # 路由
# │   │   ├─ modules              # 饼图
# │   │   └─ index.ts             # 导出弹窗
# │   ├─ pinia                  # 全局 管理（暂未）
# │   ├─ utils                  # 全局公用方法
# │   │   └─ index.ts              # 入口

# │   ├─ views                  # views 所有页面
# │   │   ├─ layout                 # 路由加载主页面
# │   │   ├─ componets              # 通用组件（未全局注册）
# │
# ├── App.vue                  # 入口页面
# ├── main.ts                  # 入口文件
# │
# ├── .env                     # 公共环境变量 （本地默认加载）
# ├── .env.development         # 测试环境--环境变量
# ├── .env.uat                 # 预线上环境--环境变量
# ├── .env.production          # 线上环境--环境变量
# │
# │
# ├── .gitignore                # git文件
# ├── index.html                # 主页面
# ├── package.json              # package.json
# ├── tsconfig.json             # TS配置文件
# └── tsconfig.node.json        # tsconfig.node.json
# └── vite.config               # vite配置
```
