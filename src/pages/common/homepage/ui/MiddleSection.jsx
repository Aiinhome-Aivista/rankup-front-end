import React from 'react';
import strategyImage from '../../../../assets/strategy.svg';
import { Google, Window } from '@mui/icons-material';
import AIAssistanceSection from './AIAssistanceSection';
import TrustedSection from './TrustedSection';

function MiddleSection() {
  return (
    <>
      <div className='relative flex flex-col md:flex-row justify-between items-center py-20 overflow-hidden bg-white'>
        {/* Left Content */}
        <div className='flex flex-col z-10 pl-8 md:pl-25 max-w-xl'>
          <div className="mb-6">
            <img src={strategyImage} alt="strategy illustration" className='h-32 w-auto' />
          </div>

          <h1 className='text-[#1C1B1F] font-extrabold text-4xl md:text-5xl leading-tight mb-6'>
            Integrated with the<br />
            platforms you use
          </h1>

          <p className='text-gray-600 text-lg leading-relaxed'>
            Connect your favorite tools effortlessly. Our platform <br className='hidden md:block' />
            plays well with others, creating a unified ecosystem for <br className='hidden md:block' />
            your school.
          </p>
        </div>

        {/* Right Background Effect */}
        <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 md:translate-x-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] flex items-center justify-center -mr-60'>
          {/* Concentric Circles */}
          {/* Largest Circle */}
          <div className='absolute w-full h-full rounded-full bg-[#8B9AF9] opacity-30'></div>

          {/* Middle Circle */}
          <div className='absolute w-[75%] h-[75%] rounded-full bg-[#7587F7] opacity-40'></div>
          {/* Inner Circle */}
          <div className='absolute w-[50%] h-[50%] rounded-full bg-[#6276F5] opacity-50 flex items-center justify-center'>
            {/* Center Gradient Core */}
            <div className='w-[60%] h-[60%] rounded-full bg-linear-to-br from-[#4C64F4] to-[#3651F3] opacity-80 shadow-2xl shadow-blue-500/50'></div>
          </div>
          {/* Floating Icons */}
          <div className='absolute top-[25%] right-[60%] bg-white/30 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 transform hover:scale-110 transition-transform duration-300'>
            <Google sx={{ fontSize: 30, color: '#fbbc05' }} className='drop-shadow-sm' />
          </div>
          <div className='absolute bottom-[20%] left-[20%] bg-white/30 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 transform hover:scale-110 transition-transform duration-300'>

            <Window sx={{ fontSize: 30, color: '#00a4ef' }} className='drop-shadow-sm' />
          </div>
        </div>
      </div>

      {/* AI Assistance Section */}
      <AIAssistanceSection />

      {/* Trusted By Educators Section */}
      <TrustedSection />
    </>
  )
}

export default MiddleSection;
