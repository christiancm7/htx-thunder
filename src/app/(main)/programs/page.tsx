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

const programs = [
  {
    id: 'youth-development',
    name: 'Youth Development',
    ageRange: 'Ages 5-12',
    tagline: 'Building Future Champions',
    description:
      'Designed to ignite passion and build fundamental skills in young athletes through engaging, age-appropriate training methodologies.',
    longDescription:
      'Our Youth Development program creates a positive foundation for lifelong basketball enjoyment. We focus on fundamental movement patterns, basic basketball skills, and character development in a fun, supportive environment.',
    features: [
      'Fundamental movement patterns and coordination',
      'Age-appropriate basketball skills development',
      'Character building and sportsmanship',
      'Small group instruction (max 8 players)',
      'Positive reinforcement methodology',
      'Parent progress updates',
    ],
    highlights: [
      'Fun-focused learning environment',
      'Certified youth development coaches',
      'Progressive skill development',
    ],
    image:
      'https://images.unsplash.com/photo-1520399636535-24741e71b160?q=80&w=1000&auto=format&fit=crop',
    price: '$199',
    priceUnit: '/month',
    schedule: 'Mon/Wed or Tue/Thu',
    time: '4:00 PM - 5:30 PM',
    sessions: '2 sessions per week',
    duration: '90 minutes',
    groupSize: '6-8 players',
    color: 'from-primary-600 to-primary-700',
    accentColor: 'from-accent-500 to-accent-600',
    category: 'Foundation',
  },
  {
    id: 'elite-training',
    name: 'Elite Training',
    ageRange: 'Ages 13-18',
    tagline: 'Advanced Skill Development',
    description:
      'Comprehensive training program for serious athletes committed to taking their game to the next competitive level.',
    longDescription:
      'Our Elite Training program combines advanced skill development with game situation training. Players receive personalized coaching, performance analytics, and strength conditioning.',
    features: [
      'Advanced basketball skill development',
      'Game situation and scrimmage training',
      'Strength and conditioning integration',
      'Basketball IQ and decision-making',
      'Performance tracking and analytics',
      'Video analysis and feedback',
    ],
    highlights: [
      'College-prep level training',
      'Performance analytics tracking',
      'Competitive team placement',
    ],
    image:
      'https://plus.unsplash.com/premium_photo-1675366216320-f53a65547770?q=80&w=1000&auto=format&fit=crop',
    price: '$299',
    priceUnit: '/month',
    schedule: 'Mon/Wed/Fri',
    time: '5:30 PM - 7:30 PM',
    sessions: '3 sessions per week',
    duration: '2 hours',
    groupSize: '10-12 players',
    color: 'from-primary-600 to-primary-700',
    accentColor: 'from-accent-500 to-accent-600',
    category: 'Development',
  },
  {
    id: 'high-school-elite',
    name: 'High School Elite',
    ageRange: 'Ages 14-18',
    tagline: 'College Preparation',
    description:
      'Intensive training designed for high school athletes preparing for college basketball and elite competition.',
    longDescription:
      'Our most comprehensive program for serious players. Includes college-level training, recruitment preparation, and position-specific development with former college and professional coaches.',
    features: [
      'College-level training intensity',
      'Position-specific skill development',
      'Game film analysis and breakdown',
      'Strength and conditioning program',
      'College recruitment preparation',
      'Mental performance coaching',
    ],
    highlights: [
      'Former college/pro coaches',
      'College recruitment support',
      'Elite competition exposure',
    ],
    image:
      'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=1000&auto=format&fit=crop',
    price: '$399',
    priceUnit: '/month',
    schedule: 'Mon-Thu',
    time: '6:00 PM - 8:00 PM',
    sessions: '4 sessions per week',
    duration: '2 hours',
    groupSize: '8-10 players',
    color: 'from-primary-600 to-primary-700',
    accentColor: 'from-accent-500 to-accent-600',
    category: 'Elite',
  },
  {
    id: 'one-on-one',
    name: 'Individual Training',
    ageRange: 'All Ages',
    tagline: 'Personalized Excellence',
    description:
      'Completely customized training sessions with our expert coaches designed around your specific goals and development needs.',
    longDescription:
      'Our Individual Training program offers the ultimate in personalized basketball development. Work one-on-one with our elite coaches to address specific skills, weaknesses, and goals.',
    features: [
      'Fully customized training plans',
      'One-on-one coach attention',
      'Flexible scheduling options',
      'Detailed video analysis',
      'Progress tracking and reporting',
      'Skill-specific development focus',
    ],
    highlights: [
      'Completely personalized approach',
      'Flexible scheduling',
      'Rapid skill development',
    ],
    image:
      'https://plus.unsplash.com/premium_photo-1685366445883-709973744248?q=80&w=1000&auto=format&fit=crop',
    price: '$75',
    priceUnit: '/session',
    schedule: 'Flexible',
    time: 'By appointment',
    sessions: 'As needed',
    duration: '60 minutes',
    groupSize: '1 player',
    color: 'from-primary-600 to-primary-700',
    accentColor: 'from-accent-500 to-accent-600',
    category: 'Premium',
  },
]

const programBenefits = [
  {
    title: 'Expert Coaching',
    description: 'Train with former college and professional players',
    icon: TrophyIcon,
  },
  {
    title: 'Small Groups',
    description: 'Maximum attention with optimal player-to-coach ratios',
    icon: UserGroupIcon,
  },
  {
    title: 'Proven Results',
    description: '95% of players improve within 90 days',
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
                    Comprehensive Training Programs
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">Elevate Your Game</span>
                <span className="from-primary-400 via-primary-500 to-accent-400 block bg-gradient-to-r bg-clip-text text-transparent">
                  Elite Programs
                </span>
              </h1>

              {/* Subheading */}
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-300 sm:text-2xl">
                Discover comprehensive training programs designed to develop
                players at every level. From foundational skills to elite
                preparation, find your path to basketball excellence.
              </p>

              {/* Program Benefits */}
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {programBenefits.map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="from-primary-600 to-primary-700 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white">
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
            <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
              Training Programs
            </h2>
            <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Choose Your
              <span className="gradient-text"> Development Path</span>
            </p>
            <p className="mt-6 text-balance text-xl leading-8 text-gray-600">
              Each program is carefully designed to meet players where they are
              and take them to the next level of their basketball journey.
            </p>
          </div>

          <div className="space-y-24">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="relative h-96 lg:h-auto lg:w-1/2">
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900/60 via-gray-900/20 to-transparent" />
                    <img
                      src={program.image}
                      alt={program.name}
                      className="h-full w-full object-cover"
                    />

                    {/* Overlay Content */}
                    <div className="absolute bottom-6 left-6 z-20">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                        <span
                          className={`h-2 w-2 rounded-full bg-gradient-to-r ${program.accentColor}`}
                        ></span>
                        {program.category}
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                    {/* Program Header */}
                    <div className="mb-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-primary-600 text-sm font-semibold uppercase tracking-wide">
                          {program.ageRange}
                        </span>
                        <span className="from-primary-600 to-accent-600 h-1 w-8 bg-gradient-to-r"></span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                        {program.name}
                      </h3>
                      <p className="text-accent-600 mt-2 text-lg font-medium">
                        {program.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mb-8 text-lg leading-relaxed text-gray-600">
                      {program.longDescription}
                    </p>

                    {/* Features Grid */}
                    <div className="mb-8">
                      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
                        Program Features
                      </h4>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {program.features.map((feature) => (
                          <div key={feature} className="flex items-start">
                            <CheckIcon className="text-primary-600 mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
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
                          {program.schedule}
                        </p>
                        <p className="text-xs text-gray-500">{program.time}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                          <UserGroupIcon className="h-4 w-4" />
                          Group Size
                        </div>
                        <p className="mt-1 text-sm text-gray-900">
                          {program.groupSize}
                        </p>
                        <p className="text-xs text-gray-500">
                          {program.duration}
                        </p>
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                          <CurrencyDollarIcon className="h-4 w-4" />
                          Investment
                        </div>
                        <p className="mt-1 text-2xl font-bold text-gray-900">
                          {program.price}
                          <span className="text-sm font-normal text-gray-500">
                            {program.priceUnit}
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
                        className="hover:bg-primary-50 hover:text-primary-700 focus:ring-primary-500 flex flex-1 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Programs Section */}
      <div className="section-padding">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="glass-effect overflow-hidden rounded-3xl">
            <div className="px-8 py-16 sm:px-16 lg:px-24">
              <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                    Custom Training
                    <span className="gradient-text"> Solutions</span>
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Every athlete&apos;s journey is unique. Our custom programs
                    are tailored to your specific goals, schedule, and
                    development needs.
                  </p>

                  <div className="mt-10 space-y-6">
                    {[
                      'Individual or small group sessions',
                      'Flexible scheduling to fit your lifestyle',
                      'Specialized skill development focus',
                      'Position-specific training programs',
                      'College recruitment preparation',
                      'Performance analytics and tracking',
                    ].map((feature) => (
                      <div key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon className="text-primary-600 h-6 w-6" />
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
                    <div className="from-primary-600/10 to-accent-600/10 absolute -inset-4 rounded-3xl bg-gradient-to-r blur-xl"></div>
                    <div className="relative rounded-2xl bg-white p-8 shadow-xl">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Start Your Custom Program
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        Schedule a consultation to discuss your goals and create
                        a personalized training plan.
                      </p>

                      <div className="mt-8 space-y-4">
                        <Link
                          href="/register"
                          className="btn-primary w-full justify-center"
                        >
                          Schedule Consultation
                        </Link>

                        <div className="text-center">
                          <p className="text-sm text-gray-500">
                            Or call us directly at{' '}
                            <a
                              href="tel:281-889-0047"
                              className="text-primary-600 hover:text-primary-500 font-medium"
                            >
                              (281) 889-0047
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Consultation Benefits */}
                      <div className="mt-8 border-t border-gray-100 pt-6">
                        <h4 className="text-sm font-semibold text-gray-900">
                          Free Consultation Includes:
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-600">
                          <li>• Skills assessment and evaluation</li>
                          <li>• Personalized development plan</li>
                          <li>• Goal setting and timeline</li>
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
              Ready to Begin Your
              <span className="from-accent-300 to-accent-500 bg-gradient-to-r bg-clip-text text-transparent">
                {' '}
                Basketball Journey?
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-xl leading-8 text-gray-300">
              Join thousands of players who have elevated their game through our
              proven training programs. Your path to basketball excellence
              starts here.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/register"
                className="btn-primary hover:shadow-accent-500/25 px-8 py-4 text-lg shadow-2xl"
              >
                Register Today
              </Link>
              <Link
                href="/facilities"
                className="hover:text-accent-300 inline-flex items-center text-lg font-semibold leading-6 text-white transition-colors"
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
