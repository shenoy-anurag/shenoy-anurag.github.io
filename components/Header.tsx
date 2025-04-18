import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

interface HeaderProps {
  page?: string
}

const Header = ({ page }: HeaderProps) => {
  let headerClass =
    'flex items-center w-full bg-none dark:bg-none py-[6vw] md:py-[3vw] justify-between'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }
  let headerNavLinksClass = ''
  if (page && page === 'landing') {
    headerNavLinksClass += ' text-gray-100 dark:text-gray-100'
    headerClass += ' text-gray-100'
  } else {
    headerNavLinksClass += ' text-gray-900 dark:text-gray-100'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="h-6 text-2xl font-normal sm:block">{siteMetadata.headerTitle}</div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="mt-2 flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6 md:mt-0">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96 xl:gap-x-6">
          {headerNavLinks
            // .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={
                  'hover:text-primary-500 dark:hover:text-primary-400 m-1 text-lg font-normal' +
                  headerNavLinksClass
                }
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
