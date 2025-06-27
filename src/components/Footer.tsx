import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/20/solid'

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: React.ComponentPropsWithoutRef<'svg'>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props: React.ComponentPropsWithoutRef<'svg'>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348c0-1.297 1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348c0 1.297-1.051 2.348-2.348 2.348zM12.017 7.346c-2.567 0-4.641 2.074-4.641 4.641c0 2.567 2.074 4.641 4.641 4.641c2.567 0 4.641-2.074 4.641-4.641c0-2.567-2.074-4.641-4.641-4.641z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props: React.ComponentPropsWithoutRef<'svg'>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
]

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Contact', href: '/contact' },
]

const programLinks = [
  { name: 'Youth Development', href: '/programs#youth-development' },
  { name: 'Elite Training', href: '/programs#elite-training' },
  { name: 'High School Elite', href: '/programs#high-school-elite' },
  { name: 'Individual Training', href: '/programs#individual-training' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-padding mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-16 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center text-white">
              {/* <Logomark className="fill-primary-500 h-10 w-10 flex-none" /> */}
              <div className="ml-4">
                <p className="text-xl font-bold">New Wave Academy</p>
                <p className="text-gray-400">Elite Basketball Excellence</p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-gray-300">
              Houston&apos;s premier basketball academy where champions are
              forged through world-class training, cutting-edge technology, and
              unwavering dedication to excellence.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary-400 text-gray-400 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 text-gray-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-white">Programs</h3>
            <ul className="mt-6 space-y-4">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 text-gray-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <MapPinIcon className="text-primary-400 mt-0.5 h-5 w-5 flex-shrink-0" />
                <div className="ml-3">
                  <a
                    href="https://maps.google.com/maps?q=5811+Chimney+Rock+Road+Houston+TX+77081"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-400 text-gray-300 transition-colors"
                  >
                    5811 Chimney Rock Road
                    <br />
                    Houston, TX 77081
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <PhoneIcon className="text-primary-400 h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:281-889-0047"
                  className="hover:text-primary-400 ml-3 text-gray-300 transition-colors"
                >
                  (281) 889-0047
                </a>
              </div>

              <div className="flex items-center">
                <EnvelopeIcon className="text-primary-400 h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@newwaveacademy.com"
                  className="hover:text-primary-400 ml-3 text-gray-300 transition-colors"
                >
                  info@newwaveacademy.com
                </a>
              </div>

              <div className="flex items-start">
                <ClockIcon className="text-primary-400 mt-0.5 h-5 w-5 flex-shrink-0" />
                <div className="ml-3 text-gray-300">
                  <p className="font-medium">Training Hours:</p>
                  <p className="text-sm">Mon-Fri: 3:00 PM - 9:00 PM</p>
                  <p className="text-sm">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="border-t border-gray-800 py-12">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Ready to Start Your Basketball Journey?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">
              Join Houston&apos;s most elite basketball academy and unlock your
              potential with proven training methods and championship-level
              coaching.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/register" className="btn-primary px-8 py-3 text-lg">
                Register Now
              </Link>
              <Link
                href="/contact"
                className="border-primary-500 text-primary-400 hover:bg-primary-500 inline-flex items-center justify-center rounded-lg border-2 px-8 py-3 text-lg font-semibold transition-all hover:text-white"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} New Wave Academy. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link
                  href="/privacy"
                  className="hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="hover:text-primary-400 transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
