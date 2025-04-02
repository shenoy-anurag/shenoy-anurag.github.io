import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import portfolioData from '@/data/portfolioData'
import { SocialIcon } from './social-icons'

export default function LetsConnect() {
  return (
    <div className="my-8 flex grow flex-col justify-between gap-16 text-xl md:my-24 lg:flex-row lg:items-start lg:text-2xl">
      <div className="flex flex-col gap-2 lg:flex-row">
        <p className="text-primary-500 font-bold">{portfolioData.contactSubHeading}&nbsp;</p>
        <p>
          Get in touch at&nbsp;
          <Link href={`mailto:${siteMetadata.email}`} className="underline">
            {siteMetadata.email}
          </Link>
        </p>
      </div>
      <div className="mt-1 flex flex-row place-content-center gap-4 lg:place-content-end">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
        <SocialIcon kind="github" href={siteMetadata.github} size={5} />
        <SocialIcon kind="kaggle" href={siteMetadata.kaggle} size={5} />
      </div>
    </div>
  )
}
