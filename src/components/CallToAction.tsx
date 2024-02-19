import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/ButtonFullWidth'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Rent a court today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Check out our schedule and book your basketball or volleyball court
            in just 30 seconds. Secure the perfect spot for your next game
            today.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href="https://htownthundergym.ezfacility.com/"
              target="_blank"
              className="text-md cursor-pointer rounded-lg bg-indigo-500 px-20 py-3 text-center font-semibold text-white"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
