import React from 'react'

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

const Case: React.FC<CaseProps> = ({ cases }: CaseProps) => {
  return (
    <>
      {cases.map((item) => (
        <div className={styles.case} key={item.title}>
          {/* <img src={item.image} alt={item.title} /> */}
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
      ))}
    </>
  )
}

export default Case
