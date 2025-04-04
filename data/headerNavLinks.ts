import portfolioData from './portfolioData'

const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  // { href: '/tags', title: 'Tags' },
  // { href: '/projects', title: 'Projects' },
  {
    href: portfolioData.resume.urlPdf,
    title: 'Résumé',
  },
]

export default headerNavLinks
