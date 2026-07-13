import Link from "next/link";
import { ArrowRight, MessageCircle, Shirt } from "lucide-react";

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-title"
      className="bg-[var(--color-accent)] py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-bg-card)]/15">
            <Shirt
              size={40}
              className="text-[var(--color-text-light)]"
            />
          </div>

          <h2
            id="cta-title"
            className="mt-8 text-4xl font-bold leading-tight text-[var(--color-text-light)] md:text-5xl"
          >
            Encontre a camiseta ideal para o seu projeto
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]/90">
            Seja para uso pessoal, empresas, igrejas, eventos ou revenda,
            oferecemos camisetas lisas, polos, sublimáticas e personalizadas
            com qualidade profissional, preços competitivos e entrega para todo
            o Brasil.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/camisetas"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-bg-card)] px-8 py-4 font-semibold text-[var(--color-accent)] transition hover:opacity-90"
            >
              Comprar Camisetas

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/atacado"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--color-text-light)] px-8 py-4 font-semibold text-[var(--color-text-light)] transition hover:bg-[var(--color-bg-card)]/10"
            >
              Solicitar Orçamento
            </Link>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--color-text-light)] px-8 py-4 font-semibold text-[var(--color-text-light)] transition hover:bg-[var(--color-bg-card)]/10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar Conosco
            </Link>
          </div>

          <div className="mt-12 grid gap-6 border-t border-[var(--color-text-light)]/20 pt-10 text-center sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold text-[var(--color-text-light)]">
                100%
              </h3>

              <p className="mt-2 text-[var(--color-text-light)]/80">
                Algodão Premium
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[var(--color-text-light)]">
                Brasil
              </h3>

              <p className="mt-2 text-[var(--color-text-light)]/80">
                Entrega Nacional
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[var(--color-text-light)]">
                Atacado
              </h3>

              <p className="mt-2 text-[var(--color-text-light)]/80">
                e Varejo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}