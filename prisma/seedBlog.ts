// prisma/seedBlogCmTeixeiras.ts

import 'dotenv/config'
import { PrismaClient } from '../src/generated/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🧹 Resetando blog CM Teixeiras...')

  await prisma.postSEO.deleteMany()
  await prisma.post.deleteMany()
  await prisma.blogCategory.deleteMany()

  console.log('✅ Blog limpo!')

  // ─────────────────────────────────────────
  // 📂 CATEGORIAS (HOME)
  // ─────────────────────────────────────────
  const [camisasPersonalizadas, uniformes, eventosIgrejas] = await Promise.all([
    prisma.blogCategory.create({
      data: {
        name: 'Camisas Personalizadas',
        slug: 'camisas-personalizadas',
        description:
          'Conteúdos sobre camisetas personalizadas para grupos, equipes, ministérios e ações especiais.',
        image: '/blog-1.jpg',
        showOnHome: true,
        featured: true,
        order: 1,
      },
    }),
    prisma.blogCategory.create({
      data: {
        name: 'Uniformes',
        slug: 'uniformes',
        description:
          'Dicas e inspirações para uniformes personalizados com conforto, identidade e acabamento profissional.',
        image: '/blog-2.jpg',
        showOnHome: true,
        featured: true,
        order: 2,
      },
    }),
    prisma.blogCategory.create({
      data: {
        name: 'Eventos & Igrejas',
        slug: 'eventos-e-igrejas',
        description:
          'Ideias para camisetas de congressos, retiros, aniversários de igreja e eventos em geral.',
        image: '/blog-3.jpg',
        showOnHome: true,
        featured: true,
        order: 3,
      },
    }),
  ])

  // ─────────────────────────────────────────
  // 📝 POSTS
  // ─────────────────────────────────────────
  const posts = [
    {
      title:
        'Camisas personalizadas para igreja: mais identidade para o seu evento',
      slug: 'camisas-personalizadas-para-igreja-identidade-para-o-seu-evento',
      excerpt:
        'Entenda como camisetas personalizadas ajudam a fortalecer a identidade visual de congressos, ministérios e encontros da igreja.',
      categoryId: eventosIgrejas.id,
      content: `
## Mais do que uma camiseta

Quando a igreja investe em camisas personalizadas para congressos, retiros ou aniversários, todo o evento ganha uma identidade visual mais forte e organizada.

As peças ajudam a identificar equipes, grupos de louvor, ministérios e participantes, além de se tornarem lembranças especiais do momento vivido.

## Onde as camisas fazem diferença

Algumas situações em que a camiseta personalizada é um grande diferencial:

- Congressos e conferências
- Retiros e acampamentos
- Aniversários da igreja ou do ministério
- Projetos de evangelização e ações sociais

## Organização e unidade

Com um fardamento bem pensado, fica mais fácil organizar os grupos, dar destaque à equipe e transmitir uma imagem mais profissional e acolhedora.

## Conclusão

Camisas personalizadas para igreja unem identidade, organização e memória afetiva em um único item — e isso transforma a experiência do evento.`,
      seo: {
        metaTitle:
          'Camisas personalizadas para igreja: identidade para seu evento',
        metaDesc:
          'Veja como camisas personalizadas para igreja e eventos cristãos ajudam a organizar equipes e reforçar a identidade visual.',
        keywords:
          'camisas personalizadas para igreja, camisetas para congresso, fardamento para ministérios, camisetas para eventos cristãos',
      },
    },

    {
      title:
        'Uniformes personalizados para empresas e equipes: profissionalismo no dia a dia',
      slug: 'uniformes-personalizados-para-empresas-e-equipes',
      excerpt:
        'Descubra como uniformes personalizados reforçam a imagem da empresa e facilitam a rotina das equipes.',
      categoryId: uniformes.id,
      content: `
## Imagem profissional desde o primeiro contato

Um uniforme bem feito transmite organização, cuidado com a marca e segurança para quem é atendido. Ele ajuda o cliente a identificar rapidamente a equipe e passa mais confiança.

## Benefícios para a empresa e para o colaborador

Uniformes personalizados trazem vantagens para os dois lados:

- Reforçam a identidade visual da marca
- Facilitam a identificação dos setores
- Ajudam na padronização do atendimento
- Simplificam a escolha do que vestir no dia a dia

## Onde usar

Eles são ideais para:

- Lojas e comércios em geral
- Escritórios e recepções
- Eventos corporativos e feiras
- Equipes de apoio e staff

## Conclusão

Investir em uniformes personalizados significa cuidar da imagem da empresa e da experiência de quem é atendido, com mais profissionalismo e unidade visual.`,
      seo: {
        metaTitle:
          'Uniformes personalizados para empresas e equipes: por que investir',
        metaDesc:
          'Entenda como uniformes personalizados reforçam a identidade da empresa e organizam o dia a dia das equipes.',
        keywords:
          'uniformes personalizados, uniforme para empresa, camisetas para equipe, fardamento profissional',
      },
    },

    {
      title:
        'Camisas para eventos: como escolher o melhor modelo para o seu grupo',
      slug: 'camisas-para-eventos-como-escolher-o-melhor-modelo',
      excerpt:
        'Veja o que considerar na hora de escolher camisetas personalizadas para eventos, grupos e ações especiais.',
      categoryId: camisasPersonalizadas.id,
      content: `
## O papel da camiseta no evento

A camiseta personalizada é muitas vezes o primeiro contato visual que as pessoas têm com o evento. Ela carrega o tema, as cores e o clima que você quer transmitir.

## Pontos importantes na escolha

Antes de fechar o pedido, vale observar:

- Tipo de tecido ideal para o clima e a atividade
- Modelagem confortável para quem vai usar o dia todo
- Cores alinhadas com o visual do evento
- Arte legível e bem posicionada

## Quantidade e tamanhos

Planejar a quantidade e a grade de tamanhos com antecedência evita aperto na hora de entregar as peças para o grupo.

## Conclusão

Quando a camiseta do evento é pensada com cuidado, ela vira parte da experiência — e não apenas um item obrigatório.`,
      seo: {
        metaTitle:
          'Camisas para eventos: como escolher o modelo ideal para seu grupo',
        metaDesc:
          'Saiba o que avaliar na hora de escolher camisetas personalizadas para eventos, ações e grupos específicos.',
        keywords:
          'camisas para eventos, camisetas personalizadas, camisa para grupo, camiseta de evento',
      },
    },

    {
      title:
        'Camisas Dry Fit personalizadas: quando esse tecido é a melhor escolha',
      slug: 'camisas-dry-fit-personalizadas-quando-escolher',
      excerpt:
        'Entenda em quais situações a camisa Dry Fit personalizada traz mais conforto e desempenho para o seu grupo.',
      categoryId: uniformes.id,
      content: `
## Conforto em rotinas intensas

Para quem participa de atividades com muita movimentação, como eventos ao ar livre, ações esportivas ou equipes que ficam em pé por muito tempo, a Dry Fit é uma ótima opção.

## Vantagens do Dry Fit

Esse tipo de peça se destaca por:

- Secagem rápida
- Sensação de leveza
- Maior conforto térmico
- Menos marcas de suor

## Quando indicar para o seu pedido

Camisas Dry Fit personalizadas funcionam muito bem para:

- Equipes de apoio em eventos
- Ministérios de dança e louvor
- Ações esportivas e gincanas
- Atividades externas e em dias mais quentes

## Conclusão

Ao alinhar o tipo de tecido com o uso real da peça, o uniforme ganha funcionalidade e deixa a experiência de quem usa muito melhor.`,
      seo: {
        metaTitle:
          'Camisas Dry Fit personalizadas: quando vale a pena escolher',
        metaDesc:
          'Veja em quais situações as camisas Dry Fit personalizadas são a opção ideal para conforto e desempenho.',
        keywords:
          'camisa dry fit personalizada, uniforme dry fit, camiseta para eventos esportivos, camiseta leve para equipe',
      },
    },

    {
      title:
        'Como organizar o pedido de camisas personalizadas pelo WhatsApp',
      slug: 'como-organizar-pedido-de-camisas-personalizadas-pelo-whatsapp',
      excerpt:
        'Um passo a passo simples para deixar seu pedido de camisetas personalizadas mais rápido e organizado.',
      categoryId: camisasPersonalizadas.id,
      content: `
## Facilite o primeiro contato

Quanto mais informação você tiver na hora de chamar no WhatsApp, mais rápido o orçamento é feito e mais claro fica o projeto.

## Informações que ajudam muito

Na hora de enviar mensagem, vale já adiantar:

- Quantidade aproximada de camisas
- Tipo de evento ou uso (empresa, igreja, grupo, ação específica)
- Cores desejadas
- Prazo ideal
- Cidade para envio ou retirada

## Referências visuais

Se tiver uma arte, logo ou referência de modelo, envie junto. Isso ajuda a alinhar expectativa e possibilidades de personalização.

## Conclusão

Com alguns detalhes organizados desde o início, o processo de orçamento e produção fica mais simples e você recebe as camisas prontas com mais segurança.`,
      seo: {
        metaTitle:
          'Como organizar seu pedido de camisas personalizadas pelo WhatsApp',
        metaDesc:
          'Aprenda quais informações enviar para agilizar o orçamento e a produção das suas camisetas personalizadas.',
        keywords:
          'pedido de camisetas personalizadas, orçamento camiseta whatsapp, como pedir uniforme personalizado',
      },
    },

    {
      title:
        'Uniformes e camisetas como estratégia de identidade visual',
      slug: 'uniformes-e-camisetas-como-estrategia-de-identidade-visual',
      excerpt:
        'Entenda como uniformes e camisetas personalizadas fazem parte da comunicação da sua marca ou ministério.',
      categoryId: eventosIgrejas.id,
      content: `
## Comunicando sem falar nada

Antes mesmo de uma palavra ser dita, a aparência da equipe diz muito sobre a organização. Uniformes e camisetas personalizadas fazem parte dessa comunicação silenciosa.

## Coerência com a marca

Quando as peças seguem as cores, fontes e elementos da identidade visual, tudo fica mais coerente: banners, redes sociais, material impresso e o uniforme conversam entre si.

## Experiência de quem participa

Em eventos, congressos e encontros, o uso de camisetas personalizadas ajuda os participantes a se sentirem parte de algo maior e bem estruturado.

## Conclusão

Ver o uniforme como parte da identidade visual é um passo importante para fortalecer a imagem de empresas, igrejas e projetos.`,
      seo: {
        metaTitle:
          'Uniformes e camisetas personalizadas na construção da identidade visual',
        metaDesc:
          'Descubra como usar uniformes e camisetas personalizadas como parte da estratégia de comunicação da sua marca ou ministério.',
        keywords:
          'identidade visual com uniforme, camisetas e marca, comunicação visual com fardamento',
      },
    },
  ]

  for (const p of posts) {
    await prisma.post.create({
      data: {
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        content: p.content,
        categoryId: p.categoryId,
        published: true,
        seo: {
          create: {
            metaTitle: p.seo.metaTitle,
            metaDesc: p.seo.metaDesc,
            keywords: p.seo.keywords,
          },
        },
      },
    })
  }

  console.log('🎉 Blog da CM Teixeiras criado com sucesso!')
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })