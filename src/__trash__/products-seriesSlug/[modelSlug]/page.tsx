import Image from "next/image";
import { notFound } from "next/navigation";
import { getProducts } from "@/content/products";
import { modelToSlug } from "@/lib/modelSlug";
import { SpecTable } from "@/components/product/SpecTable";

export const generateStaticParams = () =>
  getProducts().flatMap((product) =>
    product.models.map((model) => ({
      seriesSlug: product.slug,
      modelSlug: modelToSlug(model),
    }))
  );

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ seriesSlug: string; modelSlug: string }>;
}) {
  const { seriesSlug, modelSlug } = await params;
  const product = getProducts().find((item) => item.slug === seriesSlug);

  if (!product) {
    notFound();
  }

  const model = product.models.find(
    (item) => modelToSlug(item) === modelSlug
  );

  if (!model) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {product.productLine}
        </p>
        <h1>{model.model}</h1>
        {model.summary ? <p className="max-w-2xl">{model.summary}</p> : null}
        {model.image ? (
          <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-4">
            <Image
              src={model.image}
              alt={`${model.model} image`}
              width={520}
              height={360}
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>
        ) : null}
      </section>

      <section className="space-y-3">
        <h2>Specifications</h2>
        <SpecTable model={model} />
      </section>

      {model.features && model.features.length > 0 ? (
        <section className="space-y-3">
          <h2>Features</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
            {model.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
