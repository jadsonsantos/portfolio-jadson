import Image from 'next/image'
import React from 'react'

import Carousel from 'components/Slider'

import styles from './Case.module.scss'

interface Case {
  image: string
  tags: string
  title: string
  link: string
  description: string
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
      {cases.map((item) => (
        <div className={styles.case} key={item.title}>
          {/* <img src={item.image} alt={item.title} /> */}
          <Image
            alt="teste"
            src={`/images/case.png`}
            width={562}
            height={478}
          />
          <div className={styles.case__infos}>
            <h2 className={styles.case__title}>{item.title}</h2>
            <p className={styles.case__tags}>{item.tags}</p>
            <p className={styles.case__description}>{item.description}</p>
            <a
              className={styles.case__link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Case
