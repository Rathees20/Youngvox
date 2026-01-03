import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/Hero page.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="w-full bg-white flex justify-center py-0">
      <div className="relative w-full max-w-8xl px-0">

        {/* Full width hero image (within container) */}
        <img
          src={heroImage}
          alt="YoungVox Hero"
          className="w-full h-auto md:h-[700px] object-cover object-top rounded-xl shadow-sm"
        />

        {/* Join Button - positioned absolutely to match the design */}
        <div className="absolute top-4 right-1 md:top-[15%] md:right-[6%]">
          <button
            onClick={() => navigate('/joinyoung')}
            className="
              bg-[#A82228] text-white
              px-2 py-1 md:px-6 md:py-3
              text-[8px] sm:text-sm md:text-base
              rounded-full
              font-bold
              shadow-lg
              hover:bg-[#8a1c22]
              hover:scale-105
              transition-transform duration-200
            "
          >
            Join YoungVox
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;