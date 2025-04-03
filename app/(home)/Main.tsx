'use client'
import { useState } from 'react'
import { Separator } from '@radix-ui/react-separator'
import GradientAnimation from '@/components/GradientAnimation'
import Header from '@/components/Header'
import MainSectionContainer from '@/components/MainSectionContainer'
import SectionContainer from '@/components/SectionContainer'
import Heading from '@/components/Heading'
import Showcase from '@/components/Showcase'

export default function Home({ posts }) {
  const [animationProps, setAnimationProps] = useState({
    colorA: [0.1, 0.8, 0.3], // Green
    colorB: [0.2, 0.48, 0.5], // Bluish green
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
        <Header page="landing" />
        <Heading />
      </MainSectionContainer>
      <div>
        <MainSectionContainer>
          <Showcase />
          {/* {siteMetadata.newsletter?.provider && (
            <div className="flex items-center justify-center pt-4">
              <NewsletterForm />
            </div>
          )} */}
          <Separator
            orientation="horizontal"
            className="border-t border-gray-300 dark:border-white"
          />
        </MainSectionContainer>
      </div>
    </>
  )
}
