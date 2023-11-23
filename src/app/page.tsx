import About from 'patterns/About/About'
import Footer from 'patterns/Footer/Footer'
import Header from 'patterns/Header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  )
}
