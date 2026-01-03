import Link from 'next/link'

import { LucideIcon } from 'lucide-react'

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
  const getIcon = (icon: LucideIcon) => {
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
          {getIcon(item.icon as LucideIcon)}
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
