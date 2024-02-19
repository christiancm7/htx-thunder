import { useId } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import basketballIcon from '../images/basketball.png'
import volleyballIcon from '../images/volleyball-ball.png'
import trophyIcon from '../images/trophy.png'
import campIcon from '../images/camping.png'
import trainingIcon from '../images/training.png'
import workoutIcon from '../images/workout.png'
const features = [
  {
    name: 'Basketball Courts',
    description:
      'Experience the game at its finest on our state-of-the-art basketball courts.',
    icon: BasketballIcon,
  },
  {
    name: 'Camps',
    description:
      'Join our inclusive basketball camps, catering to all ages and skill levels, for a fun and transformative learning experience.',
    icon: CampIcon,
  },
  {
    name: 'Training Equipment',
    description:
      'Elevate your game with our top-notch training equipment, including cones, balls, and rebound machines.',
    icon: EquipmentIcon,
  },
  {
    name: 'Volleyball Courts',
    description:
      'Dive into the action on our premium volleyball courts, featuring high-quality nets.',
    icon: VolleyballIcon,
  },
  {
    name: 'Strength Training',
    description:
      'Achieve your fitness goals with our comprehensive strength training facilities.',
    icon: TrainingIcon,
  },
  {
    name: 'Tournaments',
    description:
      'Compete and connect in our thrilling tournaments, in basketball and volleyball.',
    icon: TrophyIcon,
  },
]

function BasketballIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image src={basketballIcon} alt="basketball icon" height={30} />
}

function CampIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image src={campIcon} alt="camp icon" height={34} />
}

function EquipmentIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image src={trainingIcon} alt="equipment icon" height={34} />
}

function VolleyballIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image src={volleyballIcon} alt="volleyball icon" height={32} />
}

function TrainingIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image src={workoutIcon} alt="training icon" height={34} />
}

function TrophyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image src={trophyIcon} alt="trophy icon" height={34} />
}

export function SecondaryFeatures() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Services
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Everything Houston Thunder Gym has to offer
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
