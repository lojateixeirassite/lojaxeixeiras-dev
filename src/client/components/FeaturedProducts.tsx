import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Camiseta Lisa Branca 100% Algodão",
    slug: "camiseta-lisa-branca",
    image: "/colecao-encomendas.jpg",
    price: 39.9,
    oldPrice: 49.9,
    badge: "Mais Vendido",
  },
  {
    id: 2,
    name: "Camisa Polo Premium Preta",
    slug: "camisa-polo-preta",
    image: "/colecao-uniformes.jpg",
    price: 69.9,
    oldPrice: 89.9,
    badge: "Premium",
  },
  {
    id: 3,
    name: "Camiseta Sublimática Branca",
    slug: "camiseta-sublimatica-branca",
    image: "/colecao-lisas.jpg",
    price: 34.9,
    oldPrice: 44.9,
    badge: "Personalização",
  },
  {
    id: 4,
    name: "Kit com 5 Camisetas",
    slug: "kit-5-camisetas",
    image: "/colecao-personalizadas2.jpg",
    price: 169.9,
    oldPrice: 199.9,
    badge: "Economize",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      aria-labelledby="featured-products-title"
      className="bg-[var(--color-bg-primary)] py-20"
    >
      <div className="container mx-auto px-4">
        <header className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-[var(--color-accent-light)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
              Produtos em destaque
            </span>

            <h2
              id="featured-products-title"
              className="mt-5 text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl"
            >
              Os produtos mais procurados da loja
            </h2>

            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
              Camisetas lisas, polos, sublimáticas e kits com excelente
              qualidade para varejo, empresas e revendedores.
            </p>
          </div>

          <Link
            href="/camisetas"
            className="inline-flex items-center font-semibold text-[var(--color-accent)] transition hover:opacity-80"
          >
            Ver todos os produtos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Link href={`/produto/${product.slug}`}>
                <div className="relative">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold text-[var(--color-text-light)]">
                    {product.badge}
                  </span>

                  <div className="aspect-square overflow-hidden bg-[var(--color-bg-secondary)]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  ))}

                  <span className="ml-2 text-sm text-[var(--color-text-muted)]">
                    (5.0)
                  </span>
                </div>

                <Link href={`/produto/${product.slug}`}>
                  <h3 className="line-clamp-2 text-lg font-semibold text-[var(--color-text-primary)] transition group-hover:text-[var(--color-accent)]">
                    {product.name}
                  </h3>
                </Link>

                <div className="mt-5">
                  <p className="text-sm text-[var(--color-text-muted)] line-through">
                    R$ {product.oldPrice.toFixed(2).replace(".", ",")}
                  </p>

                  <p className="text-3xl font-bold text-[var(--color-accent)]">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </p>

                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    ou até 6x sem juros
                  </p>
                </div>

                <Link
                  href={`/produto/${product.slug}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-accent)] px-5 py-3 font-semibold text-[var(--color-text-light)] transition hover:bg-[var(--color-accent-hover)]"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Comprar Agora
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}