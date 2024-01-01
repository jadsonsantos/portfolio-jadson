import Image from 'next/image'
import React from 'react'

import Link from 'components/Link'
import Carousel from 'components/Slider'

import styles from './Case.module.scss'

interface Case {
  image: string
  tags: string
  title: string
  link: Link
  description: string
}

interface Link {
  site: string
  github?: string
}

interface CaseProps {
  cases: Case[]
}

const settings = {
  slidesToShow: 1,
  arrows: false
}

const Case: React.FC<CaseProps> = ({ cases }: CaseProps) => {
  return (
    <Carousel {...settings}>
      {cases.map(({ title, link, tags, description }) => (
        <div className={styles.case} key={title}>
          {/* <img src={image} alt={title} /> */}
          <a href={link.site} target="_blank" rel="noopener noreferrer">
            <Image
              alt="Texto alt da imagem"
              src={`/images/case.png`}
              width={562}
              height={478}
            />
          </a>
          <div className={styles.case__infos}>
            <h2 className={styles.case__title}>{title}</h2>
            <p className={styles.case__tags}>{tags}</p>
            <p className={styles.case__description}>{description}</p>
            <Link className={styles.case__link} href={link.site}>
              site
            </Link>
            {link.github && (
              <Link className={styles.case__link} href={link.github}>
                github
              </Link>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Case
