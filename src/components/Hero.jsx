import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/bb.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="home" className="w-full bg-white">
      <div className="relative w-full overflow-hidden">

        {/* Placeholder (prevents layout shift) */}
        {!imgLoaded && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"
            style={{ aspectRatio: '16 / 9' }}
          />
        )}

        {/* Hero Image */}
        <img
          src={heroImage}
          alt="YoungVox Hero"
          className={`
            w-full h-auto object-contain
            transition-opacity duration-500
            ${imgLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ aspectRatio: '16 / 9' }}
          width={1920}
          height={1080}
          onLoad={() => setImgLoaded(true)}
        />

        {/* Join Button */}
        <div className="absolute top-6 right-3 sm:top-6 sm:right-6 md:top-[15%] md:right-[6%] z-10">
          <button
            onClick={() => navigate('/joinyoung')}
            className="
              bg-[#A82228] text-white
              px-2 py-1 sm:px-5 sm:py-2.5
              text-[10px] sm:text-sm md:text-base
              rounded-full font-bold
              shadow-lg
              hover:bg-[#8a1c22]
              hover:scale-105
              transition-all duration-200
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
