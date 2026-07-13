import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Shirt,
  Truck,
} from "lucide-react";

const categories = [
  {
    name: "Camisetas Lisas",
    href: "/camisetas",
  },
  {
    name: "Polos",
    href: "/camisas-polo",
  },
  {
    name: "Sublimáticas",
    href: "/camisetas-sublimaticas",
  },
  {
    name: "Kits",
    href: "/kits",
  },
  {
    name: "Personalizadas",
    href: "/personalizadas",
  },
];

const indicators = [
  {
    title: "100% Algodão",
    icon: Shirt,
  },
  {
    title: "Produção Própria",
    icon: Factory,
  },
  {
    title: "Entrega para Todo o Brasil",
    icon: Truck,
  },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[var(--color-bg-primary)]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-secondary)] via-[var(--color-bg-primary)] to-[var(--color-accent-light)] opacity-60" />

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Conteúdo */}
          <div>
            <span className="inline-flex items-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-accent-light)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
              Loja especializada em camisetas
            </span>

            <h1
              id="hero-title"
              className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-4xl"
            >
              Camisetas Lisas de Algodão,
              <span className="block text-[var(--color-accent)]">
                Camisas Polo e Sublimáticas
              </span>
              com Qualidade Profissional
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-secondary)]">
              Venda de camisetas 100% algodão, polos, sublimáticas, kits e
              personalizadas para pessoa física, empresas, igrejas,
              eventos e revendedores com entrega para todo o Brasil.
            </p>

            {/* Botões */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/camisetas"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-7 py-4 font-semibold text-[var(--color-text-light)] transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                Comprar Camisetas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/atacado"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-7 py-4 font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Comprar no Atacado
              </Link>
            </div>

            {/* Indicadores */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {indicators.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-4 shadow-sm"
                >
                  <Icon className="h-6 w-6 text-[var(--color-accent)]" />

                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            {/* Categorias */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Categorias
              </p>

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)]"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] shadow-xl">
              <Image
                src="/hero-cmteixeiras.jpg"
                alt="Camisetas lisas, camisas polo, camisetas sublimáticas e personalizadas"
                width={900}
                height={900}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Card Flutuante */}
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5 shadow-xl">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-10 w-10 text-[var(--color-success)]" />

                <div>
                  <p className="font-bold text-[var(--color-text-primary)]">
                    Produção Própria
                  </p>

                  <p className="text-sm text-[var(--color-text-muted)]">
                    Qualidade garantida em cada peça.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}