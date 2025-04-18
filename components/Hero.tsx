'use client'
import { Separator } from '@/components/ui/separator'
import portfolioData from '@/data/portfolioData'

export default function Hero() {
  return (
    <>
      <div className="mt-10 flex flex-col gap-10 text-white md:mt-12 lg:mt-14 lg:gap-10">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
          {portfolioData.headline}
        </h1>
        <p className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
          {portfolioData.headerSubtitle}
        </p>
        <Separator className="mt-4" />
      </div>
      <div className="pt-8 pb-18 text-white">
        <p className="text-lg md:text-lg">{portfolioData.lookBelow}</p>
      </div>
    </>
  )
}
