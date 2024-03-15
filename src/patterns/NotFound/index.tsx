import Link from 'next/link'

import Container from 'components/Container'
import Button from 'components/foundation/Button'
import Heading from 'components/foundation/Heading'
import Typography from 'components/foundation/Typography'

import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <section className={styles['not-found']}>
      <Container className={styles['not-found__container']}>
        <Heading>Página não encontrada</Heading>
        <Typography className={styles['not-found__description']}>
          Parece que você está tentando acessar uma página que não existe
        </Typography>
        <Button>
          <Link href="/">Voltar para Home</Link>
        </Button>
      </Container>
    </section>
  )
}

export default NotFound
