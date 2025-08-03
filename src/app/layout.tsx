import { Inter, Poppins, Outfit } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: {
    template: '%s - New Wave Academy',
    default: 'New Wave Academy | Houston Basketball Training',
  },
  description:
    "New Wave Academy is Houston's premier basketball training facility. We offer elite training programs, camps, and development opportunities for players of all ages and skill levels. Join us to elevate your game with our state-of-the-art facilities and expert coaching from Nicholas Perez.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-gray-50 antialiased',
        inter.variable,
        poppins.variable,
        outfit.variable,
      )}
    >
      <body className="flex h-full flex-col font-sans">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}
