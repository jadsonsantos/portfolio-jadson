export type ProjectType = {
  id: number
  image: string
  title: string
  description: string
  tags: string[]
  category: string
  links: {
    site?: string
    github?: string
  }
  isActive: boolean
}

const projects: ProjectType[] = [
  {
    id: 1,
    image: 'case-harpa.png',
    title: 'Harpa - Agência de Expedições',
    description:
      'Site institucional para agência de expedições, com layouts responsivos, UX orientado à apresentação de pacotes turísticos e foco em performance e navegabilidade.',
    tags: ['Next.js', 'TypeScript', 'Styled Components'],
    category: 'Websites',
    links: {
      site: 'https://harpa.me'
    },
    isActive: true
  },
  {
    id: 2,
    image: 'case-dashboard.png',
    title: 'SaaS Dashboard Enterprise',
    description:
      'Plataforma de análise de dados com charts interativos, relatórios em tempo real e integração com APIs.',
    tags: ['React', 'TypeScript', 'Chart.js'],
    category: 'SaaS',
    links: {
      site: 'https://dashboard.example.com'
    },
    isActive: true
  },
  {
    id: 3,
    image: 'case-ecommerce.png',
    title: 'E-commerce Fashion',
    description:
      'Plataforma de e-commerce com catálogo de produtos, carrinho inteligente e checkout otimizado.',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    category: 'E-commerce',
    links: {
      site: 'https://fashion.example.com',
      github: 'https://github.com/jadsonsantos/ecommerce'
    },
    isActive: true
  },
  {
    id: 4,
    image: 'case-fitness.png',
    title: 'App Fitness Tracker',
    description:
      'Aplicação web para monitoramento de atividades físicas com gráficos de progresso.',
    tags: ['React Native', 'Firebase', 'GraphQL'],
    category: 'Apps',
    links: {
      site: 'https://fitness.example.com',
      github: 'https://github.com/jadsonsantos/fitness'
    },
    isActive: true
  },
  {
    id: 5,
    image: 'case-thalita.png',
    title: 'Landing Page SaaS',
    description:
      'Página de conversão de alta performance com animações, seções e integrações.',
    tags: ['Next.js', 'Tailwind', 'Motion CSS'],
    category: 'Portfolios',
    links: {
      site: 'https://thalitatorres.com.br/',
      github: 'https://github.com/jadsonsantos/landing'
    },
    isActive: true
  },
  {
    id: 6,
    image: 'case-portfolio.png',
    title: 'Portfolio Designer 3D',
    description:
      'Portfólio interativo com elementos 3D e transições em WebGL usando Three.js.',
    tags: ['Three.js', 'React Three Fiber', 'GSAP'],
    category: 'Portfolios',
    links: {
      site: 'https://portfolio.example.com',
      github: 'https://github.com/jadsonsantos/portfolio-3d'
    },
    isActive: true
  }
]

const categories = ['Todos', 'Websites', 'SaaS', 'E-commerce', 'Portfolios']

export { categories, projects }
