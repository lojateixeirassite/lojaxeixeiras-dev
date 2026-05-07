// src/client/config/site.config.ts
// ⚠️ PREENCHA ESSES DADOS PARA CADA CLIENTE

export const siteConfig = {
  nome: "CM Teixeiras",

  // Logo
  logoHorizontal: "/logo-cmteixeiras-horizontal.png",
  logoVertical: "/logo-cmteixeiras-vertical.png",
  logoAlt: "Logo CM Teixeiras",

  // WhatsApp
  whatsapp: "5521986369426",
  whatsappDisplay: "(21) 98636-9426",
  whatsappMensagem:
    "Olá! Vim pelo site e gostaria de um orçamento para camisas personalizadas.",

  // Header
  headerCta: "Fazer orçamento",

  // Redes sociais
  instagram: "@cmteixeirasofc",
  facebook: "",
  tiktok: "",

  cidade: "Rio de Janeiro, RJ",

  // Navegação desktop
  navLinks: [
    { label: "Início", href: "/" },
    { label: "Coleção", href: "/loja" },
    { label: "Sobre", href: "/sobre" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "https://wa.me/5521986369426" },
  ],

  // Navegação mobile
  mobileNavLinks: [
    { label: "Início", href: "/" },
    { label: "Coleção", href: "/loja" },
    { label: "Carrinho", href: "/loja/carrinho" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "https://wa.me/5521986369426" },
  ],

  // Footer — benefícios
  benefits: [
    {
      title: "Personalização sob medida",
      description: "Camisas criadas de acordo com a necessidade do seu projeto ou evento.",
    },
    {
      title: "Atendimento para grupos",
      description: "Produção para empresas, igrejas, ações promocionais e eventos especiais.",
    },
    {
      title: "Qualidade e acabamento",
      description: "Peças produzidas com cuidado, conforto e atenção aos detalhes.",
    },
  ],

  // Footer — links
  footerNavLinks: [
    { label: "Início", href: "/" },
    { label: "Coleção", href: "/loja" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "https://wa.me/5521986369426" },
  ],

  footerDescription:
    "Camisas personalizadas e lisas para empresas, igrejas e eventos, com produção cuidadosa e atendimento direto.",
  copyrightTagline: "Camisas personalizadas com qualidade e identidade",

  seo: {
    titulo: "CM Teixeiras – Camisas personalizadas, uniformes e peças para eventos",
    descricao:
      "Camisas personalizadas e lisas para empresas, igrejas e eventos. Solicite seu orçamento com a CM Teixeiras.",
    url: "https://www.lojateixeiras.com.br",
    ogImage: "/og-image.png",
    keywords: [
      "camisas personalizadas",
      "camisas lisas",
      "uniformes para empresas",
      "camisas para igreja",
      "camisas para eventos",
      "camisetas personalizadas rj",
      "uniformes personalizados",
    ],
  },

  theme: {
    bgPrimary: "#F7F8F8",
    bgSecondary: "#EEF2F2",
    bgTertiary: "#E2E8E8",
    bgCard: "#FFFFFF",
    bgHover: "#DCE4E4",
    overlay: "#0F172A20",

    textPrimary: "#1F2937",
    textSecondary: "#4B5563",
    textTertiary: "#6B7280",
    textMuted: "#94A3B8",
    textLight: "#FFFFFF",
    textHeroMuted: "#64748B",

    accent: "#000020",
    accentHover: "#0B5E58",
    accentLight: "#99F6E4",

    success: "#16A34A",
    error: "#DC2626",
    info: "#0F766E",

    border: "#D1D5DB",
    borderLight: "#E5E7EB",

    adminBg: "#FFFFFF",
    adminText: "#1F2937",
    adminBorder: "#D1D5DB",
  },
}