import Image from 'next/image'
import Link from 'next/link'
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  TrophyIcon,
  StarIcon,
  ArrowRightIcon,
  PlayIcon,
} from '@heroicons/react/20/solid'

const basketballProgram = {
  id: 'youth-basketball-training',
  name: 'Complete Basketball Training',
  ageRange: 'All Ages Welcome',
  tagline: 'Building Champions for Life',
  description:
    'Comprehensive basketball training program designed for kids of all ages and skill levels. We build fundamental skills, confidence, and love for the game.',
  longDescription:
    'Our basketball training program welcomes young athletes of every age and skill level. We focus on developing fundamental skills, building confidence, and fostering a lifelong love for basketball in a fun, supportive environment. From beginners learning their first dribble to advanced players refining their technique, every child receives personalized attention and age-appropriate instruction.',
  features: [
    'Fundamental Skills Development',
    'Shooting Technique & Form',
    'Ball Handling & Dribbling',
    'Defensive Positioning & Movement',
    'Game Strategy & Basketball IQ',
    'Physical Conditioning & Fitness',
    'Teamwork & Sportsmanship',
    'Age-Appropriate Skill Progression',
    'Character Building & Life Skills',
    'Individual Progress Tracking',
  ],
  highlights: [
    'All skill levels welcome',
    'Age-appropriate instruction',
    'Fun, supportive environment',
  ],
  image:
    'https://images.unsplash.com/photo-1520399636535-24741e71b160?q=80&w=1000&auto=format&fit=crop',
  price: '$199',
  priceUnit: '/month',
  schedule: 'Multiple Sessions Available',
  time: 'Afternoons & Evenings',
  sessions: '2-3 sessions per week',
  duration: '90 minutes',
  groupSize: '8-12 players',
  color: 'from-primary-600 to-primary-700',
  accentColor: 'from-accent-500 to-accent-600',
  category: 'Youth Development',
}

const programBenefits = [
  {
    title: 'All Ages Welcome',
    description:
      'Training programs adapted for every skill level and age group',
    icon: UserGroupIcon,
  },
  {
    title: 'Expert Coaching',
    description: 'Professional coaches who understand youth development',
    icon: TrophyIcon,
  },
  {
    title: 'Fun Environment',
    description: 'Learning basketball through engaging, positive experiences',
    icon: StarIcon,
  },
]

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Basketball training session"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/80 to-primary-900/95"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 animate-pulse-slow rounded-full bg-primary-500/10 blur-3xl"></div>
          <div className="absolute -left-40 top-1/2 h-96 w-96 animate-pulse-slow rounded-full bg-accent-500/10 blur-3xl delay-1000"></div>
        </div>

        <div className="relative flex min-h-[80vh] items-center">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-8 flex justify-center">
                <div className="group relative rounded-full px-4 py-2 text-sm leading-6 text-gray-300 ring-1 ring-gray-600 transition-all duration-300 hover:ring-gray-500">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600/20 to-accent-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400"></span>
                    Youth Basketball Training Program
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">Complete Basketball</span>
                <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 bg-clip-text text-transparent">
                  Training Program
                </span>
              </h1>

              {/* Subheading */}
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-300 sm:text-2xl">
                Our comprehensive basketball training program welcomes kids of
                all ages and skill levels. From fundamental skills to advanced
                techniques, we build well-rounded players in a fun, supportive
                environment.
              </p>

              {/* Program Benefits */}
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {programBenefits.map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="text-base font-semibold uppercase leading-7 tracking-wide text-primary-600">
              Our Training Program
            </h2>
            <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Complete Basketball
              <span className="gradient-text"> Development</span>
            </p>
            <p className="mt-6 text-balance text-xl leading-8 text-gray-600">
              Our comprehensive program is designed to meet young players where
              they are and help them develop their skills, confidence, and love
              for basketball.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative h-96 lg:h-auto lg:w-1/2">
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900/60 via-gray-900/20 to-transparent" />
                  <img
                    src={basketballProgram.image}
                    alt={basketballProgram.name}
                    className="h-full w-full object-cover"
                  />

                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                      <span
                        className={`h-2 w-2 rounded-full bg-gradient-to-r ${basketballProgram.accentColor}`}
                      ></span>
                      {basketballProgram.category}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                  {/* Program Header */}
                  <div className="mb-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                        {basketballProgram.ageRange}
                      </span>
                      <span className="h-1 w-8 bg-gradient-to-r from-primary-600 to-accent-600"></span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                      {basketballProgram.name}
                    </h3>
                    <p className="mt-2 text-lg font-medium text-accent-600">
                      {basketballProgram.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    {basketballProgram.longDescription}
                  </p>

                  {/* Features Grid */}
                  <div className="mb-8">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
                      What We Cover
                    </h4>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {basketballProgram.features.map((feature) => (
                        <div key={feature} className="flex items-start">
                          <CheckIcon className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="mb-8 grid grid-cols-2 gap-6 border-t border-gray-100 pt-6 lg:grid-cols-3">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <ClockIcon className="h-4 w-4" />
                        Schedule
                      </div>
                      <p className="mt-1 text-sm text-gray-900">
                        {basketballProgram.schedule}
                      </p>
                      <p className="text-xs text-gray-500">
                        {basketballProgram.time}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <UserGroupIcon className="h-4 w-4" />
                        Group Size
                      </div>
                      <p className="mt-1 text-sm text-gray-900">
                        {basketballProgram.groupSize}
                      </p>
                      <p className="text-xs text-gray-500">
                        {basketballProgram.duration}
                      </p>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <CurrencyDollarIcon className="h-4 w-4" />
                        Monthly Rate
                      </div>
                      <p className="mt-1 text-2xl font-bold text-gray-900">
                        {basketballProgram.price}
                        <span className="text-sm font-normal text-gray-500">
                          {basketballProgram.priceUnit}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/register"
                      className="btn-primary flex-1 justify-center"
                    >
                      <span>Register Now</span>
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="flex flex-1 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-primary-50 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Our Program Section */}
      <div className="section-padding">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="glass-effect overflow-hidden rounded-3xl">
            <div className="px-8 py-16 sm:px-16 lg:px-24">
              <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                    Why Choose Our
                    <span className="gradient-text"> Basketball Program?</span>
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our program is designed to provide the best basketball
                    training experience for young athletes, focusing on skill
                    development, character building, and fun.
                  </p>

                  <div className="mt-10 space-y-6">
                    {[
                      'Age-appropriate training for all skill levels',
                      'Positive, encouraging learning environment',
                      'Focus on fundamentals and character development',
                      'Led by Head Coach Nicholas Perez, expert in youth development',
                      'Small group sizes for personalized attention',
                      'Flexible scheduling options for busy families',
                    ].map((feature) => (
                      <div key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon className="h-6 w-6 text-primary-600" />
                        </div>
                        <p className="ml-4 text-base text-gray-600">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 lg:col-span-1 lg:mt-0">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary-600/10 to-accent-600/10 blur-xl"></div>
                    <div className="relative rounded-2xl bg-white p-8 shadow-xl">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Ready to Get Started?
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        Join our basketball program and watch your child develop
                        skills, confidence, and a lifelong love for the game.
                      </p>

                      <div className="mt-8 space-y-4">
                        <Link
                          href="/register"
                          className="btn-primary w-full justify-center"
                        >
                          Register Now
                        </Link>

                        <div className="text-center">
                          <p className="text-sm text-gray-500">
                            Questions? Call us at{' '}
                            <a
                              href="tel:281-889-0047"
                              className="font-medium text-primary-600 hover:text-primary-500"
                            >
                              (281) 889-0047
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Program Benefits */}
                      <div className="mt-8 border-t border-gray-100 pt-6">
                        <h4 className="text-sm font-semibold text-gray-900">
                          What&apos;s Included:
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-600">
                          <li>• Professional basketball instruction</li>
                          <li>• Character development and life skills</li>
                          <li>• Age-appropriate skill progression</li>
                          <li>• Fun, supportive team environment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Basketball arena"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
        </div>

        <div className="section-padding relative">
          <div className="container-padding mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Start Your Child&apos;s
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                {' '}
                Basketball Journey
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-xl leading-8 text-gray-300">
              Give your child the opportunity to learn basketball in a fun,
              supportive environment. Our comprehensive program builds skills,
              confidence, and character.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/register"
                className="btn-primary px-8 py-4 text-lg shadow-2xl hover:shadow-accent-500/25"
              >
                Register Today
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center text-lg font-semibold leading-6 text-white transition-colors hover:text-accent-300"
              >
                Tour Our Facility
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
