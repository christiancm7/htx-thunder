import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-blue-500" />
              <div className="ml-4">
                <p className="text-base font-semibold">New Wave Academy</p>
                <p className="mt-1 text-sm">
                  <a
                    href="https://maps.google.com/maps?q=5811+Chimney+Rock+Road+Houston+TX+77081"
                    target="_blank"
                  >
                    5811 Chimney Rock Road Houston, TX 77081
                  </a>
                </p>
                <p className="mt-1 text-sm">
                  <a href="mailto:info@newwaveacademy.com">
                    info@newwaveacademy.com
                  </a>
                </p>
                <p className="mt-1 text-sm">
                  <a href="tel:281-889-0047">281-889-0047</a>
                </p>
              </div>
            </div>
            <nav className="mt-8 flex flex-col sm:flex-row sm:gap-x-8">
              <div className="space-y-2 sm:hidden">
                <Link
                  href="/"
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  About
                </Link>
                <Link
                  href="/programs"
                  className="block text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  Programs
                </Link>
              </div>
              <div className="mt-4 space-y-2 sm:mt-0 sm:hidden">
                <Link
                  href="/facilities"
                  className="block text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  Facilities
                </Link>
                <Link
                  href="/admissions"
                  className="block text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  Admissions
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </div>
              <div className="hidden sm:flex sm:gap-8">
                <NavLinks />
              </div>
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-blue-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="/register">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Register for a program
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to apply for our training programs
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()} New Wave Academy. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
