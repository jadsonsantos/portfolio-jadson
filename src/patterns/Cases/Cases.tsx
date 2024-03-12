import Case from 'components/Case'
import Container from 'components/Container'
import Heading from 'components/foundation/Heading'
import Typography from 'components/foundation/Typography'
import Carousel from 'components/Slider'

import styles from './Cases.module.scss'

import cases from './data'

const settings = {
  slidesToShow: 1,
  arrows: false
}

const Cases: React.FC = () => {
  return (
    <section className={`cases ${styles.cases}`} id="cases">
      <Container>
        <Heading>Projetos</Heading>
        <Typography>Conheça alguns dos projetos que desenvolvi</Typography>
        <section className={styles.cases__list}>
          <Carousel {...settings}>
            {cases.map((item) => {
              return <Case key={item.title} case={item} />
            })}
          </Carousel>
        </section>
      </Container>
    </section>
  )
}

export default Cases
