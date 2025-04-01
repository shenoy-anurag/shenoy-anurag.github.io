'use client'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import GradientAnimation from '@/components/GradientAnimation'
import Header from '@/components/Header'
import Posts from './Posts'
import MainSectionContainer from '@/components/MainSectionContainer'
import SectionContainer from '@/components/SectionContainer'

export default function Home({ posts }: Props) {
  const [animationProps, setAnimationProps] = useState({
    colorA: [0.1, 0.8, 0.3], // Dark green
    colorB: [0.2, 0.5, 0.5], // Light green
    chaosLevel: 1.5,
    scale: 1.0,
  })

  return (
    <>
      <MainSectionContainer>
        <GradientAnimation
          colorA={animationProps.colorA}
          colorB={animationProps.colorB}
          chaosLevel={animationProps.chaosLevel}
          scale={animationProps.scale}
        />
        <SectionContainer>
          <Header />
        </SectionContainer>
      </MainSectionContainer>
      <SectionContainer>
        <Posts posts={posts} />
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}
      </SectionContainer>
    </>
  )
}
