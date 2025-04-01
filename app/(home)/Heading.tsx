'use client'
import portfolioData from '@/data/portfolioData'

export default function Heading() {
  return (
    <>
      <div className="my-5">
        <h1>{portfolioData.headline}</h1>
        <h3>{portfolioData.headerSubtitle}</h3>
      </div>
    </>
  )
}
