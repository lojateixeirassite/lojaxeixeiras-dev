// prisma/seedProdutosArtesanato.ts

import 'dotenv/config'
import { PrismaClient } from '../src/generated/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🧹 Resetando produtos...')

  await prisma.productImage.deleteMany()
  await prisma.productColor.deleteMany()
  await prisma.size.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  console.log('✅ Produtos limpos!')

  const [personalizadas, uniformes, lisas, encomendas, eventosIgrejas] =
    await Promise.all([
      prisma.category.create({
        data: { name: 'Camisas Personalizadas', slug: 'camisas-personalizadas' },
      }),
      prisma.category.create({
        data: { name: 'Uniformes', slug: 'uniformes' },
      }),
      prisma.category.create({
        data: { name: 'Camisas Lisas', slug: 'camisas-lisas' },
      }),
      prisma.category.create({
        data: { name: 'Pedidos Sob Encomenda', slug: 'pedidos-sob-encomenda' },
      }),
      prisma.category.create({
        data: { name: 'Eventos e Igrejas', slug: 'eventos-e-igrejas' },
      }),
    ])

  const produtos = [
    // Camisas Personalizadas
    {
      name: 'Camiseta Personalizada para Equipes',
      slug: 'camiseta-personalizada-para-equipes',
      image: '/colecao-personalizadas.jpg',
      categoryId: personalizadas.id,
      price: 39.9,
    },
    {
      name: 'Camiseta Personalizada Promocional',
      slug: 'camiseta-personalizada-promocional',
      image: '/colecao-personalizadas2.jpg',
      categoryId: personalizadas.id,
      price: 34.9,
    },
    {
      name: 'Camisa Personalizada para Ações de Marca',
      slug: 'camisa-personalizada-para-acoes-de-marca',
      image: '/colecao-personalizadas.jpg',
      categoryId: personalizadas.id,
      price: 42.9,
    },

    // Uniformes
    {
      name: 'Uniforme Personalizado para Empresa',
      slug: 'uniforme-personalizado-para-empresa',
      image: '/colecao-uniformes.jpg',
      categoryId: uniformes.id,
      price: 49.9,
    },
    {
      name: 'Uniforme para Equipe de Atendimento',
      slug: 'uniforme-para-equipe-de-atendimento',
      image: '/colecao-uniformes.jpg',
      categoryId: uniformes.id,
      price: 52.9,
    },
    {
      name: 'Uniforme Personalizado para Staff de Evento',
      slug: 'uniforme-personalizado-para-staff-de-evento',
      image: '/colecao-uniformes.jpg',
      categoryId: uniformes.id,
      price: 44.9,
    },

    // Camisas Lisas
    {
      name: 'Camiseta Lisa Básica Algodão',
      slug: 'camiseta-lisa-basica-algodao',
      image: '/colecao-lisas.jpg',
      categoryId: lisas.id,
      price: 29.9,
    },
    {
      name: 'Camiseta Lisa Premium Unissex',
      slug: 'camiseta-lisa-premium-unissex',
      image: '/colecao-lisas.jpg',
      categoryId: lisas.id,
      price: 36.9,
    },
    {
      name: 'Camiseta Lisa para Revenda',
      slug: 'camiseta-lisa-para-revenda',
      image: '/colecao-lisas.jpg',
      categoryId: lisas.id,
      price: 27.9,
    },

    // Sob Encomenda
    {
      name: 'Camisa Sob Encomenda com Arte Exclusiva',
      slug: 'camisa-sob-encomenda-com-arte-exclusiva',
      image: '/colecao-encomendas.jpg',
      categoryId: encomendas.id,
      price: 59.9,
    },
    {
      name: 'Pedido Personalizado para Grupo',
      slug: 'pedido-personalizado-para-grupo',
      image: '/colecao-encomendas.jpg',
      categoryId: encomendas.id,
      price: 54.9,
    },
    {
      name: 'Camiseta Sob Medida para Projeto Especial',
      slug: 'camiseta-sob-medida-para-projeto-especial',
      image: '/colecao-encomendas.jpg',
      categoryId: encomendas.id,
      price: 62.9,
    },

    // Eventos e Igrejas
    {
      name: 'Camiseta para Congresso de Igreja',
      slug: 'camiseta-para-congresso-de-igreja',
      image: '/colecao-personalizadas2.jpg',
      categoryId: eventosIgrejas.id,
      price: 41.9,
    },
    {
      name: 'Camiseta para Retiro e Acampamento',
      slug: 'camiseta-para-retiro-e-acampamento',
      image: '/colecao-personalizadas.jpg',
      categoryId: eventosIgrejas.id,
      price: 43.9,
    },
    {
      name: 'Fardamento para Ministério e Equipe',
      slug: 'fardamento-para-ministerio-e-equipe',
      image: '/colecao-uniformes.jpg',
      categoryId: eventosIgrejas.id,
      price: 47.9,
    },
  ]

  for (const p of produtos) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        description: `${p.name} produzida com qualidade, conforto e acabamento profissional. Ideal para empresas, igrejas, eventos e pedidos personalizados da CM Teixeiras.`,
        price: p.price,
        stock: 50,
        handmade: false,
        categories: { connect: [{ id: p.categoryId }] },
        colors: {
          create: [
            { name: 'Branco', hex: '#FFFFFF' },
            { name: 'Preto', hex: '#111111' },
          ],
        },
        sizes: {
          create: [
            { name: 'P' },
            { name: 'M' },
            { name: 'G' },
            { name: 'GG' },
          ],
        },
        images: { create: [{ url: p.image }] },
      },
    })
  }

  console.log('🎉 Seed final pronta!')
}

main().finally(() => prisma.$disconnect())