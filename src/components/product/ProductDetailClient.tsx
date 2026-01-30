"use client";

import { useMemo, useState } from "react";
import { ProductLine } from "@/types/product";
import Link from "next/link";
import { ModelTabs } from "@/components/product/ModelTabs";
import { SpecTable } from "@/components/product/SpecTable";
import { modelToSlug } from "@/lib/modelSlug";

export function ProductDetailClient({ product }: { product: ProductLine }) {
  const defaultModel = useMemo(() => product.models[0], [product.models]);
  const [activeModel, setActiveModel] = useState(defaultModel);

  return (
    <section className="space-y-10">
      <div className="section">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2>Models</h2>
          <Link
            href={`/products/${product.slug}/${modelToSlug(activeModel)}`}
            className="btn btn-secondary"
          >
            View details
          </Link>
        </div>
        <ModelTabs
          models={product.models}
          activeModel={activeModel}
          onSelect={setActiveModel}
        />
      </div>

      <div className="section">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            {activeModel.model}
          </h3>
          {activeModel.summary ? (
            <p className="mt-1 text-sm text-slate-600">
              {activeModel.summary}
            </p>
          ) : null}
          {activeModel.sampleRange ? (
            <p className="mt-1 text-sm text-slate-600">
              Sample range: {activeModel.sampleRange}
            </p>
          ) : null}
        </div>
        <SpecTable model={activeModel} />
      </div>
    </section>
  );
}
