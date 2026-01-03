import Link from 'next/link'

import { Github, Linkedin, LucideIcon, Mail } from 'lucide-react'

export type SocialLinkItem = {
  icon: LucideIcon | string
  href: string
  label: string
}

interface SocialLinksProps {
  links: SocialLinkItem[]
  containerClassName?: string
  linkClassName?: string
  iconSize?: number
}

const SocialLinks = ({
  links,
  containerClassName,
  linkClassName,
  iconSize = 20
}: SocialLinksProps) => {
  const getIcon = (icon: LucideIcon | string) => {
    if (typeof icon === 'string') {
      const iconMap: Record<string, React.ReactNode> = {
        Github: <Github size={iconSize} />,
        Linkedin: <Linkedin size={iconSize} />,
        Mail: <Mail size={iconSize} />
      }
      return iconMap[icon] || null
    }
    const IconComponent = icon
    return <IconComponent size={iconSize} />
  }

  return (
    <div className={containerClassName}>
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          className={linkClassName}
          aria-label={item.label}
          title={item.label}
          rel="noopener noreferrer"
        >
          {getIcon(item.icon)}
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
