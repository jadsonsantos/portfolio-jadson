import Heading from 'components/foundation/Heading'
import Typography from 'components/foundation/Typography'

import styles from './About.module.scss'

import { ProfileType } from 'types'

import AboutSocial from './AboutSocial'

import { PortableText } from '@portabletext/react'
import { getProfile } from 'sanity/lib/sanity.query'

export default async function AboutInfos() {
  const profile: ProfileType[] = await getProfile()

  return (
    <div className={styles.about__infos}>
      <Heading>Quem sou eu</Heading>
      {profile &&
        profile.map((data) => (
          <Typography className={styles.about__text} key={data._id}>
            <PortableText value={data.fullBio} />
          </Typography>
        ))}
      <AboutSocial />
    </div>
  )
}
