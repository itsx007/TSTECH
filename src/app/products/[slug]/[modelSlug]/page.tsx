import Image from "next/image";
import { notFound } from "next/navigation";
import { getProducts } from "@/content/products";
import { modelToSlug } from "@/lib/modelSlug";
import { SpecTable } from "@/components/product/SpecTable";

const getKeySpecs = (specs: Record<string, string>) => {
  const preferred = [
    "温度范围",
    "压力范围",
    "温度分辨率",
    "灵敏度",
    "控制模式",
    "腔体尺寸",
    "精度",
  ];

  const selected = preferred
    .filter((key) => specs[key])
    .map((key) => [key, specs[key]] as const);

  if (selected.length >= 10) {
    return selected.slice(0, 10);
  }

  const remaining = Object.entries(specs).filter(
    ([key]) => !preferred.includes(key)
  );

  return [...selected, ...remaining.slice(0, 10 - selected.length)];
};

export const generateStaticParams = () =>
  getProducts().flatMap((product) =>
    product.models.map((model) => ({
      slug: product.slug,
      modelSlug: modelToSlug(model),
    }))
  );

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ slug: string; modelSlug: string }>;
}) {
  const { slug, modelSlug } = await params;
  const product = getProducts().find((item) => item.slug === slug);

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
    <div className="space-y-12">
      <section className="card grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="section">
          <p className="meta">{product.productLine}</p>
          <h1>{model.model}</h1>
          {model.summary ? <p className="max-w-2xl">{model.summary}</p> : null}
          <div className="flex flex-wrap gap-3">
            <a href="/contact" className="btn btn-primary">
              Contact Sales
            </a>
            <a href="/products" className="btn btn-secondary">
              Download Brochure
            </a>
          </div>
        </div>
        {model.image ? (
          <div className="card flex items-center justify-center p-6">
            <Image
              src={model.image}
              alt={`${model.model} image`}
              width={560}
              height={400}
              className="h-auto w-full max-w-[560px] object-contain"
            />
          </div>
        ) : null}
      </section>

      <section className="section border-t border-slate-100 pt-8">
        <h2>Key specifications</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {getKeySpecs(model.specifications).map(([label, value]) => (
            <div key={label} className="card p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {label}
              </p>
              <p className="mt-2 text-sm text-slate-700">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section border-t border-slate-100 pt-8">
        <h2>Specifications</h2>
        <SpecTable model={model} />
      </section>

      {model.features && model.features.length > 0 ? (
        <section className="section border-t border-slate-100 pt-8">
          <h2>Features</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-600">
            {model.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
