import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Building2,
  CheckCircle2,
  ClipboardList,
  Factory,
  Shirt,
} from "lucide-react";

const benefits = [
  "Pedido mínimo facilitado",
  "Preços exclusivos para atacado",
  "Produção própria",
  "Atendimento personalizado",
  "Entrega para todo o Brasil",
  "Orçamentos rápidos via WhatsApp",
];

export default function Wholesale() {
  return (
    <section
      aria-labelledby="wholesale-title"
      className="bg-[var(--color-bg-primary)] py-20"
    >
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)]">
          <div className="grid lg:grid-cols-2">
            {/* Conteúdo */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-accent-light)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
                <Building2 size={18} />
                Venda para Empresas e Revendedores
              </span>

              <h2
                id="wholesale-title"
                className="mt-6 text-3xl font-bold leading-tight text-[var(--color-text-primary)] md:text-5xl"
              >
                Compre no Atacado com Condições Especiais
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--color-text-secondary)]">
                Atendemos lojas, marcas, empresas, igrejas, academias e
                revendedores com preços diferenciados, produção própria e
                atendimento especializado para grandes volumes.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[var(--color-success)]"
                    />

                    <span className="text-[var(--color-text-secondary)]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/atacado"
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-8 py-4 font-semibold text-[var(--color-text-light)] transition hover:bg-[var(--color-accent-hover)]"
                >
                  Solicitar Orçamento

                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-8 py-4 font-semibold text-[var(--color-text-primary)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  Falar com um Especialista
                </Link>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-[var(--color-bg-secondary)] p-8 md:p-12">
              <div className="grid gap-6">
                <article className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent-light)]">
                    <BadgePercent
                      size={28}
                      className="text-[var(--color-accent)]"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    Descontos Progressivos
                  </h3>

                  <p className="mt-3 text-[var(--color-text-secondary)]">
                    Quanto maior o pedido, melhores são as condições comerciais.
                  </p>
                </article>

                <article className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent-light)]">
                    <Factory
                      size={28}
                      className="text-[var(--color-accent)]"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    Produção Própria
                  </h3>

                  <p className="mt-3 text-[var(--color-text-secondary)]">
                    Controle de qualidade em todas as etapas da fabricação.
                  </p>
                </article>

                <article className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent-light)]">
                    <ClipboardList
                      size={28}
                      className="text-[var(--color-accent)]"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    Orçamento Rápido
                  </h3>

                  <p className="mt-3 text-[var(--color-text-secondary)]">
                    Receba uma proposta personalizada para o seu projeto em
                    poucos minutos.
                  </p>
                </article>

                <article className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent-light)]">
                    <Shirt
                      size={28}
                      className="text-[var(--color-accent)]"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    Diversos Produtos
                  </h3>

                  <p className="mt-3 text-[var(--color-text-secondary)]">
                    Camisetas lisas, polos, sublimáticas, kits e personalizadas
                    disponíveis para grandes quantidades.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}