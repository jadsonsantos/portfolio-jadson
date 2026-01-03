'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import Container from 'components/Container'

import styles from './Cases.module.scss'

import { Category, projects, ProjectType } from './data'

import { ExternalLink, Github } from 'lucide-react'

const Cases = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.Todos)

  const filteredProjects = useMemo(
    () =>
      activeCategory === Category.Todos
        ? projects.filter((p) => p.isActive)
        : projects.filter((p) => p.isActive && p.category === activeCategory),
    [activeCategory]
  )

  return (
    <section className={styles.cases} id="cases">
      <Container>
        <h2 className={styles.cases__title}>Meus Projetos</h2>
        <p className={styles.cases__subtitle}>
          Conheça alguns dos projetos que desenvolvi, com foco em boas práticas
          e experiência do usuário.
        </p>

        <div className={styles.cases__filters}>
          {Object.values(Category).map((category) => (
            <button
              key={category}
              className={`${styles.cases__filter} ${
                activeCategory === category
                  ? styles['cases__filter--active']
                  : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.cases__grid}>
          {filteredProjects.map((project: ProjectType) => (
            <article key={project.id} className={styles.cases__card}>
              <div className={styles.cases__imageWrapper}>
                <Image
                  src={`/images/${project.image}`}
                  alt={project.title}
                  fill
                  className={styles.cases__image}
                />
              </div>

              <div className={styles.cases__cardContent}>
                <h3 className={styles.cases__cardTitle}>{project.title}</h3>
                <p className={styles.cases__cardDescription}>
                  {project.description}
                </p>

                <div className={styles.cases__tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.cases__tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cases__links}>
                  {project.links.site && (
                    <Link
                      href={project.links.site}
                      target="_blank"
                      className={styles.cases__link}
                    >
                      <ExternalLink size={16} />
                      Ver
                    </Link>
                  )}
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      className={styles.cases__link}
                    >
                      <Github size={16} />
                      Código
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Cases
