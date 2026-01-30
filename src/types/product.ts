/**
 * =========================
 * 基础类型
 * =========================
 */

export type ImagePath = string; // e.g. "/images/products/arc/hero.png"

export type KeyMetric = {
  label: string;     // e.g. "温度范围"
  value: string;     // e.g. "-40 ~ 550"
  unit?: string;     // e.g. "°C"
};

export type SpecificationItem = {
  name: string;      // e.g. "最大压力"
  value: string;     // e.g. "200"
  unit?: string;     // e.g. "bar"
};

export type SpecificationGroup = {
  group: string;                 // e.g. "温度性能"
  items: SpecificationItem[];
};

export type ResourceType =
  | "datasheet"
  | "brochure"
  | "manual"
  | "whitepaper"
  | "video";

export type Resource = {
  type: ResourceType;
  title: string;
  file: string;      // download path
  size?: string;     // e.g. "3.2 MB"
};

export type CTA = {
  label: string;
  link: string;
};

/**
 * =========================
 * 型号（ARC-D9 / D20 / H60 / L120）
 * =========================
 */

export type ProductModel = {
  model: string;              // "ARC-D9"
  summary: string;            // 一句话型号定位
  image?: ImagePath;          // "/images/products/arc/arc-d9.png"

  sampleRange?: string;       // "50 mAh – 5 Ah"

  specifications: Record<
    string,
    string
  >;

  features?: string[];        // 型号独有特性
};

/**
 * =========================
 * 产品线（ARC）
 * =========================
 */

export type ProductLine = {
  id: string;                 // "arc"
  slug: string;               // "arc"
  name: string;               // "Accelerating Rate Calorimeter"
  localizedName?: string;     // "ARC 加速量热仪"

  category: string;           // "Thermal Safety & Calorimetry"
  productLine: string;        // "ARC Series"

  shortDescription?: string;  // 卡片用
  overview: string;           // 详情页主描述

  heroImage?: ImagePath;
  gallery?: ImagePath[];

  highlights?: Array<{
    title: string;
    description: string;
  }>;

  applications?: string[];

  keyMetrics?: KeyMetric[];

  commonFeatures?: string[];  // 所有型号共有特性

  models: ProductModel[];

  specTable?: SpecificationGroup[];

  standards?: string[];       // ASTM / UL / GB 等

  resources?: Resource[];

  services?: string[];

  cta?: {
    primary?: CTA;
    secondary?: CTA;
  };
};