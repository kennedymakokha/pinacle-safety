import React from 'react'
import Footer from './components/footer'
import Hero from './components/Hero'
import Services from './components/service'

import About from './components/about'
import Contact from './components/contact'

function page() {
  return (
    <div >
       <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default page