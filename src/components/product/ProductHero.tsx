// src/components/product/ProductHero.tsx
import Image from "next/image";
import { ProductLine } from "@/types/product";

export function ProductHero({ product }: { product: ProductLine }) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="section lg:pr-4">
        <p className="meta">{product.productLine}</p>
        <h1>{product.localizedName ?? product.name}</h1>
        <p className="max-w-2xl">{product.overview}</p>
      </div>
      {product.heroImage ? (
        <div className="card flex items-center justify-center p-8">
          <Image
            src={product.heroImage}
            alt={`${product.name} hero image`}
            width={600}
            height={420}
            className="h-auto w-full max-w-[600px] object-contain"
          />
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white text-sm text-slate-400 md:h-60">
          Product image placeholder
        </div>
      )}
    </section>
  );
}
