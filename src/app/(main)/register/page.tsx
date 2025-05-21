'use client'

import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { RegistrationForm } from '@/components/RegistrationForm'

// Types for program and form data
type Program = {
  id: string
  name: string
  deposit: string
  monthlyFee?: string
  sessionFee?: string
  description: string
  image: string
}

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  age: string
  program: string
  experience: string
  parentName: string
  parentEmail: string
  parentPhone: string
  additionalInfo: string
  emergencyContact: string
  emergencyPhone: string
  medicalInfo: string
}

// Program data with deposit information
const programs: Program[] = [
  {
    id: 'youth',
    name: 'Youth Development (Ages 5-12)',
    deposit: '$99.00',
    monthlyFee: '$199.00',
    description:
      'Build fundamental skills and develop a love for the game in a fun, engaging environment.',
    image:
      'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'elite',
    name: 'Elite Training (Ages 13-18)',
    deposit: '$149.00',
    monthlyFee: '$299.00',
    description:
      'Advanced training program for serious players looking to elevate their game to the next level.',
    image:
      'https://images.unsplash.com/photo-1546519638-68e109acd27b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'hs-elite',
    name: 'High School Elite',
    deposit: '$199.00',
    monthlyFee: '$399.00',
    description:
      'Intensive training program designed for high school athletes preparing for college basketball.',
    image:
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'one-on-one',
    name: 'One-on-One Training',
    deposit: '$75.00',
    sessionFee: '$75.00',
    description:
      'Personalized training sessions with our expert coaches for players of all ages.',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
  },
]

export default function RegisterPage() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [formStage, setFormStage] = useState('registration') // registration, payment

  // Function to handle program selection from the registration form
  const handleProgramSelect = (programId: string): void => {
    const program = programs.find((p) => p.id === programId)
    if (program) {
      setSelectedProgram(program)
    }
  }

  // Function to handle form submission and move to payment stage
  const handleFormSubmit = (formData: FormData): void => {
    // Store form data and move to payment stage
    console.log('Form data submitted:', formData)
    setFormStage('payment')
  }

  return (
    <div className="bg-white">
      {formStage === 'registration' ? (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Register for New Wave Academy
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Join Houston&apos;s premier basketball training facility. Fill out
              the form below to begin your journey with us.
            </p>
            <div className="mt-8">
              <RegistrationForm
                onProgramSelect={handleProgramSelect}
                onFormSubmit={handleFormSubmit}
                programs={programs}
              />
            </div>
          </div>
        </div>
      ) : (
        <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
          <h1 className="sr-only">Checkout</h1>

          {/* Mobile order summary */}
          <section
            aria-labelledby="order-heading"
            className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
          >
            <Disclosure as="div" className="mx-auto max-w-lg">
              {({ open }) => (
                <>
                  <div className="flex items-center justify-between">
                    <h2
                      id="order-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Program Registration
                    </h2>
                    <Disclosure.Button className="group font-medium text-blue-600 hover:text-blue-500">
                      <span className={open ? 'block' : 'hidden'}>
                        Hide details
                      </span>
                      <span className={!open ? 'block' : 'hidden'}>
                        Show details
                      </span>
                    </Disclosure.Button>
                  </div>

                  <Disclosure.Panel>
                    <div className="mt-4">
                      {selectedProgram && (
                        <div className="flex space-x-6 py-6">
                          <img
                            alt={selectedProgram.name}
                            src={selectedProgram.image}
                            className="h-20 w-20 flex-none rounded-md bg-gray-200 object-cover"
                          />
                          <div className="flex flex-col justify-between space-y-4">
                            <div className="space-y-1 text-sm font-medium">
                              <h3 className="text-gray-900">
                                {selectedProgram.name}
                              </h3>
                              <p className="text-gray-900">
                                Registration Fee: {selectedProgram.deposit}
                              </p>
                              <p className="text-gray-500">
                                {selectedProgram.monthlyFee
                                  ? `Monthly Fee: ${selectedProgram.monthlyFee}`
                                  : `Session Fee: ${selectedProgram.sessionFee}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <dl className="mt-6 space-y-4 text-sm font-medium text-gray-500">
                      <div className="flex justify-between">
                        <dt>Registration Deposit</dt>
                        <dd className="text-gray-900">
                          {selectedProgram?.deposit}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Processing Fee</dt>
                        <dd className="text-gray-900">$5.00</dd>
                      </div>
                    </dl>
                  </Disclosure.Panel>

                  <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
                    <span className="text-base">Total Due Today</span>
                    <span className="text-base">
                      $
                      {selectedProgram
                        ? (
                            parseFloat(
                              selectedProgram.deposit.replace('$', ''),
                            ) + 5
                          ).toFixed(2)
                        : '0.00'}
                    </span>
                  </p>
                </>
              )}
            </Disclosure>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex"
          >
            <h2 id="summary-heading" className="sr-only">
              Registration summary
            </h2>

            <div className="flex flex-1 flex-col overflow-y-auto px-6 pt-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Program Registration
                </h3>
              </div>

              {selectedProgram && (
                <div className="flex space-x-6 border-b border-gray-200 py-6">
                  <img
                    alt={selectedProgram.name}
                    src={selectedProgram.image}
                    className="h-24 w-24 flex-none rounded-md bg-gray-200 object-cover"
                  />
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="space-y-1 text-sm font-medium">
                      <h3 className="text-base text-gray-900">
                        {selectedProgram.name}
                      </h3>
                      <p className="text-gray-500">
                        {selectedProgram.description}
                      </p>
                      <p className="mt-2 text-gray-900">
                        Registration Fee: {selectedProgram.deposit}
                      </p>
                      <p className="text-gray-500">
                        {selectedProgram.monthlyFee
                          ? `Monthly Fee: ${selectedProgram.monthlyFee}`
                          : `Session Fee: ${selectedProgram.sessionFee}`}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
              <dl className="mt-2 space-y-6 text-sm font-medium text-gray-500">
                <div className="flex justify-between">
                  <dt>Registration Deposit</dt>
                  <dd className="text-gray-900">{selectedProgram?.deposit}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Processing Fee</dt>
                  <dd className="text-gray-900">$5.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                  <dt className="text-base">Total Due Today</dt>
                  <dd className="text-base">
                    $
                    {selectedProgram
                      ? (
                          parseFloat(selectedProgram.deposit.replace('$', '')) +
                          5
                        ).toFixed(2)
                      : '0.00'}
                  </dd>
                </div>
              </dl>
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                  After registration, you&apos;ll be set up with a monthly
                  payment plan for the remaining program fees.
                </p>
              </div>
            </div>
          </section>

          {/* Checkout form */}
          <section
            aria-labelledby="payment-heading"
            className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
          >
            <h2 id="payment-heading" className="sr-only">
              Payment and registration details
            </h2>

            <div className="mx-auto max-w-lg lg:pt-16">
              <h2 className="text-xl font-medium text-gray-900">
                Complete Your Registration
              </h2>
              <p className="mt-2 text-gray-500">
                Please provide your payment information to secure your spot in
                the {selectedProgram?.name} program.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <span className="sr-only">Pay with Apple Pay</span>
                  <svg
                    className="h-5 w-auto"
                    fill="currentColor"
                    viewBox="0 0 50 20"
                  >
                    <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
                  </svg>
                </button>
              </div>

              <div className="relative mt-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm font-medium text-gray-500">
                    or pay with card
                  </span>
                </div>
              </div>

              <form className="mt-6">
                <div className="grid grid-cols-12 gap-x-4 gap-y-6">
                  <div className="col-span-full">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email-address"
                        name="email-address"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="name-on-card"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name on card
                    </label>
                    <div className="mt-1">
                      <input
                        id="name-on-card"
                        name="name-on-card"
                        type="text"
                        autoComplete="cc-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        id="card-number"
                        name="card-number"
                        type="text"
                        autoComplete="cc-number"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-8 sm:col-span-9">
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input
                        id="expiration-date"
                        name="expiration-date"
                        type="text"
                        autoComplete="cc-exp"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-4 sm:col-span-3">
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        id="cvc"
                        name="cvc"
                        type="text"
                        autoComplete="csc"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        id="address"
                        name="address"
                        type="text"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full sm:col-span-4">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full sm:col-span-4">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        id="region"
                        name="region"
                        type="text"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full sm:col-span-4">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        id="postal-code"
                        name="postal-code"
                        type="text"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <div className="flex h-5 items-center">
                    <input
                      id="setup-autopay"
                      name="setup-autopay"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      defaultChecked
                    />
                  </div>
                  <label
                    htmlFor="setup-autopay"
                    className="text-sm text-gray-700"
                  >
                    Set up automatic monthly payments for the remainder of the
                    program fees
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Pay $
                  {selectedProgram
                    ? (
                        parseFloat(selectedProgram.deposit.replace('$', '')) + 5
                      ).toFixed(2)
                    : '0.00'}
                </button>

                <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
                  <LockClosedIcon
                    className="mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Secure payment processing
                </p>
              </form>
            </div>
          </section>
        </main>
      )}
    </div>
  )
}
