import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/content/products";

export default function ProductsPage() {
  const products = getProducts();
  const arc = products.find((product) => product.slug === "arc") ?? products[0];

  return (
    <div className="space-y-24">
      <section className="card grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="section lg:pr-4">
          <div>
            <p className="meta">Thermal Safety &amp; Calorimetry</p>
            <h1 className="mt-2">热安全与量热仪器</h1>
          </div>
          <p className="max-w-2xl text-sm text-slate-600">
            Our thermal safety and calorimetry solutions support battery and
            chemical process safety research with reliable, controlled testing.
            The ARC series provides adiabatic data for early risk detection and
            engineering decision-making.
          </p>
        </div>
        {arc?.heroImage ? (
          <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-8">
            <Image
              src={arc.heroImage}
              alt="ARC series hero"
              width={580}
              height={400}
              className="h-auto w-full max-w-[580px] object-contain"
            />
          </div>
        ) : null}
      </section>

      <section className="space-y-8 border-t border-slate-100 pt-10">
        <div className="flex items-center justify-between gap-4">
          <h2>Series</h2>
        </div>

        {arc ? (
          <div className="card space-y-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white p-7 lg:w-2/5">
                <Image
                  src={arc.heroImage ?? "/images/products/arc/arc-hero.png"}
                  alt="ARC series"
                  width={480}
                  height={340}
                  className="h-auto w-full max-w-[480px] object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5 lg:pl-2">
                <div>
                  <p className="meta">{arc.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {arc.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {arc.shortDescription ?? arc.overview}
                  </p>
                </div>
                {arc.applications && arc.applications.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {arc.applications.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="tag"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
                <div>
                  <Link
                    href={`/products/${arc.slug}`}
                    className="btn btn-primary"
                  >
                    Explore ARC
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
