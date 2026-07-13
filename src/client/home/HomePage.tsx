// src/client/home/HomePage.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/core/lib/prisma";
import { siteConfig } from "@/client/config/site.config";
import { Building2, Church, Shirt, BadgeCheck, Palette, Users } from "lucide-react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Wholesale from "../components/Wholesale";
import FinalCta from "../components/FinalCta";

export default async function HomePage() {
  const categories = await prisma.blogCategory.findMany({
    where: { showOnHome: true },
    orderBy: { order: "asc" },
    take: 3,
  });

  return (
    <main
      className="w-full overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-secondary)",
        color: "var(--color-text-primary)",
      }}
    >
      {/* HERO */}
      <Hero />

      {/* CATEGORIAS */}
      <Categories />

      {/* PRODUTOS EM DESTAQUE */}
      <FeaturedProducts />

      {/* NOSSAS SOLUÇÕES */}
      <WhyChooseUs />

      {/* BENEFÍCIOS PRINCIPAIS */}
      <Wholesale />

      {/* CTA FINAL */}
      <FinalCta />

      {/* BLOG */}
      {categories.length > 0 && (
        <section
          className="py-24 px-6"
          style={{
            backgroundColor: "var(--color-bg-card)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-10">
              <div className="text-left">
                <p
                  className="uppercase tracking-[0.25em] text-xs mb-3"
                  style={{
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Inspirações
                </p>

                <h2
                  className="text-3xl md:text-4xl"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-logo)",
                  }}
                >
                  Dicas, ideias e novidades
                </h2>
              </div>

              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-heading)",
                  backgroundColor: "var(--color-bg-primary)",
                }}
              >
                Ver todos os artigos
                <span>→</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blog/categoria/${cat.slug}`}
                  className="group rounded-[24px] overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-bg-primary)",
                    boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
                    border: "1px solid color-mix(in srgb, var(--color-border) 65%, white)",
                  }}
                >
                  <div
                    className="h-48 flex items-end p-5"
                    style={{
                      background:
                        "linear-gradient(180deg, color-mix(in srgb, var(--color-accent) 35%, white), color-mix(in srgb, var(--color-accent-light) 55%, white))",
                    }}
                  >
                    <span
                      className="uppercase text-[11px] tracking-[0.25em] px-3 py-1 rounded-full bg-white/80"
                      style={{
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      CM Teixeiras Blog
                    </span>
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-xl mb-2"
                      style={{
                        color: "var(--color-text-primary)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {cat.name}
                    </h3>

                    <p
                      className="text-sm leading-7 mb-4"
                      style={{
                        color: "var(--color-text-secondary)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {cat.description ??
                        "Confira conteúdos sobre personalização, uniformes e tendências para eventos e grupos."}
                    </p>

                    <p
                      className="mt-2 text-xs uppercase tracking-[0.18em]"
                      style={{
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      Ler artigos →
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 md:hidden flex justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] transition"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-heading)",
                  backgroundColor: "var(--color-bg-primary)",
                }}
              >
                Ver todos os artigos
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}


    </main>
  );
}