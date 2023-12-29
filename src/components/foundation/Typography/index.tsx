type Props = {
  children: string
  className?: React.ReactNode
}

const Typography = ({ className, children }: Props) => {
  return <p className={`typography ${className || ''}`}>{children}</p>
}

export default Typography
