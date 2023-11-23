type Props = {
  children: string
  className?: React.ReactNode
}

const Heading = (props: Props) => {
  const { children, className } = props

  return <h2 className={`heading ${className}`}>{children}</h2>
}

export default Heading
