import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/Banner Hero image.jpeg';

const Hero = () => {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="home" className="w-full bg-white flex justify-center py-0">
      <div className="relative w-full px-0">

        {/* Placeholder - blurred, shows until image loads */}
        {!imgLoaded && (
          <div
            style={{
              width: '100%',
              height: 804,
              background: 'linear-gradient(90deg,#eee,#ccc)',
              filter: 'blur(10px)',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />
        )}
        <img
          src={heroImage}
          alt="YoungVox Hero"
          className={`
            w-full h-auto md:h-[800px] object-scale-down md:object-cover object-top shadow-sm
            transition-opacity duration-500
          `}
          style={{ aspectRatio: '16:9' }}
          width={1400} // banner image width
          height={600} // banner image height
          onLoad={() => setImgLoaded(true)}
        />

        {/* Join Button - positioned absolutely to match the design */}
        <div className="absolute top-4 right-1 md:top-[15%] md:right-[6%] z-10">
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