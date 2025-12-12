import React from 'react';
import strategyImage from '../../../../assets/strategy.svg';
import AIAssistanceSection from './AIAssistanceSection';
import TrustedSection from './TrustedSection';

function MiddleSection() {
  return (
    <>
      <div className='relative flex flex-col md:flex-row justify-between items-center overflow-hidden py-18 md:py-40 bg-white'>
        {/* Left Content */}
        <div className='flex flex-col z-10 pl-10 md:pl-35 max-w-2xl'>
          <div className="mb-6 items-start flex justify-center md:justify-start">
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
        <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 md:translate-x-0 w-[420px] h-[420px] md:w-[690px] md:h-[690px] flex items-center justify-center -mr-80'>
          {/* Concentric Circles */}
          {/* Largest Circle */}
          <div className='absolute w-full h-full rounded-full bg-linear-to-br from-[#A1AEF2] to-[#514CF1] opacity-40 drop-shadow-2xl'></div>

          {/* Middle Circle */}
          <div className='absolute w-[75%] h-[75%] rounded-full bg-linear-to-br from-[#A1AEF2] to-[#514CF1] opacity-40 drop-shadow-2xl'></div>
          {/* Inner Circle */}
          <div className='absolute w-[50%] h-[50%] rounded-full bg-linear-to-br from-[#A1AEF2] to-[#514CF1] opacity-60 flex items-center justify-center drop-shadow-2xl '>
            {/* Center Gradient Core */}
            <div className='w-[60%] h-[60%] rounded-full bg-linear-to-br from-[#A1AEF2] to-[#514CF1] opacity-80 shadow-2xl'></div>
          </div>
          {/* Floating Icons */}
          <div className='absolute top-[25%] right-[60%] bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 transform hover:scale-110 transition-transform duration-300'>
            <svg viewBox="0 0 48 48" className="drop-shadow-sm w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
          </div>
          <div className='absolute bottom-[20%] left-[20%] bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 transform hover:scale-110 transition-transform duration-300'>
            <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 grid grid-cols-2 grid-rows-2 gap-1">
              <div className="bg-[#F35325]"></div>
              <div className="bg-[#81BC06]"></div>
              <div className="bg-[#05A6F0]"></div>
              <div className="bg-[#FFBA08]"></div>
            </div>
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
