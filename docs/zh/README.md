# D2 Advance

D2 Advance 是受 [D2 Admin](https://github.com/d2-projects/d2-admin/) 交互设计影响下，另起的新项目。在保留 D2 Admin 经典设计的同时，**整理出清晰的架构、提升代码质量和规范开发流程**，并探索 Vue 在中后台之外的更多应用场景。

使用须知：

- 和 D2 Admin 1x 版本的代码完全不一样，**你需要重新学习，先看懂再用**，避免风险
- 代码里没有注释，**好的代码不需要注释**，如果有，要么是标注的文档地址，要么是有坑
- 基于 vue-cli@4，请一定要熟悉 [vue-cli](https://cli.vuejs.org/) 的文档，它能解决你遇到的大部分问题
- 更规范的代码提交、版本演进和自动化发布，可以了解下

**请花一点时间阅读本文档，对了解该项目有帮助**

## 快速开始

TODO

## 开发规范

### 小步提交

在使用 git 管理代码时，提倡**小步提交**，即产生一个功能最小化，且能运行的代码，就 commit 到本地。在几次 commit 形成一个小功能后，就 push 到远程仓库。

好处：
- 在多人协作的情况下，能及时同步代码，产生冲突能提前发现
- 提高对代码的归纳总结能力，类似于语文中的划分段落，并归纳中心思想 :)

### 语义化提交

在小步提交的提出上，进一步书写**格式统一、描述准确**的 commit message，而不是随意书写：

``` bash
# 👎
git commit -m "登陆"
git commit -m "登陆失败显示错误提示"
git commit -m "打包"

# 👍
git commit -m "feat: 添加登陆页面"
git commit -m "fix: 登陆失败缺少错误提示"
git commit -m "chore(npm): 添加预览版本的打包命令"
```

好处：
- 统一格式，方便查阅
- 便于自动生产变更日志和版本号

为避免手写失误，该仓库已经使用 [commitizen](https://github.com/commitizen/cz-cli) 进行初始化，可以直接在命令行中体验交互式提交：

``` bash
# 方法 1
# 要先运行 `npm i -g commitizen` 全局安装 commitizen
git cz

# 方法 2
yarn commit # 或 npm run commit
```

### 分支管理

**私有项目和开源项目的侧重点不同，在分支管理上会有区别。**

#### 开源项目

该仓库使用的简单的 master + dev 模式，在 github 默认展示 master 分支，master 最后一次提交永远是最近一次版本发布，并部署到预览版时的代码。平时的开发都在 dev 分支。当在 dev 完成一段功能的开发后，再合并到 master 触发自动发布，流程如下：

``` bash
# ...在 dev 完成多次 commit 后
(dev) git push
(dev) git checkout master
(master) git merge dev # 将新代码合并到 master
(master) git push
# ...等待发布完成
(master) git pull # 发布的过程中可能会自动产生一些提交
(master) git checkout dev
(dev) git merge master
(dev) git push # 让 dev 与 master 保持一致
```

好处：
- 保证预览时的代码与 master 一致，不会和未发布的代码混淆

#### 私有项目

如果你是以该项目为模版的私有项目，直接在 master 开发，在必要的时候切 release 分支即可。

**如果是通过 `git clone` 下载该项目为模版，请本地的删除 `dev` 分支，因为这是未发布的代码。**

### 代码风格

TODO

## 文件结构

TODO

## 代码架构

TODO

## 调试

## 打包

## 部署

## 持续集成与部署

TODO
