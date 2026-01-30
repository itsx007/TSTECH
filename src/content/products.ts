import { ProductLine } from "@/types/product";
export const products: ProductLine[] = [
  {
    "id": "arc",
    "slug": "arc",
    "name": "Accelerating Rate Calorimeter",
    "localizedName": "ARC 加速量热仪",
    "productLine": "ARC Series",
    "category": "Thermal Safety & Calorimetry",
  
    "overview": "ARC 加速量热仪是一种在安全、受控条件下获取绝热量热数据的先进仪器，广泛用于电池热安全评估、化工过程安全研究以及材料热稳定性分析。",
    heroImage: "/images/products/arc/arc-hero.png",
    gallery: [
      "/images/products/arc/arc-d9.png",
      "/images/products/arc/arc-d20.png",
      "/images/products/arc/arc-h60.png",
      "/images/products/arc/arc-l120.png"
    ],
    "applications": [
      "锂离子电池热安全评估",
      "电池热失控风险分析",
      "化工过程安全研究",
      "材料热稳定性测试"
    ],
  
    "commonFeatures": [
      "绝热测试条件",
      "高灵敏度放热检测",
      "支持 Heat-Wait-Seek / Ramping / Isothermal 控制模式",
      "兼容多种电池和化学样品",
      "支持气体采集与联用分析"
    ],
  
    "models": [
      {
        "model": "ARC-D9",
        "summary": "适用于小型样品和基础热安全研究的紧凑型 ARC 系统。",
        "sampleRange": "50 mAh – 5 Ah",
        "specifications": {
          "腔体尺寸": "Φ9 cm × 10 cm",
          "温度范围": "-40 – 550 °C",
          "压力范围": "0 – 200 bar",
          "温度分辨率": "0.001 °C",
          "精度": "Precision <0.2%, Accuracy 0.7%",
          "灵敏度": "0.01 °C/min",
          "控制模式": "Heat-Wait-Seek / Ramping / Isothermal"
        },
        image: "/images/products/arc/arc-d9.png",
        "features": [
          "搅拌功能",
          "气体采集",
          "低温模块",
          "注入功能",
          "GC-MS 在线联用"
        ]
      },
  
      {
        "model": "ARC-D20",
        "summary": "支持更大样品体积和多点温度测量的中型 ARC 系统。",
        "sampleRange": "100 mAh – 20 Ah",
        "specifications": {
          "腔体尺寸": "Φ20 cm × 25 cm",
          "温度范围": "-30 – 350 °C",
          "压力范围": "0 – 200 bar",
          "温度分辨率": "0.001 °C",
          "精度": "Precision <0.2%, Accuracy 0.7%",
          "灵敏度": "0.01 °C/min",
          "控制模式": "Heat-Wait-Seek / Ramping / Isothermal"
        },
        image: "/images/products/arc/arc-d20.png",
        "features": [
          "多点热电偶",
          "比热容测量",
          "充放电测试",
          "气体采集",
          "GC-MS 在线联用"
        ]
      },
  
      {
        "model": "ARC-H60",
        "summary": "适用于大容量电池和模块级测试的高容量 ARC 系统。",
        "sampleRange": "500 mAh – 400 Ah",
        "specifications": {
          "腔体尺寸": "Φ40 cm × 60 cm",
          "温度范围": "-30 – 315 °C",
          "压力范围": "0 – 150 bar",
          "温度分辨率": "0.001 °C",
          "精度": "Precision <0.2%, Accuracy 0.7%",
          "灵敏度": "0.02 °C/min",
          "控制模式": "Heat-Wait-Seek / Ramping / Isothermal"
        },
        image: "/images/products/arc/arc-h60.png",
        "features": [
          "多点热电偶",
          "比热容测量",
          "充放电测试",
          "针刺测试",
          "光学 / 红外相机",
          "电池加热模块",
          "无损内部压力检测"
        ]
      },
  
      {
        "model": "ARC-L120",
        "summary": "面向大型电池和模组级安全测试的超大容量 ARC 系统。",
        "sampleRange": "20 Ah – 600 Ah",
        "specifications": {
          "腔体尺寸": "50 cm (W) × 44 cm (D) × 120 cm (L)",
          "温度范围": "-30 – 315 °C",
          "压力范围": "0 – 150 bar",
          "温度分辨率": "0.001 °C",
          "精度": "Precision <0.2%, Accuracy 0.7%",
          "灵敏度": "0.02 °C/min",
          "控制模式": "Heat-Wait-Seek / Ramping / Isothermal"
        },
        image: "/images/products/arc/arc-l120.png",
        "features": [
          "多点热电偶",
          "比热容测量",
          "充放电测试",
          "针刺测试",
          "光学 / 红外相机",
          "电池加热模块",
          "无损内部压力检测"
        ]
      }
    ]
  }
  ,
];

export const getProducts = () => products;

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

