'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import {
  CheckIcon,
  XMarkIcon,
  ClockIcon,
  UserGroupIcon,
  TrophyIcon,
  AcademicCapIcon,
  StarIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  PlayIcon,
  DocumentTextIcon,
} from '@heroicons/react/20/solid'

const programs = [
  {
    id: 'youth-development',
    name: 'Youth Development',
    ageRange: 'Ages 5-12',
    tagline: 'Building Future Champions',
    description:
      'Designed to ignite passion and build fundamental skills in young athletes through engaging, age-appropriate training methodologies.',
    price: '$199',
    priceUnit: '/month',
    deposit: '$50',
    schedule: 'Mon/Wed or Tue/Thu',
    time: '4:00 PM - 5:30 PM',
    sessions: '2 sessions per week',
    duration: '90 minutes',
    groupSize: '6-8 players',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1520399636535-24741e71b160?q=80&w=1000&auto=format&fit=crop',
    category: 'Foundation',
    features: [
      'Fundamental movement patterns',
      'Age-appropriate basketball skills',
      'Character building and sportsmanship',
      'Small group instruction',
      'Positive reinforcement methodology',
      'Parent progress updates',
    ],
    requirements: [
      'Comfortable athletic clothing',
      'Non-marking athletic shoes',
      'Personal water bottle',
      'Positive attitude and willingness to learn',
    ],
  },
  {
    id: 'elite-training',
    name: 'Elite Training',
    ageRange: 'Ages 13-18',
    tagline: 'Advanced Skill Development',
    description:
      'Comprehensive training program for serious athletes committed to taking their game to the next competitive level.',
    price: '$299',
    priceUnit: '/month',
    deposit: '$75',
    schedule: 'Mon/Wed/Fri',
    time: '5:30 PM - 7:30 PM',
    sessions: '3 sessions per week',
    duration: '2 hours',
    groupSize: '10-12 players',
    featured: true,
    image:
      'https://plus.unsplash.com/premium_photo-1675366216320-f53a65547770?q=80&w=1000&auto=format&fit=crop',
    category: 'Development',
    features: [
      'Advanced basketball skill development',
      'Game situation and scrimmage training',
      'Strength and conditioning integration',
      'Basketball IQ and decision-making',
      'Performance tracking and analytics',
      'Video analysis and feedback',
    ],
    requirements: [
      'Basketball-specific athletic shoes',
      'Practice jersey and shorts',
      'Commitment to regular attendance',
      'Previous basketball experience recommended',
    ],
  },
  {
    id: 'high-school-elite',
    name: 'High School Elite',
    ageRange: 'Ages 14-18',
    tagline: 'College Preparation',
    description:
      'Intensive training designed for high school athletes preparing for college basketball and elite competition.',
    price: '$399',
    priceUnit: '/month',
    deposit: '$100',
    schedule: 'Mon-Thu',
    time: '6:00 PM - 8:00 PM',
    sessions: '4 sessions per week',
    duration: '2 hours',
    groupSize: '8-10 players',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=1000&auto=format&fit=crop',
    category: 'Elite',
    features: [
      'College-level training intensity',
      'Position-specific skill development',
      'Game film analysis and breakdown',
      'Strength and conditioning program',
      'College recruitment preparation',
      'Mental performance coaching',
    ],
    requirements: [
      'Professional basketball shoes',
      'Academy training uniform',
      'High school team participation',
      'Demonstrated commitment to excellence',
    ],
  },
  {
    id: 'individual-training',
    name: 'Individual Training',
    ageRange: 'All Ages',
    tagline: 'Personalized Excellence',
    description:
      'Completely customized training sessions with our expert coaches designed around your specific goals and development needs.',
    price: '$75',
    priceUnit: '/session',
    deposit: '$0',
    schedule: 'Flexible',
    time: 'By appointment',
    sessions: 'As needed',
    duration: '60 minutes',
    groupSize: '1 player',
    featured: false,
    image:
      'https://plus.unsplash.com/premium_photo-1685366445883-709973744248?q=80&w=1000&auto=format&fit=crop',
    category: 'Premium',
    features: [
      'Fully customized training plans',
      'One-on-one coach attention',
      'Flexible scheduling options',
      'Detailed video analysis',
      'Progress tracking and reporting',
      'Skill-specific development focus',
    ],
    requirements: [
      'Basketball shoes and athletic wear',
      'Specific goals and objectives',
      '24-hour scheduling notice',
      'Commitment to improvement',
    ],
  },
]

const admissionSteps = [
  {
    step: '01',
    title: 'Initial Assessment',
    description:
      'Complete our online application and schedule a skill evaluation with our coaching staff.',
    icon: DocumentTextIcon,
  },
  {
    step: '02',
    title: 'Program Selection',
    description:
      'Based on your assessment, we&apos;ll recommend the ideal program to match your skill level and goals.',
    icon: AcademicCapIcon,
  },
  {
    step: '03',
    title: 'Registration',
    description:
      'Complete registration, submit required documents, and secure your spot with a program deposit.',
    icon: CalendarDaysIcon,
  },
  {
    step: '04',
    title: 'Begin Training',
    description:
      'Start your basketball journey with our expert coaches and world-class training facility.',
    icon: TrophyIcon,
  },
]

const faqs = [
  {
    question: 'What is the admission process?',
    answer:
      'Our admission process includes an initial skill assessment, program recommendation, registration completion, and enrollment confirmation. We make it simple and straightforward to join our academy.',
  },
  {
    question: 'Do you offer trial sessions?',
    answer:
      'Yes, we offer a complimentary trial session for new players to experience our training methodology and facility before committing to a program.',
  },
  {
    question: 'What are the payment options?',
    answer:
      'We accept monthly payments, semester payments (with discount), and annual payments (with significant discount). Payment plans are available for qualifying families.',
  },
  {
    question: 'What if my child needs to miss sessions?',
    answer:
      'We offer make-up sessions for planned absences with advance notice. Our flexible scheduling accommodates school and family commitments.',
  },
  {
    question: 'Are there any additional fees?',
    answer:
      'Program tuition covers all training sessions and basic equipment. Additional costs may include academy uniforms, camps, and tournament participation (all optional).',
  },
  {
    question: 'How do you ensure player development?',
    answer:
      'We provide regular progress evaluations, video analysis, performance tracking, and detailed feedback to ensure each player reaches their potential.',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AdmissionsPage() {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/court.webp"
            alt="New Wave Academy admissions"
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
                    Now Accepting Applications for 2024
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">Join the</span>
                <span className="from-primary-400 via-primary-500 to-accent-400 block bg-gradient-to-r bg-clip-text text-transparent">
                  Elite Academy
                </span>
              </h1>

              {/* Subheading */}
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-300 sm:text-2xl">
                Begin your journey to basketball excellence with Houston&apos;s
                premier training academy. Discover the program that&apos;s right
                for your development level and goals.
              </p>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <Link
                  href="#programs"
                  className="from-primary-600 to-primary-700 hover:shadow-primary-500/25 focus:ring-primary-500 group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span className="from-primary-700 to-primary-800 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative flex items-center gap-2">
                    Explore Programs
                    <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="hover:border-primary-500 hover:bg-primary-500/10 focus:ring-primary-500 group inline-flex items-center justify-center rounded-lg border-2 border-gray-600 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span className="flex items-center gap-2">
                    Schedule Assessment
                    <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div id="programs" className="section-padding bg-gray-50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
              Training Programs
            </h2>
            <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Find Your Perfect
              <span className="gradient-text"> Development Path</span>
            </p>
            <p className="mt-6 text-balance text-xl leading-8 text-gray-600">
              Choose from our comprehensive range of programs designed to
              develop players at every skill level and age group.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl ${
                  program.featured ? 'ring-primary-500 ring-2' : ''
                }`}
              >
                {program.featured && (
                  <div className="absolute right-4 top-4 z-10">
                    <div className="from-accent-500 to-accent-600 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-48">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                        <span className="from-primary-500 to-primary-600 h-2 w-2 rounded-full bg-gradient-to-r"></span>
                        {program.category}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-primary-600 text-sm font-semibold uppercase tracking-wide">
                          {program.ageRange}
                        </span>
                        <span className="from-primary-600 to-accent-600 h-1 w-6 bg-gradient-to-r"></span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {program.name}
                      </h3>
                      <p className="text-accent-600 mt-1 font-medium">
                        {program.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-gray-600">{program.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                        Program Features
                      </h4>
                      <div className="space-y-2">
                        {program.features.slice(0, 4).map((feature) => (
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
                    <div className="mb-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                          <ClockIcon className="h-3 w-3" />
                          Schedule
                        </div>
                        <p className="mt-1 text-sm text-gray-900">
                          {program.schedule}
                        </p>
                        <p className="text-xs text-gray-500">{program.time}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                          <UserGroupIcon className="h-3 w-3" />
                          Group Size
                        </div>
                        <p className="mt-1 text-sm text-gray-900">
                          {program.groupSize}
                        </p>
                        <p className="text-xs text-gray-500">
                          {program.duration}
                        </p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6 rounded-lg bg-gray-50 p-4">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-3xl font-bold text-gray-900">
                            {program.price}
                          </span>
                          <span className="text-gray-500">
                            {program.priceUnit}
                          </span>
                        </div>
                        {program.deposit !== '$0' && (
                          <div className="text-right">
                            <p className="text-sm text-gray-500">
                              Registration
                            </p>
                            <p className="text-lg font-semibold text-gray-900">
                              {program.deposit}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/contact"
                        className="btn-primary flex-1 justify-center"
                      >
                        Apply Now
                      </Link>
                      <Link
                        href="/programs"
                        className="hover:bg-primary-50 hover:text-primary-700 focus:ring-primary-500 flex flex-1 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
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

      {/* Admission Process Section */}
      <div className="section-padding">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
              Admission Process
            </h2>
            <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Simple Steps to
              <span className="gradient-text"> Join Our Academy</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step, index) => (
              <div
                key={step.step}
                className="card-hover group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 text-center"
              >
                <div className="from-primary-500/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  {/* Step Number */}
                  <div className="from-primary-600 to-primary-700 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r text-xl font-bold text-white">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <step.icon className="text-primary-600 mx-auto h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < admissionSteps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-8 bg-gray-200 lg:block">
                    <div className="from-primary-600 to-accent-600 h-full w-1/2 bg-gradient-to-r"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center"
            >
              Start Your Application
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Everything You Need to
              <span className="gradient-text"> Know</span>
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-gray-600">
              Have more questions? We&apos;re here to help.
            </p>
            <Link
              href="/contact"
              className="hover:text-primary-500 text-primary-600 inline-flex items-center text-lg font-semibold transition-colors"
            >
              Contact Our Admissions Team
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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
              Ready to Begin Your
              <span className="from-accent-300 to-accent-500 bg-gradient-to-r bg-clip-text text-transparent">
                {' '}
                Basketball Journey?
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-xl leading-8 text-gray-300">
              Join Houston&apos;s premier basketball academy and unlock your
              potential with championship-level coaching and world-class
              facilities.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary hover:shadow-accent-500/25 px-8 py-4 text-lg shadow-2xl"
              >
                Apply Today
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
