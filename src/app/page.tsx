import About from 'patterns/About/About'
import Cases from 'patterns/Cases/Cases'
import Footer from 'patterns/Footer/Footer'
import Header from 'patterns/Header/Header'
import Hero from 'patterns/Hero/Hero'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Cases />
      </main>
      <Footer />
    </>
  )
}
