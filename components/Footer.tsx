import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { IconsBundle, SocialIcon } from '@/components/social-icons'
import LetsConnect from './LetsConnect'

export default function Footer() {
  return (
    <footer>
      <LetsConnect />
      <div className="mt-16 mb-8 flex flex-col items-center gap-4">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href={siteMetadata.siteRepo}>View Source</Link>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <ul className="flex space-x-2">
            <li>{`Powered by`}</li>
            <li>{` • `}</li>
            <li>
              <IconsBundle kind="nextjs" href={'https://nextjs.org/'} size={5} />
            </li>
            <li>
              <IconsBundle kind="typescript" href={'https://www.typescriptlang.org/'} size={5} />
            </li>
            <li>
              <IconsBundle kind="tailwind" href={`https://tailwindcss.com/`} size={5} />
            </li>
            <li>
              <IconsBundle kind="umami" href={`https://umami.is/`} size={5} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
