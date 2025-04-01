import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MainSectionContainer({ children }: Props) {
  return (
    // <section className="relative mx-auto pr-[calc(100vw-100%)] pl-[calc(100vw-100%)] text-white">
    // <section className="relative mx-auto h-[60dvh] text-white sm:h-[90dvh] md:h-[80dvh] lg:h-[70dvh] xl:h-[60dvh]">
    // eslint-disable-next-line prettier/prettier
    // <section className="relative mx-auto h-[75lvh] text-white">
    // eslint-disable-next-line prettier/prettier
    <section className="relative mx-auto pr-[calc(100vw-100%)] pl-[calc(100vw-100%)] text-white">
      {children}
    </section>
  )
}
