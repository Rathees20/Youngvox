import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/Hero page.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="w-full bg-white py-0 md:py-2">
      <div className="relative mx-auto w-full max-w-[1600px] px-4">

        {/* Card with controlled height via aspect ratio */}
        <div className="relative w-full rounded-2xl shadow-md overflow-hidden aspect-[9/5]">

          {/* Image fills entire card */}
          <img
            src={heroImage}
            alt="YoungVox Hero"
            className="w-full h-full object-contain"
          />

          {/* Join Button */}
          <button
            onClick={() => navigate('/joinyoung')}
            className="
              absolute
              top-3 right-0 sm:top-6 sm:right-5
              bg-[#A82228] text-white
              px-2 py-0.5 sm:px-4 sm:py-2
              text-[10px] sm:text-xs
              rounded-full
              font-semibold
              shadow-lg
              hover:bg-[#8a1c22]
              transition
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