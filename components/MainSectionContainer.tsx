import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MainSectionContainer({ children }: Props) {
  return (
    // eslint-disable-next-line prettier/prettier
    <section className="relative mx-auto px-[6vw] md:px-[3vw]">
      {children}
    </section>
  )
}
