import { profile } from 'config/profile'
import { Github, Linkedin, Mail } from 'lucide-react'

const languages = [
  'HTML5',
  'CSS3',
  'Sass',
  'JavaScript',
  'TypeScript',
  'React',
  'VTEX',
  'Tailwind CSS',
  'Next.js'
]

const tools = [
  'VS Code',
  'Cursor',
  'Git',
  'GitHub',
  'Figma',
  'Webpack',
  'Gulp',
  'Playwright',
  'Metodologias Ágeis'
]

const socialLinks = [
  {
    icon: Github,
    href: profile.social.github,
    label: 'Github'
  },
  {
    icon: Linkedin,
    href: profile.social.linkedin,
    label: 'LinkedIn'
  },
  {
    icon: Mail,
    href: `mailto:${profile.email}`,
    label: 'Email'
  }
]

const experiences = [
  {
    id: 1,
    title: 'Desenvolvedor Front-End',
    company: 'Avanti',
    period: '2024 - Presente',
    description:
      'Desenvolvimento e manutenção de aplicações front-end para e-commerces VTEX, com foco em performance e experiência do usuário.',
    technologies: ['Reactjs', 'Typescript', 'VTEX']
  },
  {
    id: 2,
    title: 'Desenvolvedor Front-End',
    company: 'Red Ventures',
    period: '2021 - 2023',
    description:
      'Atuação em múltiplos projetos front-end, com foco em componentes reutilizáveis, design system e boas práticas de UI.',
    technologies: ['Reactjs', 'Typescript', 'Design System']
  },
  {
    id: 3,
    title: 'Desenvolvedor Front-End',
    company: 'Agência e-Can',
    period: '2019 - 2021',
    description:
      'Desenvolvimento de interfaces web e mobile, com foco em front-end e base sólida em tecnologias web.',
    technologies: ['VTEX', 'Javascript', 'HTML5', 'Sass']
  }
]

export { experiences, languages, socialLinks, tools }
