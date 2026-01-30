# Skills (Codex Workflow)

本目录用于 Codex 工作流：用“静态站技能 + UI 技能”的组合，快速生成一个可信、可上线的科研/工业产品官网前端。
目标是：先完成前端（SSG 静态网站 + 真实产品数据展示），后端（如 Spring Boot）后续再接。

---

## 1. Skill Map（职责边界）

### A) scientific-product-website-frontend（结构/实现层）
**负责：**
- Next.js App Router 项目结构
- 静态生成（SSG），`generateStaticParams` 等
- 路由与页面骨架：Home / Products / Product Detail / Services / About / Contact
- 数据来源：本地 TypeScript 或 Markdown 文件
- 不引入数据库、鉴权、后台管理

**不负责：**
- 具体视觉设计系统、组件美学细节（交给 UI skill）

> 参考：`skills/scientific-product-website-frontend/SKILL.md`

---

### B) scientific-product-ui（UI/设计系统层）
**负责：**
- 设计系统（色板、字体、间距、组件风格）
- 科研/工业仪器网站的可信 UI 规律：spec table、certifications、resources、downloads、support
- 页面模块与组件清单：Hero / ProductCard / SpecTable / Resources / Certifications / Contact Block
- Next.js 的实现注意事项（next/image、避免 CLS、CSS variables 等）

**不负责：**
- 路由结构、数据获取策略、静态生成策略（交给 frontend skill）

> 参考：`skills/scientific-product-ui/SKILL.md`

---

## 2. Golden Rules（必须遵守）

1) **禁止编造产品规格参数**
- 产品参数必须来自真实资料（例如 extracted-content / brochure 提取结果）
- 不确定的字段留空或标注 “TBD”，不要拍脑袋补齐

2) **阶段目标：前端静态官网**
- 不引入 Prisma / DB / 登录 / Admin
- 页面以内容展示为主，可少量交互（tabs/accordion），避免复杂业务逻辑

3) **ARC 系列建模规则**
- ARC 应被视为 **一个产品线（Product Line）**
- ARC-D9 / ARC-D20 / ARC-H60 / ARC-L120 应作为 **型号/变体（Models/Variants）**

---

## 3. Codex Execution Order（强制按顺序做）

> 先结构后 UI。不要一上来做漂亮组件，否则路由/数据会乱。

### Step 0 — 准备真实数据（Data First）
- 新建或维护：`src/content/products.ts`（或 `content/products/*.md`）
- 每个产品至少包含：name、category、overview、specifications（表格键值）
- ARC 系列用 `models[]` 表达不同型号规格

### Step 1 — 生成页面骨架（Frontend Skill）
让 Codex 只关注：
- 路由与页面：`/`, `/products`, `/products/[slug]`, `/services`, `/about`, `/contact`
- SSG：`generateStaticParams`，构建时生成产品详情页
- 从本地数据文件读取并渲染

### Step 2 — 套用设计系统与组件（UI Skill）
让 Codex 再做：
- 全局 tokens（CSS variables 或 Tailwind config）
- 组件抽象：Hero、SpecTable、ProductCard、Resources、Certifications、Contact
- 页面视觉一致性：间距、字体、按钮、表格、CTA

### Step 3 — 最小上线检查
- `npm run dev` 页面可访问
- `npm run build` 成功（静态生成）
- 产品详情页 spec table 可读
- mobile 无横向滚动
- CTA 与联系方式明显

---

## 4. Codex Prompt Templates（复制即用）

### Template A — 生成页面骨架（只用 frontend skill）
请使用 `skills/scientific-product-website-frontend/SKILL.md`。
不要引入数据库、鉴权、后台。
数据来自本地 `src/content/products.ts`（真实数据，不得编造）。
任务：实现页面与路由（Home/Products/ProductDetail/Services/About/Contact），并使用 SSG（generateStaticParams）预渲染所有产品页。
输出：按文件路径给出完整代码（新增/修改文件列表），并说明如何运行验证。

---

### Template B — UI 组件与设计系统（叠加 ui skill）
在已完成的路由与页面基础上，同时遵循：
- `skills/scientific-product-ui/SKILL.md`（设计系统、组件、布局）
- 不改变既有路由结构与数据模型
任务：抽象并实现 Hero、ProductCard、SpecTable、Resources、Certifications、ContactBlock 等组件，统一样式 tokens，优化排版与可读性（工业/科研风格）。
输出：按文件路径给出完整代码，并说明视觉变化点。

---

## 5. Optional: Future Backend (Spring Boot)
当需要接入后端时：
- 保持页面组件不依赖 DB
- 将 `getProducts()` 的实现从本地文件替换为请求 Spring Boot API（/api/products、/api/products/{slug}）
- 页面结构与 UI 组件无需推翻

---

## 6. Directory Layout (suggested)
skills/
  scientific-product-website-frontend/
    SKILL.md
  scientific-product-ui/
    SKILL.md
  README.md   (this file)
