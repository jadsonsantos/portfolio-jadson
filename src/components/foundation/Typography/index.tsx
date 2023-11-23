type Props = {
  children: string
  className?: React.ReactNode
}

const Typography = (props: Props) => {
  const { className, children } = props

  return <p className={`typography ${className}`}>{children}</p>
}

export default Typography
