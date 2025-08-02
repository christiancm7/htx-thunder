import Image from 'next/image'
import Link from 'next/link'
import {
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  WifiIcon,
  ShieldCheckIcon,
  CameraIcon,
  TrophyIcon,
  UserGroupIcon,
  HeartIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  StarIcon,
  ArrowRightIcon,
  PlayIcon,
} from '@heroicons/react/20/solid'

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

export default function FacilitiesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/court.webp"
            alt="New Wave Academy facilities"
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
                    20,000 Sq Ft Elite Training Center
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">World-Class</span>
                <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 bg-clip-text text-transparent">
                  Training Facility
                </span>
              </h1>

              {/* Subheading */}
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-300 sm:text-2xl">
                Experience basketball training at its finest in Houston&apos;s
                most advanced basketball facility. Every detail designed for
                championship development.
              </p>

              {/* Location Badge */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
                  <MapPinIcon className="h-5 w-5 text-accent-400" />
                  <span className="font-medium text-white">
                    5811 Chimney Rock Road, Houston, TX 77081
                  </span>
                </div>
              </div>
            </div>
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
              develop elite basketball players at every level of their journey.
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
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
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

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Basketball facility"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
        </div>

        <div className="section-padding relative">
          <div className="container-padding mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Experience Excellence
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                {' '}
                Firsthand
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-xl leading-8 text-gray-300">
              See why New Wave Academy is Houston&apos;s premier basketball
              training destination. Schedule your facility tour today.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary px-8 py-4 text-lg shadow-2xl hover:shadow-accent-500/25"
              >
                Book Your Tour
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center text-lg font-semibold leading-6 text-white transition-colors hover:text-accent-300"
              >
                View Programs
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
