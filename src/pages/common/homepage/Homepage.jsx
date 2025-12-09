import React from 'react'
import '../../../style/homepage.css'
import TopSection from './ui/TopSection.jsx'

function Homepage() {
  return (
    <div className='flex flex-col w-full h-full'>
      <section className='bg-[#514CF133] flex flex-col'>
        <TopSection/>
      </section>
      <section>
        <MiddleSection/>
      </section>
      <footer></footer>
    </div>
  )
}

export default Homepage