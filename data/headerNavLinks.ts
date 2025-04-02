import portfolioData from './portfolioData'

const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  // { href: '/tags', title: 'Tags' },
  // { href: '/projects', title: 'Projects' },
  {
    href:
      portfolioData.resume.urlPdf ||
      'https://drive.google.com/file/d/1VlPHVgvttEx-UtJzm7N_Lzt5GHOepcUZ/view?usp=sharing',
    title: 'Résumé',
  },
]

export default headerNavLinks
