'use client'

import {
  CheckCircleIcon,
  TrophyIcon,
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  WifiIcon,
  ShieldCheckIcon,
  CameraIcon,
  BuildingOfficeIcon,
  StarIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { label: 'Founded', value: '2020', highlight: false },
  { label: 'Years Experience', value: '20+', highlight: true },
  { label: 'Players Trained', value: '5,000+', highlight: false },
  { label: 'Success Rate', value: '100%', highlight: true },
]

const facilityFeatures = [
  {
    name: 'Championship Courts',
    description:
      'Six regulation-size basketball courts with professional-grade hardwood flooring and NBA-standard equipment.',
    icon: TrophyIcon,
    image: '/court.webp',
    features: [
      'Professional hardwood flooring',
      'NBA-regulation backboards',
      'Advanced court lighting',
      'Climate-controlled environment',
    ],
  },
  {
    name: 'Strength & Conditioning Center',
    description:
      'State-of-the-art fitness facility with basketball-specific training equipment and recovery technology.',
    icon: HeartIcon,
    image:
      'https://plus.unsplash.com/premium_photo-1675364965052-fdb98d1ddd67?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Olympic weightlifting platforms',
      'Plyometric training areas',
      'Recovery and mobility zones',
      'Performance monitoring systems',
    ],
  },
  {
    name: 'Video Analysis Suite',
    description:
      'Cutting-edge technology center for detailed game film study and performance analysis.',
    icon: CameraIcon,
    image:
      'https://cdn1.sportngin.com/attachments/photo/2198/5002/04prep0205_large.jpg',
    features: [
      'High-definition camera systems',
      'Real-time performance analytics',
      'Interactive video breakdown',
      'Individual progress tracking',
    ],
  },
]

const amenities = [
  {
    title: 'Player Lounge',
    description: 'Comfortable space for players to relax and socialize',
    icon: UserGroupIcon,
  },
  {
    title: 'Nutrition Center',
    description: 'Healthy meal options and hydration stations',
    icon: HeartIcon,
  },
  {
    title: 'Pro Shop',
    description: 'Equipment, apparel, and basketball accessories',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Secure Storage',
    description: 'Personal lockers and equipment storage',
    icon: ShieldCheckIcon,
  },
  {
    title: 'High-Speed WiFi',
    description: 'Complimentary internet throughout the facility',
    icon: WifiIcon,
  },
  {
    title: 'Viewing Areas',
    description: 'Comfortable seating for parents and guests',
    icon: StarIcon,
  },
]

const operatingHours = [
  { day: 'Monday - Friday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
  { day: 'Holidays', hours: 'Limited Hours' },
]

const values = [
  {
    title: 'Excellence',
    description:
      'We pursue excellence in every aspect of basketball development, from fundamental skills to advanced techniques.',
  },
  {
    title: 'Character',
    description:
      'We believe in developing not just better players, but better people through basketball.',
  },
  {
    title: 'Innovation',
    description:
      'We continuously evolve our training methods using the latest technology and sports science.',
  },
  {
    title: 'Community',
    description:
      'We foster a supportive community where every player can thrive and reach their potential.',
  },
]

const coaches = [
  {
    name: 'Nicholas Perez',
    role: 'Head Coach / Program Director',
    experience: 'Former Professional Player & Elite Training Specialist',
    specialties: [
      'Youth Development',
      'Fundamental Skills',
      'Character Building',
      'Game Strategy',
      'Individual Skill Development',
      'Team Building',
    ],
    imageUrl: '/nickphoto.png',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Basketball training session"
              fill
              className="object-cover opacity-20"
              priority
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
                      Established 2015 • Houston&apos;s Premier Academy
                    </span>
                  </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  <span className="block">Where</span>
                  <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 bg-clip-text text-transparent">
                    Champions
                  </span>
                  <span className="block">Are Forged</span>
                </h1>

                {/* Subheading */}
                <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-300 sm:text-2xl">
                  For nearly a decade, New Wave Academy has been Houston&apos;s
                  premier destination for elite basketball development,
                  transforming athletes through world-class training and
                  championship mindset cultivation.
                </p>

                {/* Stats Grid */}
                <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                        <TrophyIcon className="h-6 w-6" />
                      </div>
                      <div
                        className={`text-2xl font-bold lg:text-3xl ${
                          stat.highlight ? 'gradient-text' : 'text-white'
                        }`}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="section-padding bg-gray-50">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2 className="text-base font-semibold uppercase leading-7 tracking-wide text-primary-600">
                Our Story
              </h2>
              <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                Building Champions
                <span className="gradient-text"> Since 2015</span>
              </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-xl leading-8 text-gray-600">
                  New Wave Academy was founded with a revolutionary vision: to
                  create Houston&apos;s most comprehensive basketball
                  development ecosystem where elite training meets character
                  building.
                </p>
                <p className="leading-relaxed text-gray-600">
                  Our journey began when a group of former professional and
                  collegiate players recognized the need for a training facility
                  that went beyond traditional coaching. We wanted to create an
                  environment where young athletes could develop not just their
                  basketball skills, but also their leadership abilities, mental
                  toughness, and life skills.
                </p>
                <p className="leading-relaxed text-gray-600">
                  Today, we&apos;re proud to have developed over 5,000 players,
                  with 95% showing measurable improvement within their first 90
                  days. Our graduates have earned hundreds of college
                  scholarships and several have gone on to play professionally.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary-600">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">
                      Scholarships Earned
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-accent-600">
                      20K+
                    </div>
                    <div className="text-sm text-gray-600">Training Hours</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary-600/10 to-accent-600/10 blur-xl"></div>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=1000&auto=format&fit=crop"
                    alt="Basketball training academy"
                    width={600}
                    height={400}
                    className="h-96 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="section-padding">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2 className="text-base font-semibold uppercase leading-7 tracking-wide text-primary-600">
                Our Values
              </h2>
              <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                What Drives
                <span className="gradient-text"> Our Excellence</span>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card-hover group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Facility Features Section */}
        <div className="section-padding bg-gray-50">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2 className="text-base font-semibold uppercase leading-7 tracking-wide text-primary-600">
                Elite Facilities
              </h2>
              <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                Every Detail Designed for
                <span className="gradient-text"> Championship Excellence</span>
              </p>
              <p className="mt-6 text-balance text-xl leading-8 text-gray-600">
                Our state-of-the-art facility provides everything needed to
                develop elite basketball players at every level of their
                journey.
              </p>
            </div>

            <div className="space-y-24">
              {facilityFeatures.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="relative h-96 lg:h-auto lg:w-1/2">
                      <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900/60 via-gray-900/20 to-transparent" />
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        fill
                        className="object-cover"
                      />

                      {/* Icon Overlay */}
                      <div className="absolute bottom-6 left-6 z-20">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg">
                          <feature.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                          {feature.name}
                        </h3>
                      </div>

                      <p className="mb-8 text-lg leading-relaxed text-gray-600">
                        {feature.description}
                      </p>

                      {/* Features List */}
                      <div className="mb-8">
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {feature.features.map((item) => (
                            <div key={item} className="flex items-start">
                              <CheckIcon className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600" />
                              <span className="text-sm text-gray-600">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div>
                        <Link
                          href="/contact"
                          className="btn-primary inline-flex items-center"
                        >
                          <span>Schedule Tour</span>
                          <svg
                            className="ml-2 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="section-padding">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-base font-semibold uppercase leading-7 tracking-wide text-primary-600">
                Premium Amenities
              </h2>
              <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                Complete Basketball
                <span className="gradient-text"> Ecosystem</span>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((amenity) => (
                <div
                  key={amenity.title}
                  className="card-hover group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg">
                      <amenity.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {amenity.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hours & Location Section */}
        <div className="section-padding bg-gray-50">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              {/* Operating Hours */}
              <div className="glass-effect rounded-3xl p-8 lg:p-12">
                <div className="mb-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                    <ClockIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Operating Hours
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Open 7 days a week for your convenience
                  </p>
                </div>

                <div className="space-y-4">
                  {operatingHours.map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex items-center justify-between border-b border-gray-100 pb-4"
                    >
                      <span className="font-medium text-gray-900">
                        {schedule.day}
                      </span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-sm text-gray-500">
                    * 24/7 access available for Elite program members
                  </p>
                </div>
              </div>

              {/* Location & Contact */}
              <div className="mt-12 lg:mt-0">
                <div className="glass-effect rounded-3xl p-8 lg:p-12">
                  <div className="mb-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                      <MapPinIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Visit Our Facility
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Conveniently located in Houston, Texas
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900">Address</h4>
                      <p className="mt-1 text-gray-600">
                        5811 Chimney Rock Road
                        <br />
                        Houston, TX 77081
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900">Contact</h4>
                      <p className="mt-1 text-gray-600">
                        Phone:{' '}
                        <a
                          href="tel:281-889-0047"
                          className="text-primary-600 hover:text-primary-500"
                        >
                          (281) 889-0047
                        </a>
                        <br />
                        Email:{' '}
                        <a
                          href="mailto:info@newwaveprepacademy.com"
                          className="text-primary-600 hover:text-primary-500"
                        >
                          info@newwaveprepacademy.com
                        </a>
                      </p>
                    </div>

                    <div className="pt-6">
                      <Link
                        href="/contact"
                        className="btn-primary w-full justify-center"
                      >
                        Schedule a Tour
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Head Coach Section */}
        <div className="section-padding">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2 className="text-base font-semibold uppercase leading-7 tracking-wide text-primary-600">
                Meet Your Head Coach
              </h2>
              <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                Learn from
                <span className="gradient-text"> Coach Nicholas Perez</span>
              </p>
              <p className="mt-6 text-balance text-xl leading-8 text-gray-600">
                Led by a former professional player with extensive youth
                development experience, our program combines proven training
                methodologies with personalized attention to develop champions
                both on and off the court.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="max-w-lg">
                {coaches.map((coach, index) => (
                  <div
                    key={coach.name}
                    className="card-hover group relative overflow-hidden rounded-2xl bg-white shadow-lg"
                  >
                    <div className="p-8">
                      <div className="mb-6 flex items-center">
                        <Image
                          className="h-20 w-20 rounded-full object-cover"
                          src={coach.imageUrl}
                          alt={coach.name}
                          width={80}
                          height={80}
                        />
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-gray-900">
                            {coach.name}
                          </h3>
                          <p className="font-medium text-primary-600">
                            {coach.role}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {coach.experience}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                          Specialties
                        </h4>
                        <div className="space-y-2">
                          {coach.specialties.map((specialty) => (
                            <div
                              key={specialty}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircleIcon className="mr-2 h-4 w-4 flex-shrink-0 text-primary-600" />
                              {specialty}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/court.webp"
              alt="Basketball court"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
          </div>

          <div className="section-padding relative">
            <div className="container-padding mx-auto max-w-4xl text-center">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-white lg:text-6xl">
                Ready to Join the
                <span className="block bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                  New Wave Family?
                </span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-balance text-xl leading-8 text-gray-300">
                Experience the difference that championship-level coaching,
                world-class facilities, and a commitment to excellence can make
                in your basketball journey.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-primary px-8 py-4 text-lg shadow-2xl hover:shadow-accent-500/25"
                >
                  Schedule a Visit
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center text-lg font-semibold leading-6 text-white transition-colors hover:text-accent-300"
                >
                  View Programs
                  <svg
                    className="ml-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
