import {
  Award,
  BadgeCheck,
  Factory,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Produção Própria",
    description:
      "Controlamos todo o processo de fabricação para garantir qualidade em cada peça.",
    icon: Factory,
  },
  {
    title: "100% Algodão",
    description:
      "Utilizamos malhas selecionadas, confortáveis e resistentes para maior durabilidade.",
    icon: Award,
  },
  {
    title: "Compra Segura",
    description:
      "Pagamento protegido e atendimento especializado durante todo o processo.",
    icon: ShieldCheck,
  },
  {
    title: "Entrega para Todo o Brasil",
    description:
      "Enviamos rapidamente para qualquer região do país com rastreamento.",
    icon: Truck,
  },
  {
    title: "Atacado e Varejo",
    description:
      "Atendemos desde uma única peça até grandes pedidos para empresas e revendedores.",
    icon: Users,
  },
  {
    title: "Qualidade Garantida",
    description:
      "Produtos desenvolvidos para oferecer excelente acabamento e longa vida útil.",
    icon: BadgeCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-title"
      className="bg-[var(--color-bg-secondary)] py-20"
    >
      <div className="container mx-auto px-4">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[var(--color-accent-light)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
            Nossos diferenciais
          </span>

          <h2
            id="why-choose-title"
            className="mt-5 text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl"
          >
            Por que comprar na Loja Teixeira's?
          </h2>

          <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">
            Trabalhamos para oferecer camisetas com excelente qualidade,
            preços competitivos e um atendimento que acompanha você do pedido
            até a entrega.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-accent-light)]">
                <Icon
                  size={30}
                  className="text-[var(--color-accent)]"
                />
              </div>

              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--color-text-secondary)]">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-10">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold text-[var(--color-accent)]">
                +10
              </h3>

              <p className="mt-2 text-[var(--color-text-secondary)]">
                Anos de experiência
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[var(--color-accent)]">
                +5 mil
              </h3>

              <p className="mt-2 text-[var(--color-text-secondary)]">
                Clientes atendidos
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[var(--color-accent)]">
                Todo
              </h3>

              <p className="mt-2 text-[var(--color-text-secondary)]">
                Brasil atendido
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[var(--color-accent)]">
                100%
              </h3>

              <p className="mt-2 text-[var(--color-text-secondary)]">
                Satisfação com qualidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}