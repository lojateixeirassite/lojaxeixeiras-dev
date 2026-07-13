// prisma/seed.ts
import 'dotenv/config'
import { PrismaClient } from '../src/generated/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import bcrypt from 'bcryptjs'

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🧹 Limpando Paginas...')


  await prisma.customPage.deleteMany()

  console.log('✅ Paginas limpas!')

  // ─────────────────────────────────────────
  // 📄 PÁGINAS CUSTOMIZADAS
  // ─────────────────────────────────────────
  await prisma.customPage.createMany({
  data: [
    {
      slug: 'sobre',
      title: 'Sobre a CM Teixeiras',
      introText:
        'A CM Teixeiras é especializada em camisas personalizadas, uniformes e peças para eventos, com foco em empresas, igrejas, ministérios, equipes e congressos. Qualidade, identidade visual e acabamento profissional em cada pedido.',
      section1Title: 'Sua identidade em cada peça',
      section1Text:
        'A CM Teixeiras nasceu para ajudar grupos, empresas e igrejas a se apresentarem com mais organização, profissionalismo e identidade. Produzimos camisas e uniformes sob medida, pensados para cada projeto, com atenção ao caimento, à durabilidade e ao visual que representa quem você é. Do ministério à empresa, do evento ao time — a CM Teixeiras transforma sua identidade em peças que vestem com orgulho.',
    },
    {
      slug: 'personalizado',
      title: 'Camisas e uniformes feitos para o seu grupo',
      introText:
        'Cada pedido na CM Teixeiras é pensado de acordo com o projeto, o grupo e o evento do cliente. Personalizamos modelo, cor, estampa e quantidade — tudo com atendimento direto e produção cuidadosa.',
      section1Title: 'O que podemos personalizar?',
      section1Text:
        'Logomarca, cores, nome do grupo, estampas específicas, numeração e modelos variados. Atendemos igrejas, empresas, times esportivos, equipes de eventos e muito mais. O pedido é feito direto pelo WhatsApp com atendimento personalizado do início ao fim.',
      faq: [
        {
          pergunta: 'Qual a quantidade mínima para pedidos personalizados?',
          resposta:
            'Trabalhamos com pedidos a partir de pequenas quantidades. Entre em contato pelo WhatsApp para verificar disponibilidade conforme seu projeto.',
        },
        {
          pergunta: 'Posso colocar a logomarca do meu ministério ou empresa?',
          resposta:
            'Sim! Personalizamos com logomarca, nome do grupo, versículo, número ou qualquer arte que você nos enviar.',
        },
        {
          pergunta: 'Quais tipos de tecido estão disponíveis?',
          resposta:
            'Trabalhamos com opções como Dry Fit, malha e outros tecidos conforme a finalidade da peça. Indicamos a melhor opção para o seu uso.',
        },
        {
          pergunta: 'Como faço meu pedido?',
          resposta:
            'Entre em contato pelo WhatsApp, informe a quantidade, o modelo desejado e envie a arte ou logomarca. Nossa equipe te passa o orçamento e o prazo rapidamente.',
        },
      ],
    },
  ],
})
console.log('✅ Páginas sobre e personalizado criadas — lojateixeiras.com.br')

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })