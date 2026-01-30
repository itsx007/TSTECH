# 项目结构与框架概览

## 技术栈
- Next.js 16 (App Router，Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4 (PostCSS)
- 本地静态数据源（src/content/products.ts）

## 目录结构（关键部分）
```
src/
  app/
    layout.tsx
    globals.css
    page.tsx
    products/
      page.tsx
      [slug]/page.tsx
      [slug]/[modelSlug]/page.tsx
    services/page.tsx
    about/page.tsx
    contact/page.tsx
  components/
    product/
      ProductHero.tsx
      ProductDetailClient.tsx
      ModelTabs.tsx
      SpecTable.tsx
  content/
    products.ts
  lib/
    modelSlug.ts
  types/
    product.ts
public/
  images/products/arc/*.png
```

## 路由与信息架构（IA）
- /: 首页
- /products: 产品系列列表
- /products/[slug]: 系列详情（当前 ARC）
- /products/[slug]/[modelSlug]: 型号详情
- /services: 服务
- /about: 关于
- /contact: 联系

说明：
- 系列页与型号页均使用 SSG（generateStaticParams）。
- 数据来自本地文件，无后端/数据库。

## 数据模型（保持不变）
- 类型定义：`src/types/product.ts`
- ProductLine / ProductModel 已固定。
- `specifications` 使用 `Record<string, string>`。
- ARC 作为一个产品线，包含多个型号。

## 组件职责
- `ProductHero`: 系列页头信息 + hero 图片（若有）。
- `ProductDetailClient`: 客户端包装层，负责型号切换与详情展示。
- `ModelTabs`: 型号切换 Tab（client component）。
- `SpecTable`: 渲染型号 specifications 表格。

## 样式与布局
- 全局基础样式在 `src/app/globals.css`。
- 统一容器类：`.page-container`。
- 卡片基础样式：`.card`。

## 常用脚本
- `npm run dev`: 开发模式
- `npm run build`: 构建
- `npm run start`: 生产启动
- `npm run lint`: ESLint

## 备注
- `public/images/products/arc/` 存放 ARC 系列图片，引用时不要加 `public/` 前缀。
