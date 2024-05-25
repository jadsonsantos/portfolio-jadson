const skills = [
  {
    title: 'Linguagens:',
    content:
      'HTML5, Pug.js, CSS3, Sass, Styled Components, JavaScript, TypeScript, ReactJs, NextJs, VTEX CMS'
  },
  {
    title: 'Dev Tools:',
    content:
      'VS Code, Bootstrap, Git, Github, Bitbucket, New Relic, Jest, Cypress'
  }
]

const socialLinks = [
  {
    link: 'https://www.linkedin.com/in/jadsonsantos/',
    title: 'linkedin'
  },
  {
    link: 'https://github.com/jadsonsantos/',
    title: 'github'
  },
  {
    link: `${process.env.WHATSAPP_URL}`,
    title: 'whatsapp'
  }
]

const about = `Desenvolvedor Front-End graduado em Ciência da Computação, dedicado à criação de websites responsivos, otimizados para performance e SEO, visando alcançar alta visibilidade nos mecanismos de busca.`

export { skills, socialLinks, about }
