import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'

function LandingPage() {
  return (
    <div className='  flex flex-col  bg-white p-4  overflow-x-hidden relative '>
      
      
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  )
}

export default LandingPage