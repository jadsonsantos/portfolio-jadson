type LinkProps = {
  children: React.ReactNode
  href: string
  className?: string
}

const Link = ({ children, href, className }: LinkProps) => {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default Link
