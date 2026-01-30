// src/components/product/ModelTabs.tsx
"use client";

import { ProductModel } from "@/types/product";

export function ModelTabs({
  models,
  activeModel,
  onSelect,
}: {
  models: ProductModel[];
  activeModel: ProductModel;
  onSelect: (model: ProductModel) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {models.map((model) => {
        const isActive = model.model === activeModel.model;
        return (
          <button
            key={model.model}
            type="button"
            onClick={() => onSelect(model)}
            aria-pressed={isActive}
            className={`tab ${
              isActive
                ? "border-slate-900 text-slate-900"
                : "border-slate-300 text-slate-600"
            }`}
          >
            {model.model}
          </button>
        );
      })}
    </div>
  );
}
