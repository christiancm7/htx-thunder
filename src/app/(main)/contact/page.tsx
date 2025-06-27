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
    content: 'info@newwaveacademy.com',
    href: 'mailto:info@newwaveacademy.com',
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
  { day: 'Monday - Friday', hours: '3:00 PM - 9:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

const quickActions = [
  {
    title: 'Schedule Assessment',
    description: 'Book a free skill evaluation',
    action: 'Schedule Now',
    href: '/contact',
    gradient: 'from-primary-600 to-primary-700',
  },
  {
    title: 'Facility Tour',
    description: 'Visit our world-class facility',
    action: 'Book Tour',
    href: '/facilities',
    gradient: 'from-accent-600 to-accent-700',
  },
  {
    title: 'Program Information',
    description: 'Learn about our training programs',
    action: 'View Programs',
    href: '/programs',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend here
    // For this example, we'll just simulate a successful submission
    setTimeout(() => {
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
    }, 500)
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
          <div className="from-primary-900/95 via-primary-800/80 to-primary-900/95 absolute inset-0 bg-gradient-to-r"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-primary-500/10 animate-pulse-slow absolute -right-40 -top-40 h-80 w-80 rounded-full blur-3xl"></div>
          <div className="bg-accent-500/10 animate-pulse-slow absolute -left-40 top-1/2 h-96 w-96 rounded-full blur-3xl delay-1000"></div>
        </div>

        <div className="relative flex min-h-[70vh] items-center">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-8 flex justify-center">
                <div className="group relative rounded-full px-4 py-2 text-sm leading-6 text-gray-300 ring-1 ring-gray-600 transition-all duration-300 hover:ring-gray-500">
                  <span className="from-primary-600/20 to-accent-600/20 absolute inset-0 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative flex items-center gap-2">
                    <span className="bg-accent-400 h-2 w-2 animate-pulse rounded-full"></span>
                    We&apos;re Here to Help
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">Get in Touch</span>
                <span className="from-primary-400 via-primary-500 to-accent-400 block bg-gradient-to-r bg-clip-text text-transparent">
                  Start Your Journey
                </span>
              </h1>

              {/* Subheading */}
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-300 sm:text-2xl">
                Ready to take your basketball skills to the next level? Contact
                our team to learn more about our programs, schedule an
                assessment, or book a facility tour.
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
                    <div className="from-primary-600 to-primary-700 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white">
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
                        className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors sm:text-sm"
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
                        className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors sm:text-sm"
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
                      className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors sm:text-sm"
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
                      className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors sm:text-sm"
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
                        className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors sm:text-sm"
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
                    <label
                      htmlFor="interestedProgram"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Interested Program
                    </label>
                    <div className="mt-2">
                      <select
                        id="interestedProgram"
                        name="interestedProgram"
                        value={formData.interestedProgram}
                        onChange={handleChange}
                        className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors sm:text-sm"
                      >
                        <option value="">Select program</option>
                        <option value="youth-development">
                          Youth Development
                        </option>
                        <option value="elite-training">Elite Training</option>
                        <option value="high-school-elite">
                          High School Elite
                        </option>
                        <option value="individual-training">
                          Individual Training
                        </option>
                      </select>
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
                      className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors sm:text-sm"
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
              </form>
            </div>

            {/* Contact Information & Hours */}
            <div className="space-y-8">
              {/* Operating Hours */}
              <div className="glass-effect rounded-2xl p-8">
                <div className="mb-6 flex items-center">
                  <div className="from-primary-600 to-primary-700 mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white">
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
                  <div className="from-accent-600 to-accent-700 mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white">
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
                      className="card-hover hover:border-primary-300 group block rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="group-hover:text-primary-700 font-semibold text-gray-900">
                            {action.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {action.description}
                          </p>
                        </div>
                        <ArrowRightIcon className="group-hover:text-primary-600 h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Location Info */}
              <div className="glass-effect rounded-2xl p-8">
                <div className="mb-6 flex items-center">
                  <div className="from-primary-600 to-accent-600 mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white">
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
              <span className="from-accent-300 to-accent-500 bg-gradient-to-r bg-clip-text text-transparent">
                {' '}
                Your Game?
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-xl leading-8 text-gray-300">
              Join Houston&apos;s premier basketball academy and discover what
              elite training can do for your game. Your journey to excellence
              starts with a single step.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/admissions"
                className="btn-primary hover:shadow-accent-500/25 px-8 py-4 text-lg shadow-2xl"
              >
                Apply Today
              </Link>
              <Link
                href="/programs"
                className="hover:text-accent-300 inline-flex items-center text-lg font-semibold leading-6 text-white transition-colors"
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
