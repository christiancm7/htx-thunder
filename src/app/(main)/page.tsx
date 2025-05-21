import { Hero } from '@/components/Hero'
import { CheckIcon, StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Expert Coaching Staff',
    description:
      'Train with former professional players and certified coaches with years of experience developing young talent.',
    icon: CheckIcon,
  },
  {
    name: 'State-of-the-Art Facility',
    description:
      'Access to premium courts, advanced training equipment, and performance analysis technology.',
    icon: CheckIcon,
  },
  {
    name: 'Personalized Development',
    description:
      'Custom training plans tailored to your skill level, position, and goals to maximize your potential.',
    icon: CheckIcon,
  },
  {
    name: 'Comprehensive Programs',
    description:
      'From youth development to college prep, our age-appropriate programs build skills progressively.',
    icon: CheckIcon,
  },
  {
    name: 'Competitive Opportunities',
    description:
      'Participate in showcase events, leagues, and tournaments to apply your skills in real game situations.',
    icon: CheckIcon,
  },
  {
    name: 'Character Development',
    description:
      'We build not just better players, but better people through leadership, discipline, and teamwork.',
    icon: CheckIcon,
  },
]

const testimonials = [
  {
    name: 'Marcus Johnson',
    role: 'High School Elite Graduate',
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
    quote:
      'New Wave Academy transformed my game. I went from a bench player to receiving multiple D1 scholarship offers in just two years.',
    achievement: 'Earned D1 Basketball Scholarship',
  },
  {
    name: 'Alicia Martinez',
    role: 'Youth Development Graduate',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
    quote:
      "The coaches here don't just teach basketball – they build confidence and character. My daughter has grown so much both on and off the court.",
    achievement: 'Middle School Team Captain',
  },
  {
    name: 'Jamal Wilson',
    role: 'Elite Training Program',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
    quote:
      "The personalized training program identified weaknesses in my game I never recognized. I've become a complete player thanks to New Wave.",
    achievement: 'All-District First Team Selection',
  },
]

const stats = [
  { value: '92%', label: 'Players improved shooting % within 3 months' },
  { value: '15+', label: 'Professional coaches on staff' },
  { value: '85%', label: 'High school seniors receive college offers' },
  { value: '5,000+', label: 'Players trained since 2015' },
]

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Stats section */}
      <div className="relative -mt-12 bg-transparent sm:-mt-16 lg:-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-6 rounded-2xl bg-white/80 p-8 backdrop-blur-sm sm:grid-cols-2 md:gap-y-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center"
                >
                  <dt className="text-center text-base leading-7 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-3xl font-bold leading-9 tracking-tight text-blue-600">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              ELITE BASKETBALL DEVELOPMENT
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transform Your Game
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive approach focuses on all aspects of player
              development, from fundamental skills to advanced strategies.
            </p>
          </div>
          <div className="relative mx-auto mt-16">
            {/* Basketball graphic in background */}
            <div className="absolute -inset-4 -z-10 opacity-10">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeDasharray="2"
                />
                <path
                  d="M10,50 h80 M50,10 v80 M20,20 L80,80 M20,80 L80,20"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeDasharray="2"
                />
              </svg>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white transition-colors group-hover:bg-blue-700">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results/Testimonials section */}
      <div className="overflow-hidden bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">
                  SUCCESS STORIES
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Players Succeed
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At New Wave Academy, we measure success by the growth of our
                  players. Hear directly from those who have experienced our
                  proven training methods.
                </p>
                <div className="mt-8 space-y-8">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.name} className="relative">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                        <StarIcon
                          className="h-6 w-6 text-blue-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="pl-14">
                        <blockquote className="text-base italic text-gray-800">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>
                        <div className="mt-3 flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                            <img
                              src={testimonial.imageUrl}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              {testimonial.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {testimonial.role}
                            </p>
                            <p className="mt-0.5 text-xs text-blue-600">
                              {testimonial.achievement}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <a
                    href="/success-stories"
                    className="text-sm font-semibold leading-6 text-blue-600"
                  >
                    View more success stories <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-800 opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1626253752641-39e67ba402d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Basketball team celebrating"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
              </div>
              <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Player in action"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Training Focus Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              COMPREHENSIVE TRAINING
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building Complete Players
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our training methodology develops all aspects of basketball
              excellence
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Skill Cards */}
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="absolute right-2 top-2 h-20 w-20 text-blue-100/40">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 1.5a.75.75 0 0 1 .75.75v7.5h7.5a.75.75 0 0 1 0 1.5h-7.5v7.5a.75.75 0 0 1-1.5 0v-7.5h-7.5a.75.75 0 0 1 0-1.5h7.5v-7.5A.75.75 0 0 1 12 1.5Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Shooting Mechanics
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Perfect form and technique for consistent scoring from
                  anywhere on the court
                </p>
              </div>
              <div className="bg-blue-50 p-4">
                <a
                  href="/programs"
                  className="text-sm font-medium text-blue-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="absolute right-2 top-2 h-20 w-20 text-blue-100/40">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ball Handling
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Advanced dribbling skills to control the game and beat
                  defenders with confidence
                </p>
              </div>
              <div className="bg-blue-50 p-4">
                <a
                  href="/programs"
                  className="text-sm font-medium text-blue-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="absolute right-2 top-2 h-20 w-20 text-blue-100/40">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
                  <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />
                  <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25a.75.75 0 0 0 .71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Basketball IQ
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Developing court vision, decision making, and strategic
                  understanding of the game
                </p>
              </div>
              <div className="bg-blue-50 p-4">
                <a
                  href="/programs"
                  className="text-sm font-medium text-blue-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="absolute right-2 top-2 h-20 w-20 text-blue-100/40">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Athletic Development
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Sport-specific strength, agility, and conditioning to maximize
                  physical performance
                </p>
              </div>
              <div className="bg-blue-50 p-4">
                <a
                  href="/programs"
                  className="text-sm font-medium text-blue-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate overflow-hidden bg-blue-600">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Basketball court"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 mix-blend-multiply"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to elevate your game?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join New Wave Academy today and start your journey toward
              basketball excellence with Houston&apos;s premier training
              program.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/admissions"
                className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 shadow-sm transition duration-150 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
