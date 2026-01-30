# TSTech 项目文件说明

本 README 汇总了仓库中的目录结构与文件用途，重点说明每个文件在当前项目中承担的职责与内容。

## 项目概览
- 技术栈：Next.js App Router + React 19 + TypeScript + Tailwind CSS v4（通过 PostCSS）
- 数据来源：本地静态文件 `src/content/products.ts`
- 目标：静态化科学仪器产品官网，包含产品系列、型号详情与企业信息页面

## 目录结构（含关键目录说明）
```
.
├─ .git/                         # Git 元数据
├─ .idea/                        # JetBrains IDE 配置
├─ .next/                        # Next.js 构建/缓存产物（本地生成）
├─ .vscode/                      # VS Code 配置
├─ node_modules/                 # 依赖安装目录
├─ public/                       # 静态资源
├─ skills/                       # Codex 工作流与技能说明
├─ src/                          # 应用源码
├─ .gitignore
├─ feedback.txt
├─ next-env.d.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ PROJECT_OVERVIEW.md
├─ tsconfig.json
└─ TSTech Brochure.pdf
```

## 文件逐一说明

### 根目录文件
- `.gitignore`：Git 忽略规则，排除 `node_modules`、构建产物、日志、环境变量文件等。
- `feedback.txt`：变更说明与验收步骤（描述首页 Hero 动效、CTA 悬停效果的预期表现与验证方式）。
- `next-env.d.ts`：Next.js 自动生成的类型声明引用文件，不应手动编辑。
- `package.json`：项目元信息与脚本（`dev/build/start/lint`）以及依赖清单（Next 16 canary、React 19、Tailwind v4 等）。
- `package-lock.json`：npm 依赖锁定文件，固定依赖版本与解析结果，保障安装一致性。
- `postcss.config.mjs`：PostCSS 配置，启用 `@tailwindcss/postcss` 插件。
- `PROJECT_OVERVIEW.md`：中文项目结构与职责说明（路由、组件分工、数据模型、样式约定等）。
- `tsconfig.json`：TypeScript 编译配置（ES2017、严格模式、App Router 相关 types、路径别名 `@/*`）。
- `TSTech Brochure.pdf`：产品宣传册/资料 PDF（用于下载或展示的静态资源）。

### public/ 静态资源
- `public/file.svg`：默认文件图标（可用于下载或资源列表占位）。
- `public/globe.svg`：地球图标（可用于全球化/联系信息等区域）。
- `public/next.svg`：Next.js 默认 logo。
- `public/vercel.svg`：Vercel 默认 logo。
- `public/vite.svg`：Vite 默认 logo（可能是初始模板遗留资源）。
- `public/window.svg`：窗口图标（通用装饰性 SVG）。
- `public/images/products/arc/arc-hero.png`：ARC 系列主视觉图（首页/系列页 Hero）。
- `public/images/products/arc/arc-d9.png`：ARC-D9 型号图片。
- `public/images/products/arc/arc-d20.png`：ARC-D20 型号图片。
- `public/images/products/arc/arc-h60.png`：ARC-H60 型号图片。
- `public/images/products/arc/arc-l120.png`：ARC-L120 型号图片。

### src/app 路由与页面
- `src/app/layout.tsx`：全站根布局，定义字体（Geist）、全局 header/nav/footer，以及 `page-container` 主体布局。
- `src/app/globals.css`：Tailwind v4 全局样式与组件类封装（`page-container`、`card`、`btn`、`tab` 等），并定义首页 Hero 动效关键帧与 CTA 悬停效果。
- `src/app/page.tsx`：首页（Hero + Featured Product），从 `getProducts()` 取首个产品作为主展示，包含 CTA 与主图。
- `src/app/products/page.tsx`：产品中心列表页（聚焦 ARC 系列），展示系列简介、应用标签与跳转 CTA。
- `src/app/products/[slug]/page.tsx`：产品系列详情页（SSG），根据 `slug` 查找产品线并渲染概览、应用与型号卡片列表。
- `src/app/products/[slug]/[modelSlug]/page.tsx`：型号详情页（SSG），展示型号核心规格卡片、规格表与特性列表。
- `src/app/services/page.tsx`：服务页，列举安装调试、维护校准、应用支持、培训等服务卡片。
- `src/app/about/page.tsx`：关于页，简要介绍公司与使命。
- `src/app/contact/page.tsx`：联系页，包含公司信息与基础表单（静态，不含提交逻辑）。
- `src/app/favicon.ico`：站点图标（浏览器标签页显示）。

### src/components 组件
- `src/components/product/ProductHero.tsx`：产品系列页的 Hero 区块（标题/简介 + 图片；无图则显示占位）。
- `src/components/product/ProductDetailClient.tsx`：型号切换与规格展示的客户端组件（管理当前型号 state，提供“查看详情”跳转）。
- `src/components/product/ModelTabs.tsx`：型号切换 Tabs 组件，渲染按钮并标记当前激活态。
- `src/components/product/SpecTable.tsx`：规格表组件，遍历 `specifications` 字典并输出表格行。

### src/content 数据源
- `src/content/products.ts`：静态产品数据源（ARC 系列 + 型号规格/特性/图片路径），并提供 `getProducts` / `getProductBySlug` 读取函数。

### src/lib 工具
- `src/lib/modelSlug.ts`：型号转 slug 的规范化函数（小写化、替换空格与非法字符、去重连字符）。

### src/types 类型定义
- `src/types/product.ts`：产品线与型号的 TypeScript 类型定义（规格、资源、CTA、应用等数据结构）。
- `src/types/categories.ts`：产品分类类型定义（包含分类名、描述、系列 slug 列表等）。

### src/__trash__ 备用/草稿
- `src/__trash__/products-seriesSlug/[modelSlug]/page.tsx`：旧版/试验用的型号详情页路由实现（参数名为 `seriesSlug`，逻辑与现行页面相似，暂未接入路由）。

### skills/ Codex 工作流
- `skills/README.md`：Codex 技能工作流说明与执行顺序（包含 “scientific-product-website-frontend” 与 “scientific-product-ui” 的职责划分）。
- `skills/scientific-product-website-frontend/SKILL.md`：静态科学产品官网前端技能说明（SSG、数据规则、页面结构）。
- `skills/scientific-product-ui/SKILL.md`：科学产品 UI/UX 设计规范（色板、排版、组件、信息架构等）。

## 备注
- `src/types/product.ts`、`src/types/categories.ts` 与 `skills/README.md` 中存在部分中文注释字符编码异常（显示为乱码），但不影响 TypeScript 类型与实际运行逻辑。
- `.next/` 与 `node_modules/` 为本地生成目录，可从 Git 忽略中移除后重新生成。