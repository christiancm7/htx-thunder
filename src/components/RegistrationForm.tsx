'use client'

import { useState, useEffect } from 'react'

// Define types for the component props
type Program = {
  id: string
  name: string
  deposit: string
  monthlyFee?: string
  sessionFee?: string
  description: string
  image: string
}

type RegistrationFormProps = {
  programs: Program[]
  onProgramSelect: (programId: string) => void
  onFormSubmit: (formData: FormData) => void
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

export function RegistrationForm({
  programs,
  onProgramSelect,
  onFormSubmit,
}: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    program: '',
    experience: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    additionalInfo: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalInfo: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Pass form data to parent component for processing
    onFormSubmit(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // If program field changes, notify parent component
    if (name === 'program') {
      onProgramSelect(value)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-2xl font-bold leading-6 text-gray-900">
              Player Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Please fill out this form to register for New Wave Academy
              programs.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="age"
                  id="age"
                  required
                  min="5"
                  max="18"
                  value={formData.age}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="program"
                className="block text-sm font-medium text-gray-700"
              >
                Program
              </label>
              <div className="mt-1">
                <select
                  id="program"
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select a program</option>
                  {programs.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700"
              >
                Basketball Experience
              </label>
              <div className="mt-1">
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Parent/Guardian Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Please provide contact information for the parent or guardian.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="parentName"
                className="block text-sm font-medium text-gray-700"
              >
                Parent/Guardian Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="parentName"
                  id="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="parentEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Parent/Guardian Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="parentEmail"
                  id="parentEmail"
                  required
                  value={formData.parentEmail}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="parentPhone"
                className="block text-sm font-medium text-gray-700"
              >
                Parent/Guardian Phone
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="parentPhone"
                  id="parentPhone"
                  required
                  value={formData.parentPhone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Emergency Contact & Medical Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be kept confidential and only used in case
              of emergency.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="emergencyContact"
                className="block text-sm font-medium text-gray-700"
              >
                Emergency Contact Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="emergencyContact"
                  id="emergencyContact"
                  required
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="emergencyPhone"
                className="block text-sm font-medium text-gray-700"
              >
                Emergency Contact Phone
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="emergencyPhone"
                  id="emergencyPhone"
                  required
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="medicalInfo"
                className="block text-sm font-medium text-gray-700"
              >
                Relevant Medical Information
              </label>
              <div className="mt-1">
                <textarea
                  id="medicalInfo"
                  name="medicalInfo"
                  rows={3}
                  value={formData.medicalInfo}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Allergies, medical conditions, etc."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Additional Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Is there anything else you would like us to know?
            </p>
          </div>
          <div className="mt-6">
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={3}
              value={formData.additionalInfo}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  )
}
