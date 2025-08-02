import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What types of courts does Houston Thunder Gym offer?',
      answer:
        'We provide both full and half-court options for basketball and volleyball enthusiasts.',
    },
    {
      question: 'How can I book a court at Houston Thunder Gym?',
      answer:
        'Booking a court is convenient and accessible through our online platform. Simply visit our website or use our mobile app to reserve your preferred time slot.',
    },
    {
      question: 'What sports are available for booking at Houston Thunder Gym?',
      answer:
        'We offer facilities for basketball and volleyball activities, catering to players of all skill levels and ages.',
    },
  ],
  [
    {
      question: 'How far in advance can I book a court?',
      answer:
        'You can book a court at Houston Thunder Gym up to a month in advance, allowing you to plan your activities with ease and flexibility.',
    },
    {
      question: 'Can I secure a recurring booking for a consistent timeslot?',
      answer:
        'Absolutely! Our booking system allows you to schedule recurring dates, ensuring you have a consistent timeslot reserved for your games or training sessions.',
    },
    {
      question: 'Is there a cancellation policy for court bookings?',
      answer:
        'Yes, we have a cancellation policy in place. Please refer to our terms and conditions for details regarding cancellations and any applicable fees.',
    },
  ],
  [
    {
      question:
        'What amenities are available for basketball activities at Houston Thunder Gym?',
      answer:
        'Our basketball amenities include an automated rebound/shooting machine, shot clocks, and game clocks, enhancing your training and gameplay experience.',
    },
    {
      question:
        'What amenities are available for volleyball activities at Houston Thunder Gym?',
      answer:
        'For volleyball enthusiasts, we provide nets and other essential equipment to ensure an optimal playing environment.',
    },
    {
      question: 'Does Houston Thunder Gym offer camps or training programs?',
      answer:
        'Yes, we host camps and training programs for basketball and volleyball throughout the year. Check our website or contact us for upcoming camp schedules and registration information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@newwaveprepacademy.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
