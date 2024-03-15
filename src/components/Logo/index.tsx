import Image from 'next/image'
import Link from 'next/link'

import logoIcon from '../../../public/logo.svg'

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logoIcon} alt="Logo contendo o nome Jadson" />
    </Link>
  )
}

export default Logo
