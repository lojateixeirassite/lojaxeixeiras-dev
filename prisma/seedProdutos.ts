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

  const [
    personalizadas,
    uniformes,
    lisas,
    encomendas,
    eventosIgrejas,
    polos,
    combos,
    copa2026,
  ] = await Promise.all([
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
    prisma.category.create({
      data: { name: 'Camisas Polo', slug: 'camisas-polo' },
    }),
    prisma.category.create({
      data: { name: 'Combos Promocionais', slug: 'combos-promocionais' },
    }),
    prisma.category.create({
      data: { name: 'Copa 2026', slug: 'copa-2026' },
    }),
  ])

  const produtos = [
    // CAMISAS LISAS
    {
      name: 'Camiseta Lisa Malha Sublimática Masculina',
      slug: 'camiseta-lisa-malha-sublimatica-masculina',
      image: '/colecao-lisas.jpg',
      categoryId: lisas.id,
      price: 34.9,
      handmade: false,
    },
    {
      name: 'Camiseta Lisa Malha Sublimática Feminina',
      slug: 'camiseta-lisa-malha-sublimatica-feminina',
      image: '/colecao-lisas.jpg',
      categoryId: lisas.id,
      price: 34.9,
      handmade: false,
    },
    {
      name: 'Camiseta Lisa de Algodão Masculina',
      slug: 'camiseta-lisa-de-algodao-masculina',
      image: '/colecao-lisas.jpg',
      categoryId: lisas.id,
      price: 39.9,
      handmade: false,
    },
    {
      name: 'Camiseta Lisa de Algodão Feminina',
      slug: 'camiseta-lisa-de-algodao-feminina',
      image: '/colecao-lisas.jpg',
      categoryId: lisas.id,
      price: 39.9,
      handmade: false,
    },
    {
      name: 'Camiseta Lisa Malha PV Masculina',
      slug: 'camiseta-lisa-malha-pv-masculina',
      image: '/colecao-lisas.jpg',
      categoryId: lisas.id,
      price: 32.9,
      handmade: false,
    },
    {
      name: 'Camiseta Lisa Malha PV Feminina',
      slug: 'camiseta-lisa-malha-pv-feminina',
      image: '/colecao-lisas.jpg',
      categoryId: lisas.id,
      price: 32.9,
      handmade: false,
    },

    // PERSONALIZADAS
    {
      name: 'Camiseta Personalizada Frente e Costas',
      slug: 'camiseta-personalizada-frente-e-costas',
      image: '/colecao-personalizadas.jpg',
      categoryId: personalizadas.id,
      price: 54.9,
      handmade: false,
    },
    {
      name: 'Camiseta Personalizada Promocional para Evento',
      slug: 'camiseta-personalizada-promocional-para-evento',
      image: '/colecao-personalizadas2.jpg',
      categoryId: personalizadas.id,
      price: 49.9,
      handmade: false,
    },
    {
      name: 'Camisa Personalizada para Empresa com Logo',
      slug: 'camisa-personalizada-para-empresa-com-logo',
      image: '/colecao-uniformes.jpg',
      categoryId: personalizadas.id,
      price: 59.9,
      handmade: false,
    },

    // UNIFORMES
    {
      name: 'Uniforme Personalizado para Equipe de Atendimento',
      slug: 'uniforme-personalizado-para-equipe-de-atendimento',
      image: '/colecao-uniformes.jpg',
      categoryId: uniformes.id,
      price: 52.9,
      handmade: false,
    },
    {
      name: 'Uniforme Personalizado para Staff de Evento',
      slug: 'uniforme-personalizado-para-staff-de-evento',
      image: '/colecao-uniformes.jpg',
      categoryId: uniformes.id,
      price: 44.9,
      handmade: false,
    },

    // POLOS
    {
      name: 'Camisa Polo Piquet Personalizada Masculina',
      slug: 'camisa-polo-piquet-personalizada-masculina',
      image: '/colecao-uniformes.jpg',
      categoryId: polos.id,
      price: 79.9,
      handmade: false,
    },
    {
      name: 'Camisa Polo Piquet Personalizada Feminina',
      slug: 'camisa-polo-piquet-personalizada-feminina',
      image: '/colecao-uniformes.jpg',
      categoryId: polos.id,
      price: 84.9,
      handmade: false,
    },

    // EVENTOS E IGREJAS
    {
      name: 'Camiseta para Congresso de Igreja',
      slug: 'camiseta-para-congresso-de-igreja',
      image: '/colecao-personalizadas2.jpg',
      categoryId: eventosIgrejas.id,
      price: 49.9,
      handmade: false,
    },
    {
      name: 'Camiseta para Retiro e Acampamento',
      slug: 'camiseta-para-retiro-e-acampamento',
      image: '/colecao-personalizadas.jpg',
      categoryId: eventosIgrejas.id,
      price: 43.9,
      handmade: false,
    },
    {
      name: 'Fardamento para Ministério e Equipe',
      slug: 'fardamento-para-ministerio-e-equipe',
      image: '/colecao-uniformes.jpg',
      categoryId: eventosIgrejas.id,
      price: 47.9,
      handmade: false,
    },

    // ENCOMENDAS
    {
      name: 'Camisa Sob Encomenda com Arte Exclusiva',
      slug: 'camisa-sob-encomenda-com-arte-exclusiva',
      image: '/colecao-encomendas.jpg',
      categoryId: encomendas.id,
      price: 69.9,
      handmade: false,
    },
    {
      name: 'Pedido Personalizado para Grupo',
      slug: 'pedido-personalizado-para-grupo',
      image: '/colecao-encomendas.jpg',
      categoryId: encomendas.id,
      price: 54.9,
      handmade: false,
    },

    // COMBOS PROMOCIONAIS
    {
      name: 'Combo 4 Camisetas Lisas de Algodão',
      slug: 'combo-4-camisetas-lisas-de-algodao',
      image: '/colecao-lisas.jpg',
      categoryId: combos.id,
      price: 139.9,
      handmade: false,
    },
    {
      name: 'Combo 4 Camisetas Malha PV',
      slug: 'combo-4-camisetas-malha-pv',
      image: '/colecao-lisas.jpg',
      categoryId: combos.id,
      price: 114.9,
      handmade: false,
    },
    {
      name: 'Combo 4 Camisetas Personalizadas para Evento',
      slug: 'combo-4-camisetas-personalizadas-para-evento',
      image: '/colecao-personalizadas.jpg',
      categoryId: combos.id,
      price: 174.9,
      handmade: false,
    },
    {
      name: 'Combo 4 Camisetas para Empresa com Logo',
      slug: 'combo-4-camisetas-para-empresa-com-logo',
      image: '/colecao-uniformes.jpg',
      categoryId: combos.id,
      price: 209.9,
      handmade: false,
    },

    // COPA 2026
    {
      name: 'Camiseta Tema Copa 2026 Brasil Amarela',
      slug: 'camiseta-tema-copa-2026-brasil-amarela',
      image: '/colecao-personalizadas2.jpg',
      categoryId: copa2026.id,
      price: 39.9,
      handmade: false,
    },
    {
      name: 'Camiseta Tema Copa 2026 Brasil Azul',
      slug: 'camiseta-tema-copa-2026-brasil-azul',
      image: '/colecao-personalizadas.jpg',
      categoryId: copa2026.id,
      price: 39.9,
      handmade: false,
    },
    {
      name: 'Camiseta Copa 2026 Personalizada com Nome e Número',
      slug: 'camiseta-copa-2026-personalizada-com-nome-e-numero',
      image: '/colecao-personalizadas2.jpg',
      categoryId: copa2026.id,
      price: 49.9,
      handmade: false,
    },
    {
      name: 'Camiseta Torcida Brasil 2026 Dry Fit',
      slug: 'camiseta-torcida-brasil-2026-dry-fit',
      image: '/colecao-lisas.jpg',
      categoryId: copa2026.id,
      price: 44.9,
      handmade: false,
    },
    {
      name: 'Combo 4 Camisetas Tema Copa 2026',
      slug: 'combo-4-camisetas-tema-copa-2026',
      image: '/colecao-personalizadas.jpg',
      categoryId: copa2026.id,
      price: 119.9,
      handmade: false,
    },
  ]

  for (const p of produtos) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        description: `${p.name} produzida com qualidade, conforto e ótimo acabamento. Produto da CM Teixeiras ideal para empresas, igrejas, eventos, grupos, revenda ou uso no dia a dia.`,
        price: p.price,
        stock: 50,
        handmade: p.handmade,
        categories: { connect: [{ id: p.categoryId }] },
        colors: {
          create: [
            { name: 'Branco', hex: '#FFFFFF' },
            { name: 'Preto', hex: '#111111' },
            { name: 'Azul Marinho', hex: '#1E3A8A' },
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