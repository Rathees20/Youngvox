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
        {/* Overlay button for "Join YoungVox" - positioned at top right corner */}
        <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-8 lg:right-12">
          <button
            onClick={handleJoinClick}
            className="bg-[#A82228] text-white px-2 sm:px-8 py-1 sm:py-3 text-sm sm:text-base rounded-full font-semibold hover:bg-[#8a1c22] transition-colors shadow-lg"
          >
            Join YoungVox
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

