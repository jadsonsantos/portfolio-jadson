import Link from 'next/link'

import Container from 'components/Container'
import Button from 'components/foundation/Button'
import Heading from 'components/foundation/Heading'
import Typography from 'components/foundation/Typography'

import styles from '../styles/pages/not-found.module.scss'

export default function NotFound() {
  return (
    <div className={styles['not-found']}>
      <Container className={styles['not-found__container']}>
        <Heading>Página não encontrada</Heading>
        <Typography className={styles['not-found__description']}>
          Parece que você está tentando acessar uma página que não existe
        </Typography>
        <Button>
          <Link href="/">Voltar para Home</Link>
        </Button>
      </Container>
    </div>
  )
}
