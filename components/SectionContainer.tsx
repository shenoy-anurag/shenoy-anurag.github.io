import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    // <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</section>
    // <section className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">{children}</section>
    <section className="mx-auto px-[6vw] md:px-[3vw]">{children}</section>
  )
}
