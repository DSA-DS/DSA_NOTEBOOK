import { Inter } from '@next/font/google'
import Head from 'next/head'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col text-xl font-semibold space-y-6 mt-6'>
       <button> <Link href="/Authenticatoin"> Authenticatoin </Link></button>
       <button> <Link href="/Users"> AllUsers </Link> </button>
      </main>
      
    </ div>
  )
}
