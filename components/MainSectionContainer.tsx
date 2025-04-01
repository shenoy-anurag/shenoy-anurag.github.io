import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MainSectionContainer({ children }: Props) {
  return <section className="h-[63dvh]">{children}</section>
}
