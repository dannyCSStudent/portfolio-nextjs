
import React from 'react';
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { Navbar, Hero, About, Experience, Tech, Works, Contacts, StarsCanvas} from '../components';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Dan | Website Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg"></link>
      </Head> 
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div  className="relative z-0">
          <Contacts/>
          <StarsCanvas />
        </div>
      </div>
    </>
  )
}
