import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'E-Commerce Multi-Vendor',
  description: 'Marketplace with Customer, Seller, and Admin roles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
