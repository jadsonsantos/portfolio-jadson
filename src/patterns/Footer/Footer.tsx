import style from './Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={style.footer}>
      <div className="container">© Copyright {currentYear}</div>
    </footer>
  )
}

export default Footer
