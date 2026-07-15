// src/client/config/site.config.ts

export const siteConfig = {
  nome: "CM Teixeiras",

  // Logo
  logoHorizontal: "/logo-cmteixeiras-horizontal.png",
  logoVertical: "/logo-cmteixeiras-vertical.png",
  logoAlt: "CM Teixeiras",

  // WhatsApp (PEGUEI DA IMAGEM)
  whatsapp: "5521986369426",
  whatsappDisplay: "(21) 98636-9426",
  whatsappMensagem: "Olá! Vim pelo site e gostaria de solicitar um orçamento.",

  // Header
  headerCta: "Fazer orçamento",

  // Redes sociais (não apareceu na imagem)
  instagram: "https://www.instagram.com/cmteixeirasofc",
  facebook: "",
  tiktok: "",

  cidade: "Rio de Janeiro, RJ",

  // Navegação desktop
  navLinks: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Loja", href: "/loja" },
    { label: "Contato", href: "https://wa.me/5521986369426" },
  ],

  // Navegação mobile
  mobileNavLinks: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Loja", href: "/loja" },
    { label: "Carrinho", href: "/loja/carrinho" },
    { label: "Contato", href: "https://wa.me/5521986369426" },
  ],

  // Footer — benefícios (EXATAMENTE DA IMAGEM)
  benefits: [
    {
      title: "Personalização sob Medida",
      description: "Camisas criadas para cada projeto",
    },
    {
      title: "Qualidade e Acabamento",
      description: "Produção com conforto e durabilidade",
    },
    {
      title: "Entrega no Brasil",
      description: "Envios para todo o país",
    },
  ],

  // Footer — links
  footerNavLinks: [
    { label: "Início", href: "/" },
    { label: "Camisas e Uniformes", href: "/loja" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "https://wa.me/5521986369426" },
  ],

  footerDescription:
    "Camisas personalizadas, camisetas lisas e uniformes para empresas, igrejas, eventos e revendedores, com atendimento para todo o Brasil.",

  copyrightTagline:
    "Camisas personalizadas com qualidade e identidade",

  seo: {
    titulo: "CM Teixeiras – Camisas Personalizadas e Uniformes",
    descricao:
      "Camisas personalizadas, camisetas lisas e uniformes para empresas, igrejas, eventos e revendedores em todo o Brasil.",
    url: "https://www.lojateixeiras.com.br",
    ogImage: "/og-image.png",
    keywords: [
      "camisas personalizadas",
      "camisetas personalizadas",
      "camisas lisas",
      "camisetas lisas",
      "uniformes para empresas",
      "uniformes personalizados",
      "camisas para igreja",
      "camisetas para igreja",
      "camisas para eventos",
      "camisetas personalizadas RJ",
      "camisas no atacado",
      "camisetas no atacado",
      "fornecedor de camisetas",
      "camisas para revenda",
    ],
  },

   // ─── Instalação Off-Line do site no tablet ────────────────────────────────────────
  pwa: {
  enabled: true,

  shortName: "CM Teixeiras",

  orientation: "any" as const,

  icon192: "/pwa/icon-192.png",
  icon512: "/pwa/icon-512.png",
  maskableIcon512: "/pwa/icon-maskable-512.png",
  appleTouchIcon: "/pwa/apple-touch-icon.png",

  offlineRoutes: [
    "/",
    "/sobre",
    "/loja",
    "/blog",
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
};