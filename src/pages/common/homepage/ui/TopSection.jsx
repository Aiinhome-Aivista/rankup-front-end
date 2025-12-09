import React from 'react'
import codingImage from '../../../../assets/coding-a-website.svg'

function TopSection() {
  return (
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
  )
}

export default TopSection