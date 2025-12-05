import React from 'react';
import heroImage from '../assets/Hero page.png';

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div className="w-full">
        <img 
          src={heroImage} 
          alt="Youngvox Hero" 
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;

