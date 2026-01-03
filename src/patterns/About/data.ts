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

export { languages, socialLinks, tools }
