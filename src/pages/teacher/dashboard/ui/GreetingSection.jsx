import React, { useState, useEffect } from "react";
import yogaBg from '../../../../assets/yoga-bg.svg';
import yoga from '../../../../assets/yoga.svg'

function GreetingSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every minute is probably enough but second is fine
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <div className="flex justify-between items-end mb-8">
      {/* Left: Greeting */}
      <div className="flex items-center gap-6">
        {/* Placeholder for the Illustration - abstract cloud/person */}
        {/* Illustration with Yoga assets */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Background Cloud/Shape */}
          <img
            src={yogaBg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-contain scale-110"
          />

          {/* Foreground Character */}
          <img
            src={yoga}
            alt="Yoga Character"
            className="absolute inset-0 w-full h-full object-contain z-10 scale-75 translate-y-2"
          />
        </div>

        <div>
          <h2 className="text-[#A2AEF2] font-medium text-lg">Hi, Dr. Anna</h2>
          <h1 className="text-5xl font-bold text-[#A2AEF2] tracking-tight">
            Good Morning
          </h1>
        </div>
      </div>

      {/* Right: Date & Time & Stats */}
      <div className="flex items-end gap-12">
        <div className="text-right">
          <p className="text-[#A2AEF2] text-lg font-medium mb-0">
            {formatDate(currentTime)}
          </p>
          <p className="text-[#A2AEF2] text-5xl font-bold leading-none">
            {formatTime(currentTime)}
          </p>
        </div>

        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-[#514BF2] text-4xl font-bold">03</p>
            <p className="text-[#514BF2] text-sm font-medium">Classes</p>
          </div>
          <div className="text-center">
            <p className="text-[#514BF2] text-4xl font-bold">12</p>
            <p className="text-[#514BF2] text-sm font-medium">Review</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreetingSection;
