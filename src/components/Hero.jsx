import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/Hero page.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/joinyoung');
  };

  return (
    <section id="home" className="bg-white relative">
      <div className="w-full relative">
        <img
          src={heroImage}
          alt="Youngvox Hero"
          className="w-full h-auto"
        />

        {/* Overlay button */}
        <div className="absolute top-4 sm:top-6 lg:top-8 right-3 sm:right-8 lg:right-12">
          <button
            onClick={handleJoinClick}
            className="
              bg-[#A82228] text-white
              px-3 sm:px-6 lg:px-8
              py-1.5 sm:py-2 lg:py-2.5
              text-[10px] sm:text-sm lg:text-base
              rounded-full
              font-semibold
              hover:bg-[#8a1c22]
              transition-colors
              shadow-lg
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
