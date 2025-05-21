'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

const ageGroups = [
  {
    name: 'Youth Development',
    id: 'youth',
    age: 'Ages 6-9',
    description:
      'Building foundational skills and fostering a love for basketball',
    price: '$150 per month',
    sessions: '2 sessions / week',
    duration: '60 mins per session',
    featured: false,
    imageSrc: '/court.webp',
  },
  {
    name: 'Junior Academy',
    id: 'junior',
    age: 'Ages 10-13',
    description: 'Developing core basketball skills and game understanding',
    price: '$225 per month',
    sessions: '3 sessions / week',
    duration: '90 mins per session',
    featured: true,
    imageSrc: '/court.webp',
  },
  {
    name: 'Elite Development',
    id: 'elite',
    age: 'Ages 14-17',
    description: 'Advanced training for competitive players seeking to excel',
    price: '$325 per month',
    sessions: '4 sessions / week',
    duration: '120 mins per session',
    featured: false,
    imageSrc: '/court.webp',
  },
  {
    name: 'College Prep & Adult',
    id: 'college',
    age: 'Ages 18+',
    description: 'High-level training for collegiate and adult players',
    price: '$350 per month',
    sessions: '3+ sessions / week',
    duration: 'Flexible scheduling',
    featured: false,
    imageSrc: '/court.webp',
  },
]

const sections = [
  {
    name: 'Training Focus',
    features: [
      {
        name: 'Fundamental movement skills',
        tiers: { youth: true, junior: true, elite: true, college: true },
      },
      {
        name: 'Basic basketball techniques',
        tiers: { youth: true, junior: true, elite: true, college: true },
      },
      {
        name: 'Advanced skill development',
        tiers: { youth: false, junior: true, elite: true, college: true },
      },
      {
        name: 'Position-specific training',
        tiers: { youth: false, junior: false, elite: true, college: true },
      },
      {
        name: 'Game strategy & tactics',
        tiers: {
          youth: false,
          junior: 'Basic',
          elite: 'Advanced',
          college: 'Elite',
        },
      },
      {
        name: 'Physical conditioning',
        tiers: {
          youth: 'Light',
          junior: 'Moderate',
          elite: 'Intensive',
          college: 'Customized',
        },
      },
    ],
  },
  {
    name: 'Equipment & Gear',
    features: [
      {
        name: 'Basketball provided',
        tiers: {
          youth: 'Size 5',
          junior: 'Size 6',
          elite: 'Size 7',
          college: 'Size 7',
        },
      },
      {
        name: 'Basketball shoes required',
        tiers: { youth: false, junior: true, elite: true, college: true },
      },
      {
        name: 'Practice uniform',
        tiers: {
          youth: false,
          junior: 'Optional',
          elite: 'Required',
          college: 'Required',
        },
      },
      {
        name: 'Strength training equipment',
        tiers: { youth: false, junior: false, elite: true, college: true },
      },
    ],
  },
  {
    name: 'Additional Benefits',
    features: [
      {
        name: 'Performance evaluations',
        tiers: {
          youth: false,
          junior: 'Quarterly',
          elite: 'Monthly',
          college: 'Customized',
        },
      },
      {
        name: 'Video analysis',
        tiers: {
          youth: false,
          junior: 'Group',
          elite: 'Individual',
          college: 'Advanced',
        },
      },
      {
        name: 'Competition opportunities',
        tiers: {
          youth: 'In-house',
          junior: 'Local',
          elite: 'Regional',
          college: 'Elite',
        },
      },
      {
        name: 'College recruitment support',
        tiers: { youth: false, junior: false, elite: true, college: true },
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ageGroups2 = [
  {
    name: 'Youth Development (Ages 6-9)',
    description:
      'Building foundational skills and fostering a love for basketball',
    imageSrc: '/court.webp',
    expectations: [
      'Focus on fundamental movement skills and basic basketball techniques',
      'Introduction to teamwork and sportsmanship concepts',
      'Low-pressure, fun-oriented learning environment',
      'Parent/guardian attendance recommended for youngest players',
      'Two 60-minute sessions per week',
      'Comfortable athletic clothing and appropriate footwear required',
    ],
    equipment: [
      'Academy provides appropriate size basketballs (size 5)',
      'Basic training equipment provided during sessions',
      'Personal water bottle recommended',
    ],
  },
  {
    name: 'Junior Academy (Ages 10-13)',
    description: 'Developing core basketball skills and game understanding',
    imageSrc: '/court.webp',
    expectations: [
      'Progressive skill development in dribbling, passing, shooting, and defense',
      'Introduction to basketball rules and basic game strategies',
      'Focus on discipline, respect, and teamwork',
      'Beginning of performance monitoring and skill assessment',
      'Three 90-minute sessions per week',
      'Commitment to regular attendance and practice',
    ],
    equipment: [
      'Academy provides intermediate basketballs (size 6)',
      'Basketball shoes strongly recommended',
      'Practice uniform available for purchase',
      'Personal water bottle and towel required',
    ],
  },
  {
    name: 'Elite Development (Ages 14-17)',
    description: 'Advanced training for competitive players seeking to excel',
    imageSrc: '/court.webp',
    expectations: [
      'Advanced skill development and position-specific training',
      'Comprehensive understanding of game strategies and situations',
      'Physical conditioning and strength development programs',
      'Regular performance evaluations and personalized feedback',
      'Four 2-hour sessions per week plus optional open gym time',
      'Commitment to excellence both on and off the court',
    ],
    equipment: [
      'Official size basketballs provided (size 7)',
      'Performance basketball shoes required',
      'Full practice uniform required (available for purchase)',
      'Personal workout gear recommended for strength training',
    ],
  },
  {
    name: 'College Prep & Adult (Ages 18+)',
    description: 'High-level training for collegiate and adult players',
    imageSrc: '/court.webp',
    expectations: [
      'Elite skill refinement and game preparation',
      'Personalized development plans targeting specific areas',
      'College recruitment preparation and guidance for qualified players',
      'Professional-level training methodologies',
      'Flexible scheduling with minimum 3 sessions per week recommended',
      'Self-motivated attitude and commitment to improvement',
    ],
    equipment: [
      'Official size basketballs provided',
      'Professional-grade training equipment access',
      'Personal performance gear required',
      'Recovery and injury prevention supplies recommended',
    ],
  },
]

export default function AdmissionsPage() {
  const [selectedTier, setSelectedTier] = useState('junior')

  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-16 lg:px-8 lg:pt-16">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Admissions & Requirements
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Our training programs are designed to meet players where
                    they are and help them reach their full potential, with
                    age-appropriate expectations and training methods.
                  </p>
                </div>
                <div className="mt-14 flex-1 sm:mt-16 lg:mt-0">
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl lg:h-[35rem] lg:w-auto">
                    <img
                      src="/court.webp"
                      alt="Basketball court"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* General admission process section */}
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
                <div>
                  <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Admission Process
                  </h2>
                  <ol className="space-y-4 text-gray-600">
                    <li className="flex gap-x-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-medium text-white">
                        1
                      </span>
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Complete Application
                        </strong>{' '}
                        - Fill out our online application form or contact us to
                        request a paper application.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-medium text-white">
                        2
                      </span>
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Skill Assessment
                        </strong>{' '}
                        - Attend a skill assessment session with our coaching
                        staff. This is not a test but helps us place you in the
                        right program.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-medium text-white">
                        3
                      </span>
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Program Placement
                        </strong>{' '}
                        - Based on age and skill level, we'll recommend the most
                        suitable program.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-medium text-white">
                        4
                      </span>
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Registration & Payment
                        </strong>{' '}
                        - Complete registration and arrange payment plans if
                        needed.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-medium text-white">
                        5
                      </span>
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Orientation
                        </strong>{' '}
                        - Attend an orientation session to familiarize yourself
                        with our facility and coaching philosophy.
                      </span>
                    </li>
                  </ol>
                </div>
                <div>
                  <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Important Information
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong className="font-semibold text-gray-900">
                        Rolling Admissions:
                      </strong>{' '}
                      While most players join at the beginning of our seasonal
                      programs, we accept applications year-round and can
                      accommodate mid-season starts.
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900">
                        Scholarships:
                      </strong>{' '}
                      We offer a limited number of needs-based scholarships for
                      qualified applicants. Please inquire during the
                      application process.
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900">
                        Trial Sessions:
                      </strong>{' '}
                      First-time players can arrange a trial session before
                      committing to a full program.
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900">
                        Health & Safety:
                      </strong>{' '}
                      All participants must complete a health form and waiver
                      before beginning training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program comparison section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Programs
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Choose the right program for your player
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
              Our age-based training programs are designed to provide
              appropriate challenges and development opportunities for players
              at every stage of their basketball journey.
            </p>

            {/* Program cards */}
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
              {ageGroups.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'ring-2 ring-indigo-600'
                      : 'ring-1 ring-gray-200',
                    'rounded-3xl p-8',
                    tier.featured ? 'bg-white shadow-md' : 'bg-white/60',
                  )}
                >
                  <h3
                    id={tier.id}
                    className="text-lg font-semibold leading-8 text-gray-900"
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-indigo-600">
                    {tier.age}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.price}
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    <li className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>{tier.sessions}</span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>{tier.duration}</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => setSelectedTier(tier.id)}
                    className={classNames(
                      'mt-8 w-full rounded-md px-3 py-2 text-center text-sm font-semibold',
                      selectedTier === tier.id
                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                    )}
                  >
                    {selectedTier === tier.id ? 'Selected' : 'View details'}
                  </button>
                </div>
              ))}
            </div>

            {/* Feature comparison section */}
            <div className="mt-24">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-indigo-50 p-1">
                  {sections.map((section) => (
                    <Tab
                      key={section.name}
                      className={({ selected }) =>
                        classNames(
                          'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                          selected
                            ? 'bg-white text-indigo-700 shadow'
                            : 'text-indigo-600 hover:bg-white/[0.12] hover:text-indigo-700',
                        )
                      }
                    >
                      {section.name}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  {sections.map((section) => (
                    <Tab.Panel
                      key={section.name}
                      className="rounded-xl bg-white p-3"
                    >
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                            >
                              {section.name}
                            </th>
                            {ageGroups.map((tier) => (
                              <th
                                key={tier.id}
                                scope="col"
                                className={classNames(
                                  'px-3 py-3.5 text-center text-sm font-semibold',
                                  tier.featured
                                    ? 'text-indigo-600'
                                    : 'text-gray-900',
                                )}
                              >
                                {tier.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {section.features.map((feature) => (
                            <tr key={feature.name}>
                              <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0">
                                {feature.name}
                              </td>
                              {ageGroups.map((tier) => (
                                <td
                                  key={`${tier.id}-${feature.name}`}
                                  className="px-3 py-4 text-center text-sm"
                                >
                                  {typeof feature.tiers[tier.id] ===
                                  'string' ? (
                                    <span
                                      className={
                                        tier.featured
                                          ? 'font-medium text-indigo-600'
                                          : 'text-gray-900'
                                      }
                                    >
                                      {feature.tiers[tier.id]}
                                    </span>
                                  ) : feature.tiers[tier.id] === true ? (
                                    <CheckIcon
                                      className="mx-auto h-5 w-5 text-indigo-600"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <XMarkIcon
                                      className="mx-auto h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>

        {/* Mobile program details */}
        <div className="bg-white py-16 lg:hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Program Details
              </h2>
              <div className="mt-8 space-y-10">
                {ageGroups2.map((group) => (
                  <div
                    key={group.name}
                    className="border-t border-gray-200 pt-10"
                  >
                    <h3 className="text-xl font-bold tracking-tight text-gray-900">
                      {group.name}
                    </h3>
                    <p className="mt-3 text-base text-gray-600">
                      {group.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-indigo-600">
                        Expectations
                      </h4>
                      <ul role="list" className="mt-4 space-y-3">
                        {group.expectations.map((expectation) => (
                          <li key={expectation} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-indigo-600"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-gray-600">
                              {expectation}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-indigo-600">
                        Equipment & Gear
                      </h4>
                      <ul role="list" className="mt-4 space-y-3">
                        {group.equipment.map((item) => (
                          <li key={item} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-indigo-600"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-gray-600">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-indigo-50 px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">
              Ready to begin your basketball journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-600">
              Apply today and take the first step toward developing your
              basketball skills with Houston's premier training academy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="text-sm font-semibold leading-6 text-indigo-900"
              >
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2024 New Wave Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
