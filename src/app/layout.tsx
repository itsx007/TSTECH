import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TSTech Scientific Instruments",
  description: "Scientific instrument solutions with a focus on thermal safety.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white text-slate-900">
          <header className="border-b border-slate-200">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-lg font-semibold">
                TSTech
              </Link>
              <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
                <Link href="/products" className="hover:text-slate-900">
                  Products
                </Link>
                <Link href="/services" className="hover:text-slate-900">
                  Services
                </Link>
                <Link href="/about" className="hover:text-slate-900">
                  About
                </Link>
                <Link href="/contact" className="hover:text-slate-900">
                  Contact
                </Link>
              </nav>
            </div>
          </header>
          <main className="page-container py-10">
            {children}
          </main>
          <footer className="border-t border-slate-200">
            <div className="page-container py-6 text-sm text-slate-500">
              TSTech Scientific Instruments
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
