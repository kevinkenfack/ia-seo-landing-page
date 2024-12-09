import CallToAction from '@/sections/CallToAction'
import { Features } from '@/sections/Features'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import LogoTicker from '@/sections/LogoTicker'
import { Testimonials } from '@/sections/Testimonials'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <Features/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default page

