type LinkProps = {
  children: React.ReactNode
  href: string
  target?: string
  className?: string
}

const CustomLink = ({
  children,
  href,
  target = '_blank',
  className
}: LinkProps) => {
  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : ''}
    >
      {children}
    </a>
  )
}

export default CustomLink
