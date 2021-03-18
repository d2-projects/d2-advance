## 开始使用

D2 Advance 专注于更好的开发体验和工程实践。

2x 版本集成了 ⚡️ Vite、🖖 Vue3、TypeScript 和 Tailwind CSS，可作为启动模块，快速开发响应式💻📱、多场景的单页面应用。

### 快速上手

请先安装：

- [Git 客户端](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/zh-cn/download/) 12 或更高版本
- [Yarn](https://yarnpkg.com/)（不推荐 npm）
- [VSCode](https://code.visualstudio.com/)（推荐）

通过以下任意一种方式创建项目：

- [以 D2 Advance 为模版，在 GitHub 上创建一个仓库](https://github.com/d2-projects/d2-advance/generate)
- 下载到本地：`npx degit d2-projects/d2-advance my-app`，需要手动初始化成 Git 仓库：`cd my-app && git init .`

修改为自有项目（可选）：

- 修改 `package.json` 的 `name` 为所需要的名字，如 `my-app`
- 修改 `package.json` 的 `version` 为你需要的初始版本，如 `0.0.0`
- 修改 `public` 中的 favicon，可以在 [favicon.io](https://favicon.io/) 生成自己的
- 修改 `index.html` 中的 `title`
- 删除 `.github` 目录
- 修改或删除 `README.md` 和 `package.json` 中的 License
- 修改或删除 `README.md` 中的相关链接

安装依赖及各种命令操作：

``` bash
# 安装依赖
yarn install

# 启动本地开发服务
yarn serve

# 构建打包
yarn build

# 构建打包，带打包分析 `_report.html`
yarn build:report

# 构建打包，本地预览
yarn preview

# 代码检查和自动修复
yarn lint
yarn lint --fix

# 类型检查
yarn type

# 交互式 Git 提交
yarn commit

# 自动发布新版本
yarn release

# 单元测试
yarn test:unit

# 输出浏览器适配范围
yarn browsers
```

## 文件约定

### 文件名

推荐所有文件和目录都使用全小写+中划线风格：`hello-world.vue`，可以避免一些系统在大小写区分上的差异，且组件名风格与 template 中保持一致：`<hello-world msg="hello" />`

### 目录结构

```
├── .github                         Github 相关
|   └── workflows                   Github Actions 相关
├── .husky                          Husky 与 git hooks 相关
├── .vscode                         VSCode 推荐配置相关
├── dist                            编译结果
├── docs                            文档，Markdown 为主
├── public                          纯静态资源
├── src                             源码目录
|   ├── api                         后端接口请求
|   ├── assets                      会被代码引用的静态资源
|   ├── components                  公共组件
|   ├── constants                   常量
|   ├── mock                        Mock 工具
|   ├── plugins                     Vue 插件
|   ├── router                      路由
|   ├── store                       状态管理
|   ├── utils                       纯函数等工具方法
|   ├── views                       页面文件目录
|   |   ├── admin                   admin 目录
|   |   |   └── index.vue           admin 页面
|   |   ├── home                    home 目录
|   |   |   └── index.vue           home 页面
|   |   └── space                   space 目录
|   |       └── index.vue           space 页面
|   ├── App.vue                     根组件
|   ├── main.css                    公共样式
|   └── main.ts                     项目入口文件
├── .editorconfig                   通用编辑器配置
├── .env                            环境变量
├── .eslintrc.js                    ESLint 配置
├── .gitignore                      Git 忽略文件
├── .prettierrc                     Prettier 格式化配置
├── global.d.ts                     全局类型文件
├── index.html                      静态页面入口
├── package.json                    项目信息和依赖
├── index.html                      静态页面入口
├── tailwind.config.ts              Tailwind CSS 配置
├── tsconfig.json                   TypeScript 配置
├── vite.config.ts                  Vite 配置
└── yarn.lock                       依赖锁定
```

### 配置文件

零散的配置文件会显得冗余，如 `lint-staged`、`commitlint`、`commitizen`、`standard-version`、`browserslist` 等不常改动的配置，可以放到 `package.json` 中:

``` json
{
  "name": "...",
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": "eslint --fix "
  },
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "standard-version": {
    "infile": "docs/CHANGELOG.md"
  },
  "browserslist": [
    "defaults"
  ]
}
```

## 代码注释

## 环境变量

### 自定义变量

类型定义位于 ` global.d.ts`:

``` ts
// ...
interface CustomEnvVariables {
  VITE_API_BASE_URL: string;
  // ...可以在此添加其他自定义变量，必须以 VITE_ 开头
}
```

默认所有默认值位于 `.env`:

```
VITE_BASE_URL=./
VITE_HTTP_MOCK=on
VITE_SOURCE_MAP=off
VITE_GZIP=on
VITE_BROTLI=on

VITE_API_BASE_URL=/api
```

在添加自定义变量时，记得 `.env` 和类型定义都要加，便于在代码中引用。

## 路由

## HTTP 请求

## HTTP Mock


## CSS 工具类
### Tailwind CSS
### Windi CSS

## 代码检查
### ESLint
### TypeScript
### Commitizen
### Commitlint
### lint-staged
### Husky

## 打包

## 打包分析

## 部署
### Nginx

## 单元测试

## 版本演进
### standard-version
