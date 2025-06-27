import { useId } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ButtonFullWidth'
import { Container } from '@/components/Container'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/court.webp"
          alt="New Wave Academy basketball court"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/95"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary-500/10 animate-pulse-slow absolute -right-40 -top-40 h-80 w-80 rounded-full blur-3xl"></div>
        <div className="bg-accent-500/10 animate-pulse-slow absolute -left-40 top-1/2 h-96 w-96 rounded-full blur-3xl delay-1000"></div>
        <div className="bg-primary-600/10 animate-pulse-slow delay-2000 absolute -bottom-40 right-1/3 h-64 w-64 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            {/* Badge */}
            <div className="flex">
              <div className="group relative rounded-full px-4 py-2 text-sm leading-6 text-gray-300 ring-1 ring-gray-600 transition-all duration-300 hover:ring-gray-500">
                <span className="from-primary-600/20 to-accent-600/20 absolute inset-0 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative flex items-center gap-2">
                  <span className="bg-accent-400 h-2 w-2 animate-pulse rounded-full"></span>
                  Now Enrolling for 2024 Programs
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="mt-10 max-w-lg text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              <span className="from-primary-400 via-primary-500 to-accent-400 font-heading block bg-gradient-to-r bg-clip-text text-transparent">
                New.Wave
              </span>
              <span className="font-heading block">Academy</span>
            </h1>

            {/* Subheading */}
            <p className="mt-8 text-xl leading-8 text-gray-300 sm:text-2xl lg:max-w-xl">
              Houston&apos;s premier basketball academy where champions are
              forged through elite training, cutting-edge technology, and
              unwavering dedication to excellence.
            </p>

            {/* Features List */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="bg-primary-500 h-2 w-2 rounded-full"></div>
                Professional Coaches
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-accent-500 h-2 w-2 rounded-full"></div>
                Championship Facilities
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary-500 h-2 w-2 rounded-full"></div>
                Proven Results
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/register"
                className="from-primary-600 to-primary-700 hover:shadow-primary-500/25 focus:ring-primary-500 group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <span className="from-primary-700 to-primary-800 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative flex items-center gap-2">
                  Start Your Journey
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href="/programs"
                className="hover:border-primary-500 hover:bg-primary-500/10 focus:ring-primary-500 group inline-flex items-center justify-center rounded-lg border-2 border-gray-600 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <span className="flex items-center gap-2">
                  View Programs
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-16 border-t border-gray-700 pt-8">
              <p className="mb-4 text-sm font-medium text-gray-400">
                Trusted by Elite Athletes
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-400">
                    Scholarships Earned
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-xs text-gray-400">Improvement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-xs text-gray-400">Pro Coaches</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side content - Video/Image */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative">
                {/* Glowing border effect */}
                <div className="from-primary-600/20 to-accent-600/20 absolute -inset-4 rounded-3xl bg-gradient-to-r blur-xl"></div>

                {/* Main image container */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="New Wave Academy training facility"
                    width={800}
                    height={1000}
                    className="h-96 w-full object-cover lg:h-[700px]"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
