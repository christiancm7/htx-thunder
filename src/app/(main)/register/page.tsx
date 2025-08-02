'use client'

import { useState } from 'react'
import {
  CheckIcon,
  UserIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CalendarIcon,
} from '@heroicons/react/20/solid'

type RegistrationFormData = {
  // Player Information
  playerFirstName: string
  playerLastName: string
  playerAge: string
  playerGender: string
  school: string
  grade: string
  experienceLevel: string

  // Parent/Guardian Information
  parentFirstName: string
  parentLastName: string
  parentEmail: string
  parentPhone: string
  relationship: string

  // Emergency Contact
  emergencyContactName: string
  emergencyContactPhone: string
  emergencyContactRelationship: string

  // Additional Information
  medicalConditions: string
  specialRequests: string
  preferredStartDate: string
}

const steps = [
  { id: 'player', name: 'Player Info', icon: UserIcon },
  { id: 'parent', name: 'Parent/Guardian', icon: UserGroupIcon },
]

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [registrationComplete, setRegistrationComplete] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<RegistrationFormData>({
    // Player Information
    playerFirstName: '',
    playerLastName: '',
    playerAge: '',
    playerGender: '',
    school: '',
    grade: '',
    experienceLevel: '',

    // Parent/Guardian Information
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    relationship: '',

    // Emergency Contact
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',

    // Additional Information
    medicalConditions: '',
    specialRequests: '',
    preferredStartDate: '',
  })

  const updateFormData = (field: keyof RegistrationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepComplete = (stepIndex: number) => {
    switch (stepIndex) {
      case 0: // Player Info
        return (
          formData.playerFirstName &&
          formData.playerLastName &&
          formData.playerAge &&
          formData.parentEmail
        )
      case 1: // Parent/Guardian Info
        return (
          formData.parentFirstName &&
          formData.parentLastName &&
          formData.parentPhone &&
          formData.emergencyContactName &&
          formData.emergencyContactPhone
        )
      default:
        return false
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      // Send registration email
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          program: 'Complete Basketball Training',
          registrationDate: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setRegistrationComplete(true)
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('Registration failed. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderPlayerForm = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Player Information</h2>
        <p className="mt-4 text-lg text-gray-600">
          Tell us about your child who will be joining our basketball program.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-900">
            First Name *
          </label>
          <input
            type="text"
            value={formData.playerFirstName}
            onChange={(e) => updateFormData('playerFirstName', e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Last Name *
          </label>
          <input
            type="text"
            value={formData.playerLastName}
            onChange={(e) => updateFormData('playerLastName', e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Age *
          </label>
          <input
            type="number"
            value={formData.playerAge}
            onChange={(e) => updateFormData('playerAge', e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
            min="5"
            max="18"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Gender
          </label>
          <select
            value={formData.playerGender}
            onChange={(e) => updateFormData('playerGender', e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            School
          </label>
          <input
            type="text"
            value={formData.school}
            onChange={(e) => updateFormData('school', e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Grade
          </label>
          <input
            type="text"
            value={formData.grade}
            onChange={(e) => updateFormData('grade', e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="e.g., 3rd Grade, Kindergarten"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-900">
            Basketball Experience
          </label>
          <select
            value={formData.experienceLevel}
            onChange={(e) => updateFormData('experienceLevel', e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">Select Experience Level</option>
            <option value="beginner">Beginner (No experience)</option>
            <option value="some">Some experience (1-2 years)</option>
            <option value="intermediate">Intermediate (3+ years)</option>
            <option value="advanced">Advanced player</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-900">
            Parent/Guardian Email *
          </label>
          <input
            type="email"
            value={formData.parentEmail}
            onChange={(e) => updateFormData('parentEmail', e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
            placeholder="We'll use this to contact you about the program"
          />
        </div>
      </div>
    </div>
  )

  const renderParentForm = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Parent/Guardian & Contact Information
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We need parent/guardian information and emergency contact details.
        </p>
      </div>

      <div className="space-y-8">
        {/* Parent/Guardian Info */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-gray-900">
            Parent/Guardian Information
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-900">
                First Name *
              </label>
              <input
                type="text"
                value={formData.parentFirstName}
                onChange={(e) =>
                  updateFormData('parentFirstName', e.target.value)
                }
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Last Name *
              </label>
              <input
                type="text"
                value={formData.parentLastName}
                onChange={(e) =>
                  updateFormData('parentLastName', e.target.value)
                }
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.parentPhone}
                onChange={(e) => updateFormData('parentPhone', e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Relationship to Player
              </label>
              <select
                value={formData.relationship}
                onChange={(e) => updateFormData('relationship', e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">Select Relationship</option>
                <option value="parent">Parent</option>
                <option value="guardian">Guardian</option>
                <option value="grandparent">Grandparent</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-gray-900">
            Emergency Contact
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Emergency Contact Name *
              </label>
              <input
                type="text"
                value={formData.emergencyContactName}
                onChange={(e) =>
                  updateFormData('emergencyContactName', e.target.value)
                }
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Emergency Contact Phone *
              </label>
              <input
                type="tel"
                value={formData.emergencyContactPhone}
                onChange={(e) =>
                  updateFormData('emergencyContactPhone', e.target.value)
                }
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-900">
                Relationship to Player
              </label>
              <input
                type="text"
                value={formData.emergencyContactRelationship}
                onChange={(e) =>
                  updateFormData('emergencyContactRelationship', e.target.value)
                }
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="e.g., Parent, Grandparent, Family Friend"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-gray-900">
            Additional Information
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Preferred Start Date
              </label>
              <input
                type="date"
                value={formData.preferredStartDate}
                onChange={(e) =>
                  updateFormData('preferredStartDate', e.target.value)
                }
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Medical Conditions or Allergies
              </label>
              <textarea
                rows={3}
                value={formData.medicalConditions}
                onChange={(e) =>
                  updateFormData('medicalConditions', e.target.value)
                }
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Any medical conditions, allergies, or medications we should be aware of?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Special Requests or Questions
              </label>
              <textarea
                rows={3}
                value={formData.specialRequests}
                onChange={(e) =>
                  updateFormData('specialRequests', e.target.value)
                }
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Any questions about the program or special requests?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSuccess = () => (
    <div className="space-y-8 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <CheckIcon className="h-10 w-10 text-green-600" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Registration Submitted!
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Thank you for registering for our basketball training program.
          We&apos;ll contact you within 24 hours to confirm your spot and
          discuss scheduling details.
        </p>
      </div>

      <div className="mx-auto max-w-md rounded-2xl bg-gray-50 p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          What happens next?
        </h3>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-start">
            <CheckIcon className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span>We&apos;ll review your registration information</span>
          </div>
          <div className="flex items-start">
            <CheckIcon className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span>Our team will contact you to confirm your spot</span>
          </div>
          <div className="flex items-start">
            <CheckIcon className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span>We&apos;ll discuss scheduling and program details</span>
          </div>
          <div className="flex items-start">
            <CheckIcon className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span>You&apos;ll receive welcome materials and start date</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600">
          Questions? Contact us at{' '}
          <a
            href="tel:281-889-0047"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            (281) 889-0047
          </a>
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => (window.location.href = '/')}
            className="btn-secondary"
          >
            Return Home
          </button>
          <button
            onClick={() => (window.location.href = '/programs')}
            className="btn-primary"
          >
            Learn More About Our Program
          </button>
        </div>
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    if (registrationComplete) {
      return renderSuccess()
    }

    switch (currentStep) {
      case 0:
        return renderPlayerForm()
      case 1:
        return renderParentForm()
      default:
        return renderPlayerForm()
    }
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-padding mx-auto max-w-7xl py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Register for Basketball Training
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-100">
              Join our comprehensive basketball training program for kids of all
              ages and skill levels
            </p>
          </div>
        </div>
      </div>

      {!registrationComplete && (
        <>
          {/* Progress Steps */}
          <div className="border-b border-gray-200 bg-white">
            <div className="container-padding mx-auto max-w-7xl">
              <nav
                className="flex justify-center space-x-8 py-6"
                aria-label="Progress"
              >
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex items-center ${
                      index <= currentStep
                        ? 'text-primary-600'
                        : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        index < currentStep
                          ? 'border-primary-600 bg-primary-600 text-white'
                          : index === currentStep
                            ? 'border-primary-600 text-primary-600'
                            : 'border-gray-300 text-gray-400'
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckIcon className="h-6 w-6" />
                      ) : (
                        <step.icon className="h-6 w-6" />
                      )}
                    </div>
                    <span className="ml-3 text-sm font-medium">
                      {step.name}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowRightIcon className="ml-8 h-5 w-5 text-gray-300" />
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Form Content */}
      <div className="section-padding">
        <div className="container-padding mx-auto max-w-4xl">
          {renderCurrentStep()}

          {!registrationComplete && (
            <div className="mt-12 flex items-center justify-between">
              {currentStep > 0 ? (
                <button
                  onClick={prevStep}
                  className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <ArrowRightIcon className="mr-2 h-4 w-4 rotate-180" />
                  Previous
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  disabled={!isStepComplete(currentStep)}
                  className={`inline-flex items-center rounded-lg px-6 py-3 text-sm font-medium ${
                    isStepComplete(currentStep)
                      ? 'btn-primary'
                      : 'cursor-not-allowed bg-gray-300 text-gray-500'
                  }`}
                >
                  Next
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepComplete(currentStep) || isSubmitting}
                  className={`inline-flex items-center rounded-lg px-6 py-3 text-sm font-medium ${
                    isStepComplete(currentStep) && !isSubmitting
                      ? 'btn-primary'
                      : 'cursor-not-allowed bg-gray-300 text-gray-500'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
