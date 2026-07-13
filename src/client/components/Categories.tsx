import Link from "next/link";
import {
  ChevronRight,
  Package,
  Shirt,
  ShoppingBag,
  Store,
  BrushCleaning,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Camisetas Lisas",
    description:
      "Modelos 100% algodão para uso diário, uniformes, eventos e personalização.",
    href: "/camisetas",
    icon: Shirt,
  },
  {
    title: "Camisas Polo",
    description:
      "Polos masculinas e femininas com acabamento premium para empresas e varejo.",
    href: "/camisas-polo",
    icon: ShoppingBag,
  },
  {
    title: "Sublimáticas",
    description:
      "Camisetas prontas para sublimação com excelente qualidade de impressão.",
    href: "/camisetas-sublimaticas",
    icon: Sparkles,
  },
  {
    title: "Kits",
    description:
      "Economize comprando kits de camisetas para toda a família ou empresa.",
    href: "/kits",
    icon: Package,
  },
  {
    title: "Personalizadas",
    description:
      "Silk, DTF, Bordado e Sublimação para empresas, igrejas e eventos.",
    href: "/personalizadas",
    icon: BrushCleaning,
  },
  {
    title: "Atacado",
    description:
      "Condições especiais para revendedores, lojas, marcas e confecções.",
    href: "/atacado",
    icon: Store,
  },
];

export default function Categories() {
  return (
    <section
      aria-labelledby="categories-title"
      className="bg-[var(--color-bg-secondary)] py-20"
    >
      <div className="container mx-auto px-4">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[var(--color-accent-light)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
            Explore nossas categorias
          </span>

          <h2
            id="categories-title"
            className="mt-5 text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl"
          >
            Encontre a camiseta ideal para sua necessidade
          </h2>

          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Trabalhamos com camisetas para varejo, atacado, empresas,
            personalização e revenda, sempre com excelente qualidade e ótimo
            custo-benefício.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              aria-label={`Conheça nossa categoria ${title}`}
              className="group flex h-full flex-col rounded-3xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-accent)] hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-accent-light)]">
                <Icon
                  size={32}
                  className="text-[var(--color-accent)]"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
                {title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[var(--color-text-secondary)]">
                {description}
              </p>

              <span className="mt-8 inline-flex items-center font-semibold text-[var(--color-accent)]">
                Ver categoria

                <ChevronRight
                  size={20}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}