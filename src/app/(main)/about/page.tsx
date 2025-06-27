'use client'

import {
  CheckCircleIcon,
  TrophyIcon,
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { label: 'Founded', value: '2020', highlight: false },
  { label: 'Expert Coaches', value: '20+', highlight: true },
  { label: 'Players Trained', value: '5,000+', highlight: false },
  { label: 'Success Rate', value: '100%', highlight: true },
]

const facilityFeatures = [
  {
    title: 'Professional Courts',
    description:
      'Six full-size basketball courts with professional-grade flooring and equipment',
    icon: TrophyIcon,
  },
  {
    title: 'Training Technology',
    description:
      'Advanced analytics, video analysis systems, and performance tracking technology',
    icon: AcademicCapIcon,
  },
  {
    title: 'Recovery Center',
    description:
      'State-of-the-art recovery and rehabilitation facilities for optimal performance',
    icon: HeartIcon,
  },
  {
    title: 'Strength Training',
    description:
      'Fully equipped strength and conditioning center designed for basketball athletes',
    icon: UserGroupIcon,
  },
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
    name: 'Michael Johnson',
    role: 'Head Coach / Founder',
    experience: 'Former D1 Player & 15+ Years Coaching',
    specialties: [
      'Leadership Development',
      'Game Strategy',
      'Mental Performance',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sarah Williams',
    role: 'Skills Development Coach',
    experience: 'Former WNBA Player & Skills Specialist',
    specialties: ['Shooting Mechanics', 'Ball Handling', 'Footwork'],
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'David Rodriguez',
    role: 'Performance Coach',
    experience: 'Certified Strength & Conditioning Specialist',
    specialties: ['Athletic Performance', 'Injury Prevention', 'Recovery'],
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
            <div className="from-primary-900/95 via-primary-800/80 to-primary-900/95 absolute inset-0 bg-gradient-to-r"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="bg-primary-500/10 animate-pulse-slow absolute -right-40 -top-40 h-80 w-80 rounded-full blur-3xl"></div>
            <div className="bg-accent-500/10 animate-pulse-slow absolute -left-40 top-1/2 h-96 w-96 rounded-full blur-3xl delay-1000"></div>
          </div>

          <div className="relative flex min-h-[80vh] items-center">
            <div className="container-padding mx-auto max-w-7xl">
              <div className="mx-auto max-w-4xl text-center">
                {/* Badge */}
                <div className="mb-8 flex justify-center">
                  <div className="group relative rounded-full px-4 py-2 text-sm leading-6 text-gray-300 ring-1 ring-gray-600 transition-all duration-300 hover:ring-gray-500">
                    <span className="from-primary-600/20 to-accent-600/20 absolute inset-0 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    <span className="relative flex items-center gap-2">
                      <span className="bg-accent-400 h-2 w-2 animate-pulse rounded-full"></span>
                      Established 2015 • Houston&apos;s Premier Academy
                    </span>
                  </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  <span className="block">Where</span>
                  <span className="from-primary-400 via-primary-500 to-accent-400 block bg-gradient-to-r bg-clip-text text-transparent">
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
                      <div className="from-primary-600 to-primary-700 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white">
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
              <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
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
                    <div className="text-primary-600 text-2xl font-bold">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">
                      Scholarships Earned
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <div className="text-accent-600 text-2xl font-bold">
                      20K+
                    </div>
                    <div className="text-sm text-gray-600">Training Hours</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="from-primary-600/10 to-accent-600/10 absolute -inset-4 rounded-3xl bg-gradient-to-r blur-xl"></div>
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
              <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
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
                  <div className="from-primary-500/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
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
              <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
                World-Class Facility
              </h2>
              <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                <span className="gradient-text">20,000 Sq Ft</span> of
                Excellence
              </p>
              <p className="mt-6 text-balance text-xl leading-8 text-gray-600">
                Our state-of-the-art facility provides the perfect environment
                for elite basketball development with cutting-edge technology
                and professional-grade equipment.
              </p>
            </div>

            <div className="mb-16">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1675366216320-f53a65547770?q=80&w=1000&auto=format&fit=crop"
                  alt="New Wave Academy facility"
                  width={1200}
                  height={600}
                  className="h-96 w-full object-cover lg:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/20 to-gray-900/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white lg:text-4xl">
                      Tour Our Facility
                    </h3>
                    <p className="mt-4 text-lg text-gray-300">
                      Experience excellence firsthand
                    </p>
                    <Link
                      href="/facilities"
                      className="btn-primary mt-6 inline-flex"
                    >
                      Schedule Visit
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {facilityFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="card-hover group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 text-center"
                >
                  <div className="from-primary-500/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="from-primary-600 to-primary-700 mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r text-white shadow-lg">
                      <feature.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Elite Coaching Team Section */}
        <div className="section-padding">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
                Elite Coaching Staff
              </h2>
              <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                Learn from
                <span className="gradient-text"> Championship Coaches</span>
              </p>
              <p className="mt-6 text-balance text-xl leading-8 text-gray-600">
                Our coaching staff combines decades of professional and
                collegiate experience with cutting-edge training methodologies
                to develop champions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {coaches.map((coach, index) => (
                <div
                  key={coach.name}
                  className="card-hover group relative overflow-hidden rounded-2xl bg-white shadow-lg"
                >
                  <div className="p-8">
                    <div className="mb-6 flex items-center">
                      <img
                        className="h-20 w-20 rounded-full object-cover"
                        src={coach.imageUrl}
                        alt={coach.name}
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {coach.name}
                        </h3>
                        <p className="text-primary-600 font-medium">
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
                            <CheckCircleIcon className="text-primary-600 mr-2 h-4 w-4 flex-shrink-0" />
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
                <span className="from-accent-300 to-accent-500 block bg-gradient-to-r bg-clip-text text-transparent">
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
                  className="btn-primary hover:shadow-accent-500/25 px-8 py-4 text-lg shadow-2xl"
                >
                  Schedule a Visit
                </Link>
                <Link
                  href="/programs"
                  className="hover:text-accent-300 inline-flex items-center text-lg font-semibold leading-6 text-white transition-colors"
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
