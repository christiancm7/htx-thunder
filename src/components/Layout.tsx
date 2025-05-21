import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
