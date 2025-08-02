'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOffice2Icon,
  ArrowRightIcon,
} from '@heroicons/react/20/solid'

const contactInfo = [
  {
    title: 'Phone',
    description: 'Call us during business hours',
    content: '(281) 889-0047',
    href: 'tel:281-889-0047',
    icon: PhoneIcon,
  },
  {
    title: 'Email',
    description: 'Send us a message anytime',
    content: 'info@newwaveprepacademy.com',
    href: 'mailto:info@newwaveprepacademy.com',
    icon: EnvelopeIcon,
  },
  {
    title: 'Location',
    description: 'Visit our facility',
    content: '5811 Chimney Rock Road\nHouston, TX 77081',
    href: 'https://maps.google.com/maps?q=5811+Chimney+Rock+Road+Houston+TX+77081',
    icon: MapPinIcon,
  },
]

const operatingHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 12:00 PM, 4:00 PM - 9:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: '1:00 PM - 6:00 PM' },
  { day: 'Holiday Hours', hours: 'Call for availability' },
]

const quickActions = [
  {
    title: 'Register Now',
    description: 'Join our basketball training program',
    action: 'Start Registration',
    href: '/register',
    gradient: 'from-primary-600 to-primary-700',
  },
  {
    title: 'Learn About Our Program',
    description: 'Complete basketball training for all ages',
    action: 'View Program Details',
    href: '/programs',
    gradient: 'from-accent-600 to-accent-700',
  },
  {
    title: 'Free Trial Session',
    description: 'Experience our training firsthand',
    action: 'Schedule Trial',
    href: '/contact',
    gradient: 'from-primary-600 to-accent-600',
  },
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>(
    'idle',
  )
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    playerAge: '',
    interestedProgram: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          playerAge: '',
          interestedProgram: '',
          message: '',
        })
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setFormStatus('error')
    }
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Contact New Wave Academy"
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

        <div className="relative flex min-h-[70vh] items-center">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-8 flex justify-center">
                <div className="group relative rounded-full px-4 py-2 text-sm leading-6 text-gray-300 ring-1 ring-gray-600 transition-all duration-300 hover:ring-gray-500">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600/20 to-accent-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400"></span>
                    We&apos;re Here to Help
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">Get in Touch</span>
                <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 bg-clip-text text-transparent">
                  Start Your Journey
                </span>
              </h1>

              {/* Subheading */}
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-300 sm:text-2xl">
                Ready to join our basketball training program? Contact our team
                to learn more, register your child, or schedule a free trial
                session.
              </p>

              {/* Quick Contact Info */}
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    className="card-hover group rounded-2xl border border-gray-700 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {info.title}
                    </h3>
                    <p className="mb-3 text-sm text-gray-400">
                      {info.description}
                    </p>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white">
                      {info.content.split('\n').map((line, index) => (
                        <span key={index} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Send us a message
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="playerAge"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Player age group
                    </label>
                    <div className="mt-2">
                      <select
                        id="playerAge"
                        name="playerAge"
                        value={formData.playerAge}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        required
                      >
                        <option value="">Select age group</option>
                        <option value="5-12">5-12 years</option>
                        <option value="13-17">13-17 years</option>
                        <option value="18+">18+ years</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">
                      Program Interest
                    </label>
                    <div className="mt-2">
                      <div className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                        Complete Basketball Training Program (All Ages)
                      </div>
                      <input
                        type="hidden"
                        name="interestedProgram"
                        value="basketball-training"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      placeholder="Tell us about your basketball goals and any questions you have..."
                    />
                  </div>
                </div>

                <div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </div>

                {formStatus === 'success' && (
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon
                          className="h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Message sent successfully! We&apos;ll get back to you
                          within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="rounded-lg bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-red-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">
                          Failed to send message. Please try again or contact us
                          directly at{' '}
                          <a
                            href="tel:281-889-0047"
                            className="font-semibold underline"
                          >
                            (281) 889-0047
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information & Hours */}
            <div className="space-y-8">
              {/* Operating Hours */}
              <div className="glass-effect rounded-2xl p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                    <ClockIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Training Hours
                    </h3>
                    <p className="text-gray-600">When we&apos;re open</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {operatingHours.map((hours, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="font-medium text-gray-900">
                        {hours.day}
                      </span>
                      <span className="text-gray-600">{hours.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-effect rounded-2xl p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-accent-600 to-accent-700 text-white">
                    <BuildingOffice2Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Quick Actions
                    </h3>
                    <p className="text-gray-600">Get started today</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <Link
                      key={index}
                      href={action.href}
                      className="card-hover group block rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:border-primary-300 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-700">
                            {action.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {action.description}
                          </p>
                        </div>
                        <ArrowRightIcon className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Location Info */}
              <div className="glass-effect rounded-2xl p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Visit Our Facility
                    </h3>
                    <p className="text-gray-600">Come see us in person</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      5811 Chimney Rock Road
                      <br />
                      Houston, TX 77081
                    </p>
                  </div>
                  <div>
                    <Link
                      href="https://maps.google.com/maps?q=5811+Chimney+Rock+Road+Houston+TX+77081"
                      target="_blank"
                      className="btn-primary inline-flex w-full items-center justify-center"
                    >
                      <MapPinIcon className="mr-2 h-4 w-4" />
                      Get Directions
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
              Ready to Elevate
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                {' '}
                Your Game?
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-xl leading-8 text-gray-300">
              Join our comprehensive basketball training program designed for
              kids of all ages and skill levels. Experience quality coaching and
              individual attention in a fun, supportive environment.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/register"
                className="btn-primary px-8 py-4 text-lg shadow-2xl hover:shadow-accent-500/25"
              >
                Register Now
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center text-lg font-semibold leading-6 text-white transition-colors hover:text-accent-300"
              >
                Learn More
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
