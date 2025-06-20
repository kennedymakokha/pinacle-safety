import React from 'react'
import Hero from './components/Hero'
import Services from './components/service'

import About from './components/about'
import Contact from './components/contact'

function page() {
  return (
    <div className='overflow-x-hidden'>
       <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default page