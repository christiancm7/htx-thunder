'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'
interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'Best Courts in Town!',
    body: 'Rented a basketball court for a weekend game with friends, and the experience was top-notch. Well-maintained and great vibes!',
    author: 'Alex Johnson',
    rating: 5,
  },
  {
    title: 'Volleyball Night Success!',
    body: 'Our community volleyball night was a hit thanks to these fantastic courts. The nets and lighting were perfect for our evening game.',
    author: 'Maria Gonzalez',
    rating: 5,
  },
  {
    title: 'Unbeatable Experience',
    body: 'The quality of the courts and the friendly staff made our tournament feel like a professional event. Highly recommend!',
    author: 'Ethan Brown',
    rating: 5,
  },
  {
    title: 'Family Fun Day Sorted',
    body: 'Booked a court for a family day out, and it couldnt have been better. The kids loved it, and the facilities were great.',
    author: 'Jessica Taylor',
    rating: 5,
  },
  {
    title: 'Perfect for Team Practices',
    body: 'Our basketball team practices here regularly. The courts are always in great shape, and the booking process is a breeze.',
    author: 'Chris Davis',
    rating: 5,
  },
  {
    title: 'Great for Events',
    body: 'Organized a charity volleyball tournament here, and the feedback was amazing. The courts and equipment are top-quality.',
    author: 'Olivia Martinez',
    rating: 5,
  },
  {
    title: 'Can’t Wait to Return!',
    body: 'After playing on these courts, my friends and I can’t wait to come back. Everything from booking to playing was seamless.',
    author: 'Michael Thompson',
    rating: 5,
  },
  {
    title: 'Professional-Level Courts',
    body: 'The quality of the basketball courts here makes you feel like a pro. Well-marked, clean, and with great hoops.',
    author: 'Sophia Wilson',
    rating: 5,
  },
  {
    title: 'Stress-Free Booking',
    body: 'The app made it so easy to book a volleyball court. Quick, easy, and the court was exactly as advertised.',
    author: 'James Anderson',
    rating: 5,
  },
  {
    title: 'Kids Had a Blast',
    body: 'Rented a court for my son’s birthday, and it was a hit. Safe, fun, and the staff were incredibly helpful.',
    author: 'Linda Rodriguez',
    rating: 5,
  },
  {
    title: 'Perfect for Corporate Events',
    body: 'Hosted our company’s team-building event here, and it was perfect. The courts are excellent, and the atmosphere is great.',
    author: 'Robert Martinez',
    rating: 5,
  },
  {
    title: 'Like Playing in the Big Leagues',
    body: 'The attention to detail on these courts makes every game feel like you’re in the big leagues. Absolutely love it!',
    author: 'Emily Johnson',
    rating: 5,
  },
  {
    title: 'Highlight of Our Vacation',
    body: 'Rented a basketball court while on vacation, and it was the highlight of our trip. Great facilities and friendly staff.',
    author: 'David Wilson',
    rating: 5,
  },
  {
    title: 'All You Could Ask For',
    body: 'These courts have everything you could ask for - great surface, nets, and even night lights for evening games.',
    author: 'Sarah Moore',
    rating: 5,
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          See what our customers think about us
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Our latest customer reviews
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
