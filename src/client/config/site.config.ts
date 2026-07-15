// src/client/config/site.config.ts

export const siteConfig = {
  nome: "CM Teixeiras",
  nomeLegal: "CM Teixeiras",

  descricao:
    "Camisas personalizadas, camisetas lisas e uniformes para empresas, igrejas, eventos, revendedores e clientes de todo o Brasil.",

  logoHorizontal: "/logo-cmteixeiras-horizontal.png",
  logoVertical: "/logo-cmteixeiras-vertical.png",
  logoAlt: "CM Teixeiras - Camisas personalizadas e uniformes",

  contato: {
    whatsapp: "5521986369426",
    whatsappDisplay: "(21) 98636-9426",
    whatsappMensagem:
      "Olá! Vim pelo site e gostaria de solicitar um orçamento.",
    email: "",
  },

  localizacao: {
    cidade: "Rio de Janeiro",
    estado: "RJ",
    pais: "BR",
    endereco: "",
    cep: "",
  },

  atendimento: {
    areaAtendida: "Brasil",
    horario: "",
  },

  redesSociais: {
    instagram: {
      usuario: "@cmteixeirasofc",
      url: "https://www.instagram.com/cmteixeirasofc",
    },
    facebook: {
      usuario: "",
      url: "",
    },
    tiktok: {
      usuario: "",
      url: "",
    },
    youtube: {
      usuario: "",
      url: "",
    },
  },

  empresa: {
    cnpj: "",
    fundacao: "",
    slogan: "Camisas personalizadas com qualidade e identidade",
  },

  headerCta: "Fazer orçamento",

  navLinks: [
    {
      label: "Início",
      href: "/",
    },
    {
      label: "Coleção",
      href: "/loja",
    },
    {
      label: "Personalizados",
      href: "/personalizado",
    },
    {
      label: "Sobre",
      href: "/sobre",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contato",
      href: "https://wa.me/5521986369426",
    },
  ],

  mobileNavLinks: [
    {
      label: "Início",
      href: "/",
    },
    {
      label: "Coleção",
      href: "/loja",
    },
    {
      label: "Personalizados",
      href: "/personalizado",
    },
    {
      label: "Carrinho",
      href: "/loja/carrinho",
    },
    {
      label: "Sobre",
      href: "/sobre",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contato",
      href: "https://wa.me/5521986369426",
    },
  ],

  benefits: [
    {
      title: "Personalização sob medida",
      description:
        "Camisas desenvolvidas de acordo com a identidade, necessidade e objetivo de cada projeto.",
    },
    {
      title: "Atendimento para grupos",
      description:
        "Produção para empresas, igrejas, escolas, academias, eventos e ações promocionais.",
    },
    {
      title: "Qualidade e acabamento",
      description:
        "Peças produzidas com atenção ao conforto, durabilidade e qualidade do acabamento.",
    },
  ],

  footerNavLinks: [
    {
      label: "Início",
      href: "/",
    },
    {
      label: "Coleção",
      href: "/loja",
    },
    {
      label: "Personalizados",
      href: "/personalizado",
    },
    {
      label: "Sobre",
      href: "/sobre",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contato",
      href: "https://wa.me/5521986369426",
    },
  ],

  footerDescription:
    "Camisas personalizadas, camisetas lisas e uniformes para empresas, igrejas, eventos e revendedores, com atendimento para todo o Brasil.",

  copyrightTagline:
    "Camisas personalizadas com qualidade e identidade",

  seo: {
    url: "https://www.lojateixeiras.com.br",

    locale: "pt_BR",

    language: "pt-BR",

    title: {
      default:
        "CM Teixeiras | Camisas personalizadas, camisetas lisas e uniformes",

      template: "%s | CM Teixeiras",

      home:
        "Camisas personalizadas, camisetas lisas e uniformes | CM Teixeiras",
    },

    description:
      "Camisas personalizadas, camisetas lisas e uniformes para empresas, igrejas, eventos e revendedores. Solicite seu orçamento com a CM Teixeiras.",

    homeDescription:
      "Compre camisas personalizadas, camisetas lisas e uniformes para empresas, igrejas, eventos e revendedores. Produção com qualidade e atendimento para todo o Brasil.",

    ogImage: {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "CM Teixeiras - Camisas personalizadas, camisetas lisas e uniformes",
    },

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

    authors: [
      {
        name: "CM Teixeiras",
        url: "https://www.lojateixeiras.com.br",
      },
    ],

    creator: "CM Teixeiras",

    publisher: "CM Teixeiras",

    category: "Vestuário e confecção",

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxImagePreview: "large",
        maxSnippet: -1,
        maxVideoPreview: -1,
      },
    },

    verification: {
      google: "",
      bing: "",
    },
  },

   // ─── Instalação Off-Line do site no tablet ────────────────────────────────────────
  pwa: {
  enabled: true,

  shortName: "Nome do Negócio",

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
} as const;

export type SiteConfig = typeof siteConfig;