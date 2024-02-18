import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Thunder Gym',
    default: 'Thunder Gym',
  },
  description:
    'Discover a dynamic range of offerings including tournaments, private training sessions, camps, and open gym access. Whether you are a seasoned player honing your skills or a newcomer eager to learn, our state-of-the-art facility and expert coaching staff are here to elevate your game.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}
