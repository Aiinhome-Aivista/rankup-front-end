import React from 'react'
import '../../../style/homepage.css'
import codingImage from '../../../assets/coding-a-website.svg'

function Homepage() {
  return (
    <div className='flex flex-col w-full h-full'>
      <section className='bg-[#514CF133] flex flex-col'>
        <div className='flex justify-between items-center'>
          <img src={codingImage} alt="coding" />
          <div className="flex flex-col">
            <h1>Nest Generation Assessment Platform For Every School</h1>
            <p>Empower educator, engage students, and improve learning outcomes</p>
          </div>
          <div className="flex flexx-col">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </section>
      <section></section>
      <footer></footer>
    </div>
  )
}

export default Homepage