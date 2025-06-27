'use client'

import { useState } from 'react'
import {
  CheckIcon,
  ChevronRightIcon,
  CreditCardIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  CalendarIcon,
  UserGroupIcon,
  TrophyIcon,
  ArrowLeftIcon,
} from '@heroicons/react/20/solid'
import SquarePayment from '@/components/SquarePayment'

// Types for program and form data
type Program = {
  id: string
  name: string
  ageRange: string
  registrationFee: number
  monthlyFee?: number
  sessionFee?: number
  description: string
  image: string
  features: string[]
  schedule: string
  duration: string
  groupSize: string
}

type PlayerFormData = {
  firstName: string
  lastName: string
  dateOfBirth: string
  age: string
  gender: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  school: string
  grade: string
  experienceLevel: string
  previousClubs: string
  goals: string
  medicalConditions: string
  allergies: string
  medications: string
}

type ParentFormData = {
  parentFirstName: string
  parentLastName: string
  relationship: string
  parentEmail: string
  parentPhone: string
  parentAddress: string
  parentCity: string
  parentState: string
  parentZipCode: string
  emergencyContactName: string
  emergencyContactPhone: string
  emergencyContactRelationship: string
}

type ScheduleFormData = {
  preferredDays: string[]
  preferredTimes: string[]
  startDate: string
  specialRequests: string
}

// Program data
const programs: Program[] = [
  {
    id: 'youth-development',
    name: 'Youth Development',
    ageRange: 'Ages 5-12',
    registrationFee: 99,
    monthlyFee: 199,
    description:
      'Building future champions through fun, engaging, and age-appropriate training.',
    image:
      'https://images.unsplash.com/photo-1520399636535-24741e71b160?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Fundamental movement patterns',
      'Basic basketball skills',
      'Character building',
      'Small group instruction',
      'Parent progress updates',
    ],
    schedule: 'Mon/Wed or Tue/Thu',
    duration: '90 minutes',
    groupSize: '6-8 players',
  },
  {
    id: 'elite-training',
    name: 'Elite Training',
    ageRange: 'Ages 13-18',
    registrationFee: 149,
    monthlyFee: 299,
    description:
      'Advanced skill development for serious athletes committed to excellence.',
    image:
      'https://plus.unsplash.com/premium_photo-1675366216320-f53a65547770?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Advanced basketball skills',
      'Game situation training',
      'Strength conditioning',
      'Performance analytics',
      'Video analysis',
    ],
    schedule: 'Mon/Wed/Fri',
    duration: '2 hours',
    groupSize: '10-12 players',
  },
  {
    id: 'high-school-elite',
    name: 'High School Elite',
    ageRange: 'Ages 14-18',
    registrationFee: 199,
    monthlyFee: 399,
    description: 'College preparation program for elite high school athletes.',
    image:
      'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=1000&auto=format&fit=crop',
    features: [
      'College-level training',
      'Recruitment preparation',
      'Position-specific development',
      'Mental performance coaching',
      'College scouting connections',
    ],
    schedule: 'Mon-Thu',
    duration: '2 hours',
    groupSize: '8-10 players',
  },
  {
    id: 'individual-training',
    name: 'Individual Training',
    ageRange: 'All Ages',
    registrationFee: 75,
    sessionFee: 75,
    description:
      'Personalized one-on-one training sessions with expert coaches.',
    image:
      'https://plus.unsplash.com/premium_photo-1685366445883-709973744248?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Customized training plans',
      'One-on-one attention',
      'Flexible scheduling',
      'Detailed video analysis',
      'Rapid skill development',
    ],
    schedule: 'Flexible',
    duration: '60 minutes',
    groupSize: '1 player',
  },
]

const steps = [
  { id: 'program', name: 'Select Program', icon: TrophyIcon },
  { id: 'player', name: 'Player Info', icon: UserIcon },
  { id: 'parent', name: 'Parent/Guardian', icon: UserGroupIcon },
  { id: 'schedule', name: 'Schedule', icon: CalendarIcon },
  { id: 'review', name: 'Review', icon: ClipboardDocumentListIcon },
  { id: 'payment', name: 'Payment', icon: CreditCardIcon },
]

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [registrationComplete, setRegistrationComplete] = useState(false)
  const [paymentResult, setPaymentResult] = useState<any>(null)
  const [playerData, setPlayerData] = useState<PlayerFormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'TX',
    zipCode: '',
    school: '',
    grade: '',
    experienceLevel: '',
    previousClubs: '',
    goals: '',
    medicalConditions: '',
    allergies: '',
    medications: '',
  })
  const [parentData, setParentData] = useState<ParentFormData>({
    parentFirstName: '',
    parentLastName: '',
    relationship: '',
    parentEmail: '',
    parentPhone: '',
    parentAddress: '',
    parentCity: '',
    parentState: 'TX',
    parentZipCode: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
  })
  const [scheduleData, setScheduleData] = useState<ScheduleFormData>({
    preferredDays: [],
    preferredTimes: [],
    startDate: '',
    specialRequests: '',
  })

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
      case 0:
        return selectedProgram !== null
      case 1:
        return (
          playerData.firstName &&
          playerData.lastName &&
          playerData.dateOfBirth &&
          playerData.email
        )
      case 2:
        return playerData.age < '18'
          ? parentData.parentFirstName &&
              parentData.parentEmail &&
              parentData.emergencyContactName
          : true
      case 3:
        return scheduleData.startDate !== ''
      case 4:
        return true // Review step is always complete - it's just a summary
      default:
        return false
    }
  }

  const calculateTotal = () => {
    if (!selectedProgram) return 0
    const processingFee = 5.0
    return selectedProgram.registrationFee + processingFee
  }

  const handlePaymentSuccess = (result: any) => {
    setPaymentResult(result)
    setRegistrationComplete(true)
    // You could also redirect to a success page here
    // router.push('/registration-success')
  }

  const handlePaymentError = (error: any) => {
    console.error('Payment error:', error)
    // Error is already handled in the SquarePayment component
  }

  const renderProgramSelection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Choose Your Program
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Select the training program that best fits your goals and experience
          level.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {programs.map((program) => (
          <div
            key={program.id}
            className={`card-hover cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 ${
              selectedProgram?.id === program.id
                ? 'border-primary-500 bg-primary-50 shadow-lg'
                : 'hover:border-primary-300 border-gray-200 bg-white'
            }`}
            onClick={(e) => {
              e.preventDefault()
              console.log('Program clicked:', program.name)
              setSelectedProgram(program)
              console.log('Selected program set to:', program)
            }}
          >
            <div className="mb-4">
              <img
                src={program.image}
                alt={program.name}
                className="h-32 w-full rounded-lg object-cover"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {program.name}
              </h3>
              <p className="text-primary-600 font-medium">{program.ageRange}</p>
              <p className="mt-2 text-gray-600">{program.description}</p>
            </div>

            <div className="mb-4 space-y-2">
              {program.features.slice(0, 3).map((feature) => (
                <div
                  key={feature}
                  className="flex items-center text-sm text-gray-600"
                >
                  <CheckIcon className="text-primary-600 mr-2 h-4 w-4" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 text-sm">
              <div>
                <span className="font-medium text-gray-900">Schedule:</span>
                <p className="text-gray-600">{program.schedule}</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">Duration:</span>
                <p className="text-gray-600">{program.duration}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500">Registration Fee:</span>
                <p className="text-2xl font-bold text-gray-900">
                  ${program.registrationFee}
                </p>
                {program.monthlyFee && (
                  <span className="text-sm text-gray-500">
                    + ${program.monthlyFee}/month
                  </span>
                )}
                {program.sessionFee && (
                  <span className="text-sm text-gray-500">
                    ${program.sessionFee}/session
                  </span>
                )}
              </div>
              {selectedProgram?.id === program.id && (
                <div className="bg-primary-500 rounded-full p-2">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Debug information */}
      {selectedProgram && (
        <div className="mt-4 rounded-lg bg-green-50 p-4">
          <p className="text-sm text-green-800">
            ✓ Selected: {selectedProgram.name} - Step complete:{' '}
            {isStepComplete(0) ? 'Yes' : 'No'}
          </p>
        </div>
      )}
    </div>
  )

  const renderPlayerForm = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Player Information</h2>
        <p className="mt-4 text-lg text-gray-600">
          Tell us about the player who will be joining our program.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-900">
            First Name *
          </label>
          <input
            type="text"
            value={playerData.firstName}
            onChange={(e) =>
              setPlayerData({ ...playerData, firstName: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Last Name *
          </label>
          <input
            type="text"
            value={playerData.lastName}
            onChange={(e) =>
              setPlayerData({ ...playerData, lastName: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Date of Birth *
          </label>
          <input
            type="date"
            value={playerData.dateOfBirth}
            onChange={(e) =>
              setPlayerData({ ...playerData, dateOfBirth: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Age *
          </label>
          <input
            type="number"
            value={playerData.age}
            onChange={(e) =>
              setPlayerData({ ...playerData, age: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Gender
          </label>
          <select
            value={playerData.gender}
            onChange={(e) =>
              setPlayerData({ ...playerData, gender: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Email *
          </label>
          <input
            type="email"
            value={playerData.email}
            onChange={(e) =>
              setPlayerData({ ...playerData, email: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Phone
          </label>
          <input
            type="tel"
            value={playerData.phone}
            onChange={(e) =>
              setPlayerData({ ...playerData, phone: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            School
          </label>
          <input
            type="text"
            value={playerData.school}
            onChange={(e) =>
              setPlayerData({ ...playerData, school: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Grade
          </label>
          <input
            type="text"
            value={playerData.grade}
            onChange={(e) =>
              setPlayerData({ ...playerData, grade: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Basketball Experience
          </label>
          <select
            value={playerData.experienceLevel}
            onChange={(e) =>
              setPlayerData({ ...playerData, experienceLevel: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
          >
            <option value="">Select Experience Level</option>
            <option value="beginner">Beginner (0-1 years)</option>
            <option value="intermediate">Intermediate (2-4 years)</option>
            <option value="advanced">Advanced (5+ years)</option>
            <option value="elite">Elite/Competitive</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Address
          </label>
          <input
            type="text"
            value={playerData.address}
            onChange={(e) =>
              setPlayerData({ ...playerData, address: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              City
            </label>
            <input
              type="text"
              value={playerData.city}
              onChange={(e) =>
                setPlayerData({ ...playerData, city: e.target.value })
              }
              className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              State
            </label>
            <input
              type="text"
              value={playerData.state}
              onChange={(e) =>
                setPlayerData({ ...playerData, state: e.target.value })
              }
              className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              ZIP Code
            </label>
            <input
              type="text"
              value={playerData.zipCode}
              onChange={(e) =>
                setPlayerData({ ...playerData, zipCode: e.target.value })
              }
              className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Basketball Goals
          </label>
          <textarea
            rows={3}
            value={playerData.goals}
            onChange={(e) =>
              setPlayerData({ ...playerData, goals: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            placeholder="What are your basketball goals? (e.g., make school team, improve shooting, college recruitment)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Medical Conditions
          </label>
          <textarea
            rows={2}
            value={playerData.medicalConditions}
            onChange={(e) =>
              setPlayerData({
                ...playerData,
                medicalConditions: e.target.value,
              })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            placeholder="Any medical conditions we should be aware of?"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Allergies
            </label>
            <input
              type="text"
              value={playerData.allergies}
              onChange={(e) =>
                setPlayerData({ ...playerData, allergies: e.target.value })
              }
              className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
              placeholder="Food allergies, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Current Medications
            </label>
            <input
              type="text"
              value={playerData.medications}
              onChange={(e) =>
                setPlayerData({ ...playerData, medications: e.target.value })
              }
              className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const renderParentForm = () => {
    const playerAge = parseInt(playerData.age)
    const isMinor = playerAge < 18

    if (!isMinor) {
      return (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Emergency Contact
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Please provide an emergency contact in case we need to reach
              someone.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Emergency Contact Name *
              </label>
              <input
                type="text"
                value={parentData.emergencyContactName}
                onChange={(e) =>
                  setParentData({
                    ...parentData,
                    emergencyContactName: e.target.value,
                  })
                }
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Emergency Contact Phone *
              </label>
              <input
                type="tel"
                value={parentData.emergencyContactPhone}
                onChange={(e) =>
                  setParentData({
                    ...parentData,
                    emergencyContactPhone: e.target.value,
                  })
                }
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Relationship
              </label>
              <input
                type="text"
                value={parentData.emergencyContactRelationship}
                onChange={(e) =>
                  setParentData({
                    ...parentData,
                    emergencyContactRelationship: e.target.value,
                  })
                }
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                placeholder="e.g., Spouse, Parent, Friend"
              />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Parent/Guardian Information
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Since the player is under 18, we need parent/guardian information.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Parent/Guardian First Name *
            </label>
            <input
              type="text"
              value={parentData.parentFirstName}
              onChange={(e) =>
                setParentData({
                  ...parentData,
                  parentFirstName: e.target.value,
                })
              }
              className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Parent/Guardian Last Name *
            </label>
            <input
              type="text"
              value={parentData.parentLastName}
              onChange={(e) =>
                setParentData({ ...parentData, parentLastName: e.target.value })
              }
              className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Relationship *
            </label>
            <select
              value={parentData.relationship}
              onChange={(e) =>
                setParentData({ ...parentData, relationship: e.target.value })
              }
              className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
              required
            >
              <option value="">Select Relationship</option>
              <option value="parent">Parent</option>
              <option value="guardian">Guardian</option>
              <option value="grandparent">Grandparent</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Parent/Guardian Email *
            </label>
            <input
              type="email"
              value={parentData.parentEmail}
              onChange={(e) =>
                setParentData({ ...parentData, parentEmail: e.target.value })
              }
              className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Parent/Guardian Phone *
            </label>
            <input
              type="tel"
              value={parentData.parentPhone}
              onChange={(e) =>
                setParentData({ ...parentData, parentPhone: e.target.value })
              }
              className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
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
                value={parentData.emergencyContactName}
                onChange={(e) =>
                  setParentData({
                    ...parentData,
                    emergencyContactName: e.target.value,
                  })
                }
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Emergency Contact Phone *
              </label>
              <input
                type="tel"
                value={parentData.emergencyContactPhone}
                onChange={(e) =>
                  setParentData({
                    ...parentData,
                    emergencyContactPhone: e.target.value,
                  })
                }
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Relationship to Player
              </label>
              <input
                type="text"
                value={parentData.emergencyContactRelationship}
                onChange={(e) =>
                  setParentData({
                    ...parentData,
                    emergencyContactRelationship: e.target.value,
                  })
                }
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                placeholder="e.g., Parent, Grandparent, Family Friend"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderScheduleForm = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Schedule Preferences
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Help us find the best training schedule for you.
        </p>
      </div>

      {selectedProgram && selectedProgram.id !== 'individual-training' && (
        <>
          <div>
            <label className="mb-4 block text-sm font-medium text-gray-900">
              Preferred Training Days (select all that work):
            </label>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ].map((day) => (
                <label key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={scheduleData.preferredDays.includes(day)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setScheduleData({
                          ...scheduleData,
                          preferredDays: [...scheduleData.preferredDays, day],
                        })
                      } else {
                        setScheduleData({
                          ...scheduleData,
                          preferredDays: scheduleData.preferredDays.filter(
                            (d) => d !== day,
                          ),
                        })
                      }
                    }}
                    className="text-primary-600 focus:ring-primary-500 rounded border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-900">{day}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-4 block text-sm font-medium text-gray-900">
              Preferred Training Times:
            </label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                'Early Morning (6:00-9:00 AM)',
                'Late Morning (9:00-12:00 PM)',
                'Early Afternoon (12:00-3:00 PM)',
                'Late Afternoon (3:00-6:00 PM)',
                'Evening (6:00-9:00 PM)',
              ].map((time) => (
                <label key={time} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={scheduleData.preferredTimes.includes(time)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setScheduleData({
                          ...scheduleData,
                          preferredTimes: [
                            ...scheduleData.preferredTimes,
                            time,
                          ],
                        })
                      } else {
                        setScheduleData({
                          ...scheduleData,
                          preferredTimes: scheduleData.preferredTimes.filter(
                            (t) => t !== time,
                          ),
                        })
                      }
                    }}
                    className="text-primary-600 focus:ring-primary-500 rounded border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-900">{time}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Preferred Start Date *
          </label>
          <input
            type="date"
            value={scheduleData.startDate}
            onChange={(e) =>
              setScheduleData({ ...scheduleData, startDate: e.target.value })
            }
            className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Special Requests or Notes
        </label>
        <textarea
          rows={4}
          value={scheduleData.specialRequests}
          onChange={(e) =>
            setScheduleData({
              ...scheduleData,
              specialRequests: e.target.value,
            })
          }
          className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
          placeholder="Any specific scheduling needs, requests, or additional information..."
        />
      </div>
    </div>
  )

  const renderReview = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Review Your Registration
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Please review all information before proceeding to payment.
        </p>
      </div>

      {/* Program Summary */}
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="mb-4 text-xl font-bold text-gray-900">
          Selected Program
        </h3>
        {selectedProgram && (
          <div className="flex items-start space-x-4">
            <img
              src={selectedProgram.image}
              alt={selectedProgram.name}
              className="h-20 w-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900">
                {selectedProgram.name}
              </h4>
              <p className="text-primary-600">{selectedProgram.ageRange}</p>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <p>Schedule: {selectedProgram.schedule}</p>
                <p>Duration: {selectedProgram.duration}</p>
                <p>Group Size: {selectedProgram.groupSize}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">
                ${selectedProgram.registrationFee}
              </p>
              <p className="text-sm text-gray-500">Registration Fee</p>
            </div>
          </div>
        )}
      </div>

      {/* Player Summary */}
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="mb-4 text-xl font-bold text-gray-900">
          Player Information
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <span className="text-sm font-medium text-gray-500">Name:</span>
            <p className="text-gray-900">
              {playerData.firstName} {playerData.lastName}
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">Age:</span>
            <p className="text-gray-900">{playerData.age} years old</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">Email:</span>
            <p className="text-gray-900">{playerData.email}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">
              Experience Level:
            </span>
            <p className="text-gray-900">
              {playerData.experienceLevel || 'Not specified'}
            </p>
          </div>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="mb-4 text-xl font-bold text-gray-900">
          Payment Summary
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Registration Fee:</span>
            <span className="text-gray-900">
              ${selectedProgram?.registrationFee}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Processing Fee:</span>
            <span className="text-gray-900">$5.00</span>
          </div>
          <div className="border-t border-gray-200 pt-2">
            <div className="flex justify-between text-lg font-bold">
              <span className="text-gray-900">Total Due Today:</span>
              <span className="text-gray-900">${calculateTotal()}</span>
            </div>
          </div>
        </div>
        {selectedProgram?.monthlyFee && (
          <div className="mt-4 rounded-lg bg-blue-50 p-4">
            <p className="text-sm text-blue-800">
              <strong>Monthly Training Fee:</strong> $
              {selectedProgram.monthlyFee}/month will be charged automatically
              starting after your first session.
            </p>
          </div>
        )}
      </div>
    </div>
  )

  const renderPayment = () => {
    // Square configuration - these would come from environment variables
    const squareConfig = {
      applicationId:
        process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID ||
        'sandbox-sq0idb-XXXXXXXXXXXXXXXXXXXXXXXX',
      locationId:
        process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID || 'LXXXXXXXXXXXXXXXX',
    }

    // Prepare complete registration data for payment processing
    const completeRegistrationData = {
      selectedProgram,
      playerData,
      parentData,
      scheduleData,
      timestamp: new Date().toISOString(),
    }

    if (registrationComplete && paymentResult) {
      return (
        <div className="space-y-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-10 w-10 text-green-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Registration Complete!
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Welcome to New Wave Academy! Your registration has been confirmed.
            </p>
          </div>

          <div className="glass-effect mx-auto max-w-md rounded-2xl p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Confirmation Details
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Payment ID:</span>
                <span className="font-mono text-gray-900">
                  {paymentResult.paymentId}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="text-gray-900">${calculateTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Program:</span>
                <span className="text-gray-900">{selectedProgram?.name}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              You&apos;ll receive a confirmation email shortly with all the
              details. Our team will contact you within 24 hours to finalize
              your schedule.
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
                View Programs
              </button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Complete Your Registration
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Secure payment processed by Square. Your registration will be
            confirmed immediately.
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <div className="glass-effect rounded-2xl p-8">
            <div className="mb-6 text-center">
              <div className="bg-primary-100 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <CreditCardIcon className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Payment Information
              </h3>
              <p className="text-gray-600">Total: ${calculateTotal()}</p>
            </div>

            <SquarePayment
              amount={calculateTotal()}
              applicationId={squareConfig.applicationId}
              locationId={squareConfig.locationId}
              registrationData={completeRegistrationData}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
            />
          </div>
        </div>

        {/* Program Summary */}
        <div className="glass-effect mx-auto max-w-md rounded-2xl p-6">
          <h3 className="mb-4 text-lg font-bold text-gray-900">
            Registration Summary
          </h3>
          {selectedProgram && (
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Program:</span>
                <span className="text-gray-900">{selectedProgram.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Player:</span>
                <span className="text-gray-900">
                  {playerData.firstName} {playerData.lastName}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Start Date:</span>
                <span className="text-gray-900">{scheduleData.startDate}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Registration Fee:</span>
                  <span className="text-gray-900">
                    ${selectedProgram.registrationFee}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee:</span>
                  <span className="text-gray-900">$5.00</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-gray-200 pt-2 text-lg font-bold">
                  <span className="text-gray-900">Total:</span>
                  <span className="text-gray-900">${calculateTotal()}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderProgramSelection()
      case 1:
        return renderPlayerForm()
      case 2:
        return renderParentForm()
      case 3:
        return renderScheduleForm()
      case 4:
        return renderReview()
      case 5:
        return renderPayment()
      default:
        return renderProgramSelection()
    }
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="from-primary-600 to-primary-700 bg-gradient-to-r">
        <div className="container-padding mx-auto max-w-7xl py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Register for New Wave Academy
            </h1>
            <p className="text-primary-100 mx-auto mt-6 max-w-2xl text-xl">
              Join Houston&apos;s premier basketball academy and start your
              journey to excellence
            </p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-padding mx-auto max-w-7xl">
          <nav className="flex space-x-8 py-6" aria-label="Progress">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  index <= currentStep ? 'text-primary-600' : 'text-gray-400'
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
                <span className="ml-3 text-sm font-medium">{step.name}</span>
                {index < steps.length - 1 && (
                  <ChevronRightIcon className="ml-8 h-5 w-5 text-gray-300" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Form Content */}
      <div className="section-padding">
        <div className="container-padding mx-auto max-w-4xl">
          {renderCurrentStep()}

          {/* Navigation Buttons */}
          <div className="mt-12 flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium ${
                currentStep === 0
                  ? 'cursor-not-allowed text-gray-400'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Previous
            </button>

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
                <ChevronRightIcon className="ml-2 h-4 w-4" />
              </button>
            ) : (
              <div className="text-right">
                <p className="text-sm text-gray-500">
                  Complete payment to finish registration
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
