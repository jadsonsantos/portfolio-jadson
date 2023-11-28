type Props = {
  children: string
  className?: React.ReactNode
}

const Heading = ({ children, className }: Props) => {
  return <h2 className={`heading ${className}`}>{children}</h2>
}

export default Heading
