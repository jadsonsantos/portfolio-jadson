// import Case from 'components/Case'
import Container from 'components/Container'
import Heading from 'components/foundation/Heading'
import Typography from 'components/foundation/Typography'

import styles from './Cases.module.scss'

// import cases from './data'

const Cases = () => {
  return (
    <section className={styles.cases}>
      <Container>
        <Heading>Projetos</Heading>
        <Typography>Conheça alguns dos projetos que desenvolvi</Typography>
        <section className={styles.cases__list}>
          {/* {cases.map(({ title, image, description, tags, link }) => (
            <Case
              key={title}
              title={title}
              image={image}
              alt={title}
              description={description}
              tags={tags}
              link={link}
            />
          ))} */}
        </section>
      </Container>
    </section>
  )
}

export default Cases
