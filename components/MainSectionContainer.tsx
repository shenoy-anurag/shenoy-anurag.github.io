import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MainSectionContainer({ children }: Props) {
  return (
    // eslint-disable-next-line prettier/prettier
    <section className="relative mx-auto pr-[calc(100vw-100%)] pl-[calc(100vw-100%)] text-white">
      {children}
    </section>
  )
}
