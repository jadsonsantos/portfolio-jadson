import React from 'react'

import Case from 'components/Case'
import Container from 'components/Container'
import Heading from 'components/foundation/Heading'
import Typography from 'components/foundation/Typography'

import styles from './Cases.module.scss'

import cases from './data'

const Cases: React.FC = () => {
  return (
    <section className={styles.cases} id="cases">
      <Container>
        <Heading>Projetos</Heading>
        <Typography>Conheça alguns dos projetos que desenvolvi</Typography>
        <section className={styles.cases__list}>
          <Case cases={cases} />
        </section>
      </Container>
    </section>
  )
}

export default Cases
