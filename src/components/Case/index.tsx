import Image from 'next/image'

import CustomLink from 'components/CustomLink'

import styles from './Case.module.scss'

interface CaseItem {
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
  case: CaseItem
}

const Case = ({ case: caseItem }: CaseProps) => {
  const { title, link, image, tags, description } = caseItem

  return (
    <div className={styles.case} key={title}>
      <CustomLink href={link.site}>
        <Image
          alt={title}
          src={image.length > 0 ? `/images/${image}.jpg` : `/images/case.png`}
          width={562}
          height={478}
        />
      </CustomLink>
      <div className={styles.case__infos}>
        <h2 className={styles.case__title}>{title}</h2>
        <p className={styles.case__tags}>{tags}</p>
        <p className={styles.case__description}>{description}</p>
        <CustomLink className={styles.case__link} href={link.site}>
          acesse o projeto
        </CustomLink>
        {link.github && (
          <CustomLink className={styles.case__link} href={link.github}>
            github
          </CustomLink>
        )}
      </div>
    </div>
  )
}

export default Case
