import React from 'react'
import strategyImage from '../../../../assets/strategy.svg';
import roundedimage from '../../../../assets/rounded-image.svg';

function MiddleSection() {
  return (
    <div className='flex flex-row justify-between items-center pl-25'>
      <div className='flex flex-col'>
        <img src={strategyImage} alt="strategy image" className='h-25 w-25'/>
        <h1 className='text-[#1C1B1F] font-extrabold text-3xl'>Integrated with the<br />
          platforms you use</h1>
        <p>Connect your favorite tools effortlessly. Our platform <br /> plays well with others, creating a unified ecosystem for <br /> your school.
        </p>
      </div>
      <div className='justify-end'>
        <img src={roundedimage} alt="" className='h-75 w-75'/>
      </div>
    </div>
  )
}

export default MiddleSection