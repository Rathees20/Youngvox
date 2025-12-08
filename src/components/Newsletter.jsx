import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import frameImage from '../assets/Frame.png';
import backgroundCircle from '../assets/backgound circle.png';
import studentImage from '../assets/student.png';

export default function NewsletterSection() {
  const [ref, isVisible] = useScrollAnimation({ once: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full bg-[#A82228] relative overflow-hidden min-h-screen flex flex-col">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto text-center pt-16 pb-12 px-4 flex-1">
        <div className={`${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Subscribe to Our Free Monthly Newsletter
        </h1>

        <p className="text-white text-lg md:text-xl mb-10">
          Stay Updated on YoungVox Activities, Events, and Student Initiatives
        </p>
        </div>

        {/* Input Fields and Button Container */}
        <div className={`flex flex-col items-center gap-4 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-[280px] px-5 py-3.5 rounded-lg bg-[#8a1c22]/60 backdrop-blur-sm text-white placeholder-white/80 outline-none border-none text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-[280px] px-5 py-3.5 rounded-lg bg-[#8a1c22]/60 backdrop-blur-sm text-white placeholder-white/80 outline-none border-none text-base"
            />
          </div>

          <button className="bg-white text-[#A82228] px-6 sm:px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-all hover-lift w-full md:w-[576px] flex items-center justify-center gap-2">
            <span>Subscribe Now</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Section with Images */}
      <div className="relative w-full mt-auto" style={{ height: '400px' }}>
        {/* RED SECTION AT BOTTOM - Background */}
        <div className={`absolute bottom-0 left-0 w-full h-[180px] bg-[#A82228] z-0 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}></div>

        {/* BACKGROUND CIRCLE - Comes in and fits in existing place */}
        <img
          src={backgroundCircle}
          className="absolute bottom-[-50px] left-1/2 w-[350px] z-10 pointer-events-none"
          alt="background circle"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0)',
            transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s'
          }}
        />
        
        {/* STUDENT IMAGE - Fits in existing place */}
        <img
          src={studentImage}
          className="absolute bottom-[0px] left-1/2 w-[600px] z-30 pointer-events-none"
          alt="students"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(50px)',
            transition: 'opacity 1s ease-out 0.6s, transform 1s ease-out 0.6s'
          }}
        />

        {/* FRAME IMAGE - Torn Edge */}
        <img
          src={frameImage}
          className={`absolute bottom-[-39px] left-0 w-full z-20 pointer-events-none ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          alt="torn-edge frame"
          style={{ 
            animationDelay: isVisible ? '0.8s' : '0s'
          }}
        />
      </div>
    </section>
  );
}
