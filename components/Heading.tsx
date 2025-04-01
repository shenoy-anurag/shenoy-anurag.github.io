'use client'
import { Separator } from '@/components/ui/separator'
import portfolioData from '@/data/portfolioData'

export default function Heading() {
  return (
    <>
      <div className="mt-4 flex flex-col gap-8 lg:mt-14 lg:gap-10">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
          {portfolioData.headline}
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
          {portfolioData.headerSubtitle}
        </h3>
        <Separator className="mt-4" />
      </div>
      <div className="pt-8 pb-18">
        <h6 className="text-md md:text-lg">{portfolioData.lookBelow}</h6>
      </div>
    </>
  )
}
