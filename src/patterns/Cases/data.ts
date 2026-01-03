enum Category {
  Todos = 'Todos',
  Websites = 'Websites',
  Portfólios = 'Portfólios',
  Ecommerce = 'Ecommerce'
}

export type ProjectType = {
  id: number
  image: string
  title: string
  description: string
  tags: string[]
  category: Category
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
    category: Category.Websites,
    links: {
      site: 'https://harpa.me'
    },
    isActive: true
  },
  {
    id: 2,
    image: 'case-thalita.png',
    title: 'Landing Page — Portfólio de Designer',
    description:
      'Landing page desenvolvida para portfólio profissional, com foco em conversão, animações sutis e boa experiência do usuário.',
    tags: ['Next.js', 'Sass', 'CSS Animations'],
    category: Category.Portfólios,
    links: {
      site: 'https://thalitatorres.com.br/'
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
    category: Category.Ecommerce,
    links: {
      site: 'https://fashion.example.com',
      github: 'https://github.com/jadsonsantos/ecommerce'
    },
    isActive: false
  },
  {
    id: 4,
    image: 'case-fitness.png',
    title: 'App Fitness Tracker',
    description:
      'Aplicação web para monitoramento de atividades físicas com gráficos de progresso.',
    tags: ['React Native', 'Firebase', 'GraphQL'],
    category: Category.Ecommerce,
    links: {
      site: 'https://fitness.example.com',
      github: 'https://github.com/jadsonsantos/fitness'
    },
    isActive: false
  },
  {
    id: 6,
    image: 'case-portfolio.png',
    title: 'Portfolio Designer 3D',
    description:
      'Portfólio interativo com elementos 3D e transições em WebGL usando Three.js.',
    tags: ['Three.js', 'React Three Fiber', 'GSAP'],
    category: Category.Portfólios,
    links: {
      site: 'https://portfolio.example.com',
      github: 'https://github.com/jadsonsantos/portfolio-3d'
    },
    isActive: false
  }
]

export { Category, projects }
