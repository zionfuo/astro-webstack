# Astro Webstack

WebStackPage 的 Astro 移植版。静态站，中文 `/cn/`、英文 `/en/`，根路径按浏览器语言跳转。

原项目：<https://github.com/WebStackPage/WebStackPage.github.io>

## 项目结构

```text
src/
  data/links.ts          全部分区与卡片，唯一内容数据源
  data/navigation.ts     侧栏分组 -> 分区 id 映射
  lib/i18n.ts            界面文案、站点 URL、语言路径
  layouts/MainLayout.astro  <head>、样式与脚本
  components/            LinkCard / LinkSection / Sidebar / Navbar / SiteFooter / HomePage / AboutPage
  pages/                 5 个路由入口，只做语言参数分发
  styles/site.css        组件补丁样式，由 Astro 打包
public/assets/           第三方 CSS / JS、图片
design/                  webstack_logos.sketch 设计源文件，不参与发布
```

## 维护内容

新增或修改网址只改 `src/data/links.ts`。`rows` 保留每行卡片的分组（避免版式变化）；
`titleZh` 是中文版分区标题，未配置时沿用英文标题；`zhOnly` 条目只在中文版显示；
`logo` 为 `null` 时渲染文字占位图标（原中文首页有 3 个站点缺少图标文件）。

侧栏菜单从同一份数据生成，锚点与页面分区 id 一致。

## 命令

| 命令 | 作用 |
| :--- | :--- |
| `npm install` | 安装依赖 |
| `npm run dev` | 本地开发，`localhost:4321` |
| `npm run build` | 构建到 `./dist/` |
| `npm run preview` | 预览构建产物 |
| `npm run check` | `astro check` 类型与模板检查 |
| `npm run lint` | ESLint（扁平配置） |
| `npm run format` | Prettier 格式化源码与配置 |

## 环境变量

复制 `.env.example` 为 `.env`。`PUBLIC_GA_ID`、`PUBLIC_BAIDU_HM_ID`、`PUBLIC_AD_CLIENT`
均为可选，留空则不加载任何第三方统计脚本。GA 只接受 `G-` 开头的 GA4 衡量 ID，
旧的 `UA-` 格式已停用。
