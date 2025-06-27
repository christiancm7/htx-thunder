import { Hero } from '@/components/Hero'
import {
  CheckIcon,
  StarIcon,
  TrophyIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Elite Coaching Staff',
    description:
      'Train with former college and professional players who bring years of high-level experience and proven development methodologies.',
    icon: TrophyIcon,
  },
  {
    name: 'Championship Facility',
    description:
      'Train in our state-of-the-art 20,000 sq ft facility with professional-grade courts, advanced analytics, and recovery technology.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Personalized Development',
    description:
      'Receive individualized training plans with detailed performance tracking and video analysis to accelerate your improvement.',
    icon: UserGroupIcon,
  },
  {
    name: 'Proven Track Record',
    description:
      'Join over 500+ players who have earned college scholarships and professional opportunities through our programs.',
    icon: CheckIcon,
  },
  {
    name: 'Mental Performance',
    description:
      'Develop championship mindset through sports psychology training, leadership development, and competitive preparation.',
    icon: HeartIcon,
  },
  {
    name: 'Community Excellence',
    description:
      "Be part of Houston's premier basketball community where champions are developed both on and off the court.",
    icon: StarIcon,
  },
]

const testimonials = [
  {
    name: 'Marcus Johnson',
    role: 'High School Elite Graduate',
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
    quote:
      "New Wave Academy didn't just improve my basketball skills—they transformed my entire approach to the game. The individualized attention and professional-level training prepared me for the next level.",
    achievement: 'Earned Full D1 Basketball Scholarship',
    rating: 5,
  },
  {
    name: 'Alicia Martinez',
    role: 'Youth Development Graduate',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
    quote:
      'The coaches at New Wave Academy understand that development goes beyond just basketball. They build character, confidence, and leadership skills that last a lifetime.',
    achievement: 'Team Captain & Academic All-Star',
    rating: 5,
  },
  {
    name: 'Jamal Wilson',
    role: 'Elite Training Program',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
    quote:
      "The training methodology at New Wave is unmatched. They use cutting-edge technology and proven systems that you won't find anywhere else in Houston.",
    achievement: 'Regional Player of the Year',
    rating: 5,
  },
]

const stats = [
  {
    value: '95%',
    label: 'Players improve performance within 90 days',
    highlight: true,
  },
  {
    value: '500+',
    label: 'College scholarships earned by our players',
    highlight: false,
  },
  {
    value: '20+',
    label: 'Former college & pro coaches on staff',
    highlight: false,
  },
  {
    value: '15K+',
    label: 'Hours of elite training delivered annually',
    highlight: true,
  },
]

const trainingFocus = [
  {
    title: 'Shooting Excellence',
    description:
      'Master perfect shooting mechanics with our biomechanics-based approach and real-time feedback systems.',
    image:
      'https://images.unsplash.com/photo-1581390649541-ec100910c90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Biomechanical Analysis',
      'Shot Tracking Technology',
      'Range Extension Program',
    ],
  },
  {
    title: 'Elite Ball Handling',
    description:
      'Develop unshakeable confidence with the ball through progressive skill development and game-situation training.',
    image:
      'https://images.unsplash.com/flagged/photo-1580051671644-53be1019725e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Advanced Dribbling Patterns',
      'Pressure Training',
      'Game Application Drills',
    ],
  },
  {
    title: 'Basketball IQ',
    description:
      'Elevate your understanding of the game through film study, strategic training, and decision-making development.',
    image:
      'https://images.unsplash.com/flagged/photo-1580051706353-f037886dedac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Film Study Sessions',
      'Strategic Game Analysis',
      'Leadership Development',
    ],
  },
  {
    title: 'Athletic Performance',
    description:
      'Maximize your physical potential with sport-specific conditioning and injury prevention protocols.',
    image:
      'https://images.unsplash.com/photo-1581390561595-2544b8d26538?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Strength & Conditioning',
      'Speed & Agility Training',
      'Recovery Protocols',
    ],
  },
]

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      {/* Enhanced Stats Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto max-w-6xl">
            <div className="glass-effect rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center ${
                      stat.highlight ? 'relative' : ''
                    }`}
                  >
                    {stat.highlight && (
                      <div className="from-primary-500/10 to-primary-600/10 absolute inset-0 rounded-2xl bg-gradient-to-r blur-xl"></div>
                    )}
                    <div className="relative">
                      <dt className="text-sm font-medium text-gray-600 lg:text-base">
                        {stat.label}
                      </dt>
                      <dd
                        className={`mt-2 text-4xl font-bold tracking-tight lg:text-5xl ${
                          stat.highlight ? 'gradient-text' : 'text-gray-900'
                        }`}
                      >
                        {stat.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
              Elite Basketball Development
            </h2>
            <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Why Champions Choose
              <span className="gradient-text"> New Wave Academy</span>
            </p>
            <p className="mt-6 text-balance text-xl leading-8 text-gray-600">
              Experience the difference that professional-level training,
              cutting-edge technology, and championship mindset development can
              make in your basketball journey.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="card-hover group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8"
                >
                  <div className="from-primary-500/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="from-primary-600 to-primary-700 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r text-white shadow-lg">
                      <feature.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      {feature.name}
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
      </div>

      {/* Training Focus Section */}
      <div className="section-padding">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
              Comprehensive Training
            </h2>
            <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Master Every Aspect of
              <span className="gradient-text"> Championship Basketball</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {trainingFocus.map((focus, index) => (
              <div
                key={focus.title}
                className="card-hover group relative overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={focus.image}
                    alt={focus.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {focus.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    {focus.description}
                  </p>
                  <ul className="space-y-2">
                    {focus.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckIcon className="text-primary-600 mr-3 h-4 w-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="text-primary-600 text-base font-semibold uppercase leading-7 tracking-wide">
              Success Stories
            </h2>
            <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Champions Speak for
              <span className="gradient-text"> Themselves</span>
            </p>
            <p className="mt-6 text-balance text-xl leading-8 text-gray-600">
              Hear from the players whose lives have been transformed through
              our elite training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card-hover relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
              >
                <div className="absolute right-4 top-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="text-accent-400 h-5 w-5" />
                  ))}
                </div>

                <div className="mb-6">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </div>

                <blockquote className="mb-6 leading-relaxed text-gray-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="border-t border-gray-100 pt-6">
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="mb-2 text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                  <div className="text-primary-600 text-sm font-medium">
                    {testimonial.achievement}
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
          <img
            src="https://images.unsplash.com/photo-1573196444192-cc9f26e94408?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Basketball court"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
        </div>

        <div className="section-padding relative">
          <div className="container-padding mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Your Championship Journey
              <span className="from-accent-300 to-accent-500 bg-gradient-to-r bg-clip-text text-transparent">
                Starts Here
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-xl leading-8 text-gray-300">
              Join Houston&apos;s most elite basketball academy and unlock your
              potential with proven training methods, world-class facilities,
              and championship-level coaching.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="/admissions"
                className="btn-primary hover:shadow-accent-500/25 px-8 py-4 text-lg shadow-2xl"
              >
                Begin Your Journey
              </a>
              <a
                href="/programs"
                className="hover:text-accent-300 inline-flex items-center text-lg font-semibold leading-6 text-white transition-colors"
              >
                Explore Programs
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
