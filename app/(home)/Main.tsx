'use client'
import { useState } from 'react'
import { Separator } from '@radix-ui/react-separator'
import GradientAnimation from '@/components/GradientAnimation'
import Header from '@/components/Header'
import MainSectionContainer from '@/components/MainSectionContainer'
import Hero from '@/components/Hero'
import Showcase from '@/components/Showcase'
import { COLOR_A, COLOR_B } from './colors'

export default function Home() {
  const colorA = COLOR_A
  const colorB = COLOR_B
  const [animationProps, setAnimationProps] = useState({
    colorA: [colorA[0] / 255, colorA[1] / 255, colorA[2] / 255], // Bright green
    colorB: [colorB[0] / 255, colorB[1] / 255, colorB[2] / 255], // Paradise blue
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
        <Hero />
      </MainSectionContainer>
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
    </>
  )
}
