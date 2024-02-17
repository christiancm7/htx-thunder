import Image from 'next/image'
import thunderLogo from '../images/logos/logo.png'

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image src={thunderLogo} alt={'logo'} height={200} />
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image src={thunderLogo} alt={'logo'} height={200} />
}
