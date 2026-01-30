import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/content/products";

export default function Home() {
  const products = getProducts();
  const featured = products[0];

  return (
    <div className="space-y-24">
      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="section lg:pr-6">
          <p className="meta hero-animate hero-animate-1">
            Scientific Instruments
          </p>
          <h1 className="hero-animate hero-animate-2">
            Thermal safety and calorimetric solutions for modern laboratories.
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 hero-animate hero-animate-3">
            TSTech focuses on accurate, stable, and safe instrumentation for
            thermal analysis. Explore our ARC accelerating rate calorimeter line
            and supporting services.
          </p>
          <div className="flex flex-wrap gap-3 hero-animate hero-animate-4">
            <Link href="/products" className="btn btn-primary btn-hover-lift cta-arrow">
              View Products
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-hover-lift">
              Contact Sales
            </Link>
          </div>
        </div>
        <div className="flex items-start justify-center rounded-lg border border-slate-200 bg-white p-10 lg:justify-end hero-image-animate">
          <Image
            src={featured.heroImage ?? "/images/products/arc/arc-hero.png"}
            alt="ARC Accelerating Rate Calorimeter"
            width={640}
            height={440}
            className="h-auto w-full max-w-[640px] object-contain"
            priority
          />
        </div>
      </section>

      <section className="card space-y-8 border-t border-slate-100 pt-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="meta">Featured Product Line</p>
            <h2>{featured.name}</h2>
            <p className="mt-2 text-sm text-slate-600">
              {featured.category}
            </p>
          </div>
          <Link href="/products" className="btn btn-secondary">
            View Products
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-4">
            <Image
              src={featured.heroImage ?? "/images/products/arc/arc-hero.png"}
              alt={`${featured.name} thumbnail`}
              width={420}
              height={300}
              className="h-auto w-full max-w-[420px] object-contain"
            />
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-800">Highlights</p>
            <ul className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
              {featured.highlights
                ? featured.highlights.slice(0, 3).map((item) => (
                    <li key={item.title} className="tag">
                      {item.title}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
