import Link from 'next/link'

import Typography from 'components/foundation/Typography'

const AboutCv = () => {
  return (
    <Typography>
      <Link href="/cv-pt.pdf" target="_blank">
        Acesse meu currículo
      </Link>
    </Typography>
  )
}

export default AboutCv
