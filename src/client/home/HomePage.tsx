// src/client/home/HomePage.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/core/lib/prisma";
import { siteConfig } from "@/client/config/site.config";
import { Building2, Church, Shirt, BadgeCheck, Palette, Users } from "lucide-react";

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
      <section
        className="w-full overflow-hidden"
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-[118px] md:pt-[138px] pb-12 md:pb-20">
          <div className="grid lg:grid-cols-2 items-center gap-10 md:gap-14">
            <div className="order-2 lg:order-1 max-w-[620px]">
              <p
                className="uppercase tracking-[0.28em] text-[10px] sm:text-xs mb-3 md:mb-4"
                style={{
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Camisas personalizadas e lisas
              </p>

              <h1
                className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] leading-[1.02] mb-4 md:mb-5"
                style={{
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-logo)",
                }}
              >
                Uniformes e camisetas personalizadas para empresas, igrejas e eventos
              </h1>

              <p
                className="text-[0.95rem] sm:text-base md:text-lg leading-7 max-w-[36rem] mb-6 md:mb-8"
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Produzimos camisas personalizadas com qualidade, conforto e acabamento
                profissional para equipes, ministérios, congressos, ações promocionais
                e eventos especiais.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
                <Link
                  href="/loja"
                  className="inline-flex items-center justify-center px-7 md:px-8 py-3.5 md:py-4 rounded-full text-[12px] md:text-sm uppercase tracking-[0.16em] transition hover:opacity-90"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-text-light)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Ver coleção
                </Link>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMensagem)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 md:px-8 py-3.5 md:py-4 rounded-full text-[12px] md:text-sm uppercase tracking-[0.16em] transition"
                  style={{
                    backgroundColor: "var(--color-success)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-light)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Fazer orçamento
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-1">
                {[
                  {
                    title: "Empresas",
                    desc: "Uniformes com identidade visual",
                    icon: Building2,
                  },
                  {
                    title: "Igrejas",
                    desc: "Camisas para grupos e congressos",
                    icon: Church,
                  },
                  {
                    title: "Eventos",
                    desc: "Produção para equipes e ações",
                    icon: Users,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--color-accent-light) 28%, white)",
                          color: "var(--color-accent)",
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <p
                          className="text-[13px] md:text-sm leading-tight mb-1"
                          style={{
                            color: "var(--color-text-primary)",
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="text-[12px] md:text-xs leading-5"
                          style={{
                            color: "var(--color-text-secondary)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[540px]">
                <div className="absolute inset-0 lg:left-[8%] rounded-[24px] md:rounded-[34px] overflow-hidden">
                  <Image
                    src="/hero-cmteixeiras.jpg"
                    alt="Camisa personalizada CM Teixeiras"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>

                <div
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-40 h-40 rounded-full border bg-white/80 backdrop-blur-sm items-center justify-center"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-accent) 28%, transparent)",
                  }}
                >
                  <span
                    className="text-[10px] uppercase tracking-[0.22em] leading-relaxed text-center px-5"
                    style={{
                      color: "var(--color-accent)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Qualidade, conforto e identidade em cada peça
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSAS SOLUÇÕES */}
      <section
        className="py-20 px-6 border-t"
        style={{
          backgroundColor: "var(--color-bg-card)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
            <div className="lg:pt-2">
              <p
                className="uppercase tracking-[0.25em] text-xs mb-3"
                style={{
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Nossas soluções
              </p>

              <h2
                className="text-3xl md:text-4xl leading-tight mb-4"
                style={{
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-logo)",
                }}
              >
                Camisas e uniformes para diferentes necessidades
              </h2>

              <p
                className="text-sm md:text-base leading-7 mb-7"
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Atendemos desde pedidos personalizados para eventos até produção
                de uniformes e camisetas para equipes, empresas e ministérios.
              </p>

              <Link
                href="/loja"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] transition"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-light)",
                  fontFamily: "var(--font-heading)",
                  backgroundColor: "var(--color-success)",
                }}
              >
                Ver produtos
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Camisas personalizadas",
                  count: "Para grupos e eventos",
                  image: "/colecao-personalizadas.jpg",
                },
                {
                  label: "Uniformes",
                  count: "Para empresas e equipes",
                  image: "/colecao-uniformes.jpg",
                },
                {
                  label: "Camisas lisas",
                  count: "Versáteis e confortáveis",
                  image: "/colecao-lisas.jpg",
                },
                {
                  label: "Pedidos especiais",
                  count: "Sob encomenda",
                  image: "/colecao-encomendas.jpg",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href="/loja"
                  className="group rounded-[22px] overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-bg-primary)",
                    boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
                  }}
                >
                  <div className="relative h-40 md:h-52">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  <div className="px-4 py-3">
                    <p
                      className="text-sm mb-1"
                      style={{
                        color: "var(--color-text-primary)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: "var(--color-text-secondary)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {item.count}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS PRINCIPAIS */}
      <section
        className="py-24 px-6 border-t"
        style={{
          backgroundColor: "var(--color-bg-primary)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="uppercase tracking-[0.25em] text-xs mb-3"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Por que escolher a CM Teixeiras?
            </p>

            <h2
              className="text-3xl md:text-4xl leading-tight"
              style={{
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-logo)",
              }}
            >
              Produção com qualidade do início ao fim
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Atendimento personalizado",
                desc: "Entendemos a necessidade do seu grupo ou negócio para criar a peça ideal.",
                icon: Users,
              },
              {
                title: "Estampas e identidade",
                desc: "Produzimos camisas com a identidade da sua empresa, igreja ou evento.",
                icon: Palette,
              },
              {
                title: "Conforto e qualidade",
                desc: "Peças feitas com atenção ao acabamento, caimento e durabilidade.",
                icon: Shirt,
              },
              {
                title: "Entrega com confiança",
                desc: "Pedidos produzidos com cuidado para atender sua demanda com segurança.",
                icon: BadgeCheck,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="text-center px-4">
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-accent-light) 32%, white)",
                      color: "var(--color-accent)",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className="text-lg mb-3"
                    style={{
                      color: "var(--color-text-primary)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm leading-7"
                    style={{
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

      {/* CTA FINAL */}
      <section
        className="py-24 px-6 text-center"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent-light) 18%, white)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="uppercase tracking-[0.25em] text-xs mb-4"
            style={{
              color: "var(--color-accent)",
              fontFamily: "var(--font-heading)",
            }}
          >
            CM Teixeiras
          </p>

          <h2
            className="text-3xl md:text-4xl leading-tight mb-5"
            style={{
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-logo)",
            }}
          >
            Solicite seu orçamento para camisas personalizadas
          </h2>

          <p
            className="text-base md:text-lg leading-8 mb-8"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Fale com a gente pelo WhatsApp e monte seu pedido para empresa,
            igreja, equipe ou evento com atendimento direto.
          </p>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMensagem)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-10 py-4 rounded-full text-sm uppercase tracking-[0.18em] transition hover:opacity-90"
            style={{
              backgroundColor: "var(--color-success)",
              color: "var(--color-text-light)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}