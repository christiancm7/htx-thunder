import Image from 'next/image'
import Link from 'next/link'

const amenities = [
  {
    name: 'Professional Court',
    description:
      'Full-size basketball court with professional-grade flooring and equipment',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    name: 'Training Equipment',
    description:
      'State-of-the-art training equipment for strength and conditioning',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    name: 'Video Analysis Room',
    description:
      'Dedicated space for game film review and performance analysis',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: 'Locker Rooms',
    description:
      'Clean, modern locker rooms with showers and storage facilities',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Recovery Area',
    description:
      'Dedicated space for post-training recovery and injury prevention',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Meeting Rooms',
    description:
      'Private spaces for team meetings and individual consultations',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
]

const features = [
  'Professional-grade basketball court',
  'Air-conditioned facility',
  'Ample parking',
  '24/7 security',
  'High-quality training equipment',
  'Video analysis capabilities',
  'Clean, modern amenities',
  'Convenient location',
]

export default function FacilitiesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/court.webp"
            alt="Houston Thunder Gym Court"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Houston Thunder Gym
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Our state-of-the-art training facility provides the perfect
              environment for athletes to develop their skills and reach their
              full potential.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Schedule a Tour
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center text-base font-medium text-gray-600 hover:text-blue-600"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              World-Class Training Facility
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The Houston Thunder Gym is more than just a basketball court. It's
              a comprehensive training center designed to help athletes excel at
              every level. Our facility combines professional-grade equipment
              with expert coaching to create the perfect environment for skill
              development and athletic growth.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Key Features
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative h-96 overflow-hidden rounded-2xl">
              <Image
                src="/court.webp"
                alt="Houston Thunder Gym Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Facility Amenities
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="text-blue-600">{amenity.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {amenity.name}
                </h3>
                <p className="mt-2 text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-24 rounded-2xl bg-gray-50">
          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Visit Our Facility
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Experience our world-class training environment firsthand.
                  Schedule a tour to see how our facility can help you achieve
                  your athletic goals.
                </p>
                <div className="mt-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Address
                      </h3>
                      <p className="mt-1 text-base text-gray-900">
                        123 Basketball Court Drive
                        <br />
                        Houston, TX 77001
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Hours
                      </h3>
                      <p className="mt-1 text-base text-gray-900">
                        Monday - Friday: 6:00 AM - 10:00 PM
                        <br />
                        Saturday - Sunday: 8:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="rounded-lg bg-white p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Schedule a Tour
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Contact us to arrange a visit and see our facility in
                    person.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      Or call us directly at{' '}
                      <a
                        href="tel:+1234567890"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
