'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/20/solid'

declare global {
  interface Window {
    Square?: any
  }
}

interface SquarePaymentProps {
  amount: number
  applicationId: string
  locationId: string
  registrationData?: any
  onPaymentSuccess: (result: any) => void
  onPaymentError: (error: any) => void
}

export default function SquarePayment({
  amount,
  applicationId,
  locationId,
  registrationData,
  onPaymentSuccess,
  onPaymentError,
}: SquarePaymentProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [paymentForm, setPaymentForm] = useState<any>(null)
  const [card, setCard] = useState<any>(null)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const cardContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initializeSquare = async () => {
      try {
        // Load Square SDK
        if (!window.Square) {
          const script = document.createElement('script')
          script.src = 'https://sandbox.web.squarecdn.com/v1/square.js'
          script.onload = () => initializePaymentForm()
          document.head.appendChild(script)
        } else {
          initializePaymentForm()
        }
      } catch (err) {
        console.error('Failed to initialize Square:', err)
        setError('Failed to load payment system')
        setIsLoading(false)
      }
    }

    const initializePaymentForm = async () => {
      try {
        if (!window.Square) {
          throw new Error('Square SDK not loaded')
        }

        const payments = window.Square.payments(applicationId, locationId)
        const paymentRequest = payments.paymentRequest({
          countryCode: 'US',
          currencyCode: 'USD',
          total: {
            amount: amount.toString(),
            label: 'New Wave Academy Registration',
          },
        })

        const form = await payments.paymentForm({
          applicationId,
          locationId,
          paymentRequest,
          callbacks: {
            methodsSupported: (methods: any) => {
              console.log('Payment methods supported:', methods)
            },
            createPaymentRequest: () => paymentRequest,
          },
        })

        // Create card payment form
        const cardElement = await payments.card({
          style: {
            input: {
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              color: '#333',
            },
            '.input-container': {
              borderRadius: '8px',
              borderColor: '#d1d5db',
            },
            '.input-container.is-focus': {
              borderColor: '#3b82f6',
            },
            '.input-container.is-error': {
              borderColor: '#ef4444',
            },
          },
        })

        if (cardContainerRef.current) {
          await cardElement.attach('#card-container')
          setCard(cardElement)
          setPaymentForm(form)
          setIsLoading(false)
        }
      } catch (err) {
        console.error('Error initializing payment form:', err)
        setError('Failed to initialize payment form')
        setIsLoading(false)
      }
    }

    initializeSquare()

    return () => {
      if (card) {
        card.destroy()
      }
    }
  }, [applicationId, locationId, amount])

  const handlePayment = async () => {
    if (!card || processing) return

    setProcessing(true)
    setError(null)

    try {
      const result = await card.tokenize()

      if (result.status === 'OK') {
        // Send token to your backend for processing
        const paymentResult = await processPayment(result.token, amount)
        onPaymentSuccess(paymentResult)
      } else {
        throw new Error(result.errors?.[0]?.message || 'Payment failed')
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Payment processing failed'
      setError(errorMessage)
      onPaymentError(err)
    } finally {
      setProcessing(false)
    }
  }

  const processPayment = async (token: string, amount: number) => {
    // Send payment and registration data to backend
    const response = await fetch('/api/process-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sourceId: token,
        amountMoney: {
          amount: amount * 100, // Convert to cents
          currency: 'USD',
        },
        idempotencyKey: `registration-${Date.now()}-${Math.random()}`,
        registrationData, // Include all registration data
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Payment processing failed')
    }

    return response.json()
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="border-primary-600 h-8 w-8 animate-spin rounded-full border-b-2"></div>
        <span className="ml-3 text-gray-600">Loading payment form...</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="flex">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Payment Error
              </h3>
              <p className="mt-1 text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900">
          Card Information
        </label>
        <div
          id="card-container"
          ref={cardContainerRef}
          className="min-h-[60px] rounded-lg border border-gray-300 p-4"
        />
      </div>

      <button
        onClick={handlePayment}
        disabled={processing || isLoading}
        className={`flex w-full items-center justify-center rounded-lg border border-transparent px-6 py-4 text-base font-medium text-white ${
          processing || isLoading
            ? 'cursor-not-allowed bg-gray-400'
            : 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
        }`}
      >
        {processing ? (
          <>
            <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            Processing Payment...
          </>
        ) : (
          <>
            <ShieldCheckIcon className="mr-2 h-5 w-5" />
            Complete Registration - ${amount}
          </>
        )}
      </button>

      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
          <ShieldCheckIcon className="h-4 w-4" />
          <span>Secured by Square</span>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Your payment information is encrypted and secure
        </p>
      </div>
    </div>
  )
}
