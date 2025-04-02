import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import SectionContainer from '@/components/SectionContainer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SectionContainer>{children}</SectionContainer>
}
