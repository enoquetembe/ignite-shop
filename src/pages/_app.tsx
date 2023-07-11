import '@/styles/globals.css'
import Logo from '@/assets/logo.svg'

import Image from 'next/image'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='min-h-screen flex flex-col justify-center items-start'>
      <header className='max-w-[1180px] w-full mx-auto my-0 px-0 py-8'>
          <Link href='/'><Image src={Logo} alt=''/></Link>
        </header>
      <Component {...pageProps} />
    </div>
  )
}
