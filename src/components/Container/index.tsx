type Props = {
  children: React.ReactNode
}

const Container = (props: Props) => {
  const { children } = props

  return <div className="container">{children}</div>
}

export default Container
