import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/content/products";
import { modelToSlug } from "@/lib/modelSlug";

export const generateStaticParams = () =>
  getProducts().map((product) => ({ slug: product.slug }));

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-16">
      <section className="card grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="section">
          <p className="meta">{product.productLine}</p>
          <h1>{product.localizedName ?? product.name}</h1>
          <p className="max-w-2xl text-sm text-slate-600">
            {product.overview}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#models" className="btn btn-primary">
              Explore Models
            </Link>
            <Link href="/products" className="btn btn-secondary">
              Back to Product Center
            </Link>
          </div>
        </div>
        {product.heroImage ? (
          <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-8">
            <Image
              src={product.heroImage}
              alt={`${product.name} hero image`}
              width={600}
              height={420}
              className="h-auto w-full max-w-[600px] object-contain"
            />
          </div>
        ) : null}
      </section>

      {product.applications && product.applications.length > 0 ? (
        <section className="section border-t border-slate-100 pt-8">
          <h2>Applications</h2>
          <ul className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            {product.applications.map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="section border-t border-slate-100 pt-8" id="models">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2>Models</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {product.models.map((model) => {
            const highlights = model.features?.slice(0, 3) ?? [];
            return (
              <div key={model.model} className="card">
                <div className="flex items-center justify-center rounded-md border border-slate-200 bg-white p-5">
                  {model.image ? (
                    <Image
                      src={model.image}
                      alt={`${model.model} image`}
                      width={240}
                      height={180}
                      className="h-auto w-full max-w-[240px] object-contain"
                    />
                  ) : null}
                </div>
                <div className="mt-3 space-y-2">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {model.model}
                  </h3>
                  {model.summary ? (
                    <p className="text-xs text-slate-600">{model.summary}</p>
                  ) : null}
                  {highlights.length > 0 ? (
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      {highlights.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  ) : null}
                  <Link
                    href={`/products/${product.slug}/${modelToSlug(model)}`}
                    className="btn-link text-xs"
                  >
                    View details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
