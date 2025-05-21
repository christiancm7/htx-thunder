import Image from 'next/image'
import Link from 'next/link'

const programs = [
  {
    name: 'Youth Development (Ages 5-12)',
    description:
      'Build fundamental skills and develop a love for the game in a fun, engaging environment.',
    features: [
      'Basic basketball fundamentals',
      'Age-appropriate drills and games',
      'Focus on coordination and motor skills',
      'Small group instruction',
      'Positive reinforcement and encouragement',
      '2 sessions per week',
    ],
    image:
      'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=1000&auto=format&fit=crop',
    price: '$199/month',
    ageRange: '5-12 years',
    schedule: 'Mon/Wed or Tue/Thu, 4:00 PM - 5:30 PM',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'Elite Training (Ages 13-18)',
    description:
      'Advanced training program for serious players looking to elevate their game to the next level.',
    features: [
      'Advanced skill development',
      'Game situation training',
      'Strength and conditioning',
      'Basketball IQ development',
      'Performance analytics',
      '3 sessions per week',
    ],
    image:
      'https://images.unsplash.com/photo-1546519638-68e109acd27b?q=80&w=1000&auto=format&fit=crop',
    price: '$299/month',
    ageRange: '13-18 years',
    schedule: 'Mon/Wed/Fri, 5:30 PM - 7:30 PM',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'High School Elite',
    description:
      'Intensive training program designed for high school athletes preparing for college basketball.',
    features: [
      'College-level training',
      'Position-specific development',
      'Game film analysis',
      'Strength and conditioning',
      'Recruitment preparation',
      '4 sessions per week',
    ],
    image:
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1000&auto=format&fit=crop',
    price: '$399/month',
    ageRange: '14-18 years',
    schedule: 'Mon-Thu, 6:00 PM - 8:00 PM',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'One-on-One Training',
    description:
      'Personalized training sessions with our expert coaches for players of all ages.',
    features: [
      'Customized training plan',
      'Individual attention',
      'Flexible scheduling',
      'Video analysis',
      'Progress tracking',
      'Available 7 days a week',
    ],
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
    price: '$75/session',
    ageRange: 'All ages',
    schedule: 'Flexible scheduling',
    color: 'from-blue-600 to-blue-700',
  },
]

export default function ProgramsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Elevate Your Game</span>
                  <span className="block text-blue-600">With Our Programs</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 sm:mt-6">
                  Discover our comprehensive training programs designed to
                  develop players at every level. From beginners to elite
                  athletes, we have a program that will help you reach your full
                  potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={program.name}
              className={`relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-64 lg:h-auto lg:w-1/2">
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 to-transparent" />
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:w-1/2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full bg-gradient-to-r ${program.color}`}
                    />
                    <span className="text-sm font-medium text-gray-500">
                      {program.ageRange}
                    </span>
                  </div>
                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    {program.name}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    {program.description}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                      Program Features
                    </h3>
                    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {program.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-600"
                        >
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
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Schedule
                      </p>
                      <p className="mt-1 text-sm text-gray-900">
                        {program.schedule}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Price</p>
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {program.price}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/register"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Programs Section */}
        <div className="relative mt-24">
          <div className="absolute inset-0 bg-gray-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="px-6 py-12 sm:px-12 lg:px-16">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="lg:col-span-1">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Custom Training Programs
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      Looking for something specific? We offer personalized
                      training solutions tailored to your unique goals and
                      needs.
                    </p>
                    <div className="mt-8 space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-blue-600"
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
                        </div>
                        <p className="ml-3 text-base text-gray-600">
                          Individual or group training sessions
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-blue-600"
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
                        </div>
                        <p className="ml-3 text-base text-gray-600">
                          Flexible scheduling options
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-blue-600"
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
                        </div>
                        <p className="ml-3 text-base text-gray-600">
                          Specialized skill development
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 lg:col-span-1 lg:mt-0">
                    <div className="rounded-lg bg-gray-50 p-8">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Get Started Today
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        Contact us to discuss your training goals and create a
                        custom program that fits your needs.
                      </p>
                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Schedule a Consultation
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
      </div>
    </div>
  )
}
