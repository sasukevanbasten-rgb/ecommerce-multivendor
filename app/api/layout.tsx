import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API',
  description: 'API routes'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
