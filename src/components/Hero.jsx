import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/Hero page.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="w-full bg-white">
      <div className="relative w-full flex justify-center">
        
        {/* Control width instead of height */}
        <img
          src={heroImage}
          alt="YoungVox Hero"
          className="
            w-full
            max-w-[1800px]
            h-auto
            object-contain
          "
        />

        {/* Join Button */}
        <button
          onClick={() => navigate('/joinyoung')}
          className="
            absolute
            top-6 right-8
            bg-[#A82228] text-white
            px-6 py-2
            text-sm
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
    </section>
  );
};

export default Hero;
