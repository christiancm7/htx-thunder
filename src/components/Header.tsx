'use client'

import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XMarkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 18L18 6M6 6l12 12"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Popover.Button<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <Popover.Button
      as={Link}
      className="hover:text-primary-600 block text-lg font-medium leading-7 tracking-tight text-gray-700 transition-colors"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <nav>
        <Container className="relative flex justify-between px-0 py-4">
          <div className="relative z-10 -ml-6 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 transition-colors hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {open ? (
                      <XMarkIcon className="h-6 w-6" />
                    ) : (
                      <MenuIcon className="h-6 w-6" />
                    )}
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-900/20 backdrop-blur-sm"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-3xl border border-gray-100 bg-white px-8 pb-8 pt-20 shadow-2xl shadow-gray-900/10"
                        >
                          <div className="space-y-6">
                            <MobileNavLink href="/">Home</MobileNavLink>
                            <MobileNavLink href="/about">About</MobileNavLink>
                            <MobileNavLink href="/programs">
                              Programs
                            </MobileNavLink>
                            <MobileNavLink href="/contact">
                              Contact
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Link
                              href="/register"
                              className="btn-primary w-full justify-center"
                            >
                              Register Now
                            </Link>
                            <Link
                              href="/contact"
                              className="btn-secondary w-full justify-center"
                            >
                              Contact Us
                            </Link>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <Link
                href="/contact"
                className="hover:text-primary-600 font-medium text-gray-700 transition-colors"
              >
                Contact
              </Link>
              <Link href="/register" className="btn-primary">
                Register Now
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
