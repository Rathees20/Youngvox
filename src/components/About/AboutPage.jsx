import React from 'react';
import Header from '../Header';
import visionImage from '../../assets/Our vision.png';
import tornBorder from '../../assets/our vision frame red.png';
import ourVisionShadow from '../../assets/our vision shadow.png';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Our Vision Section */}
      <section className="py-6 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 text-center">
          <h1 className="text-xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight sm:leading-normal">
            Our Vision
          </h1>

          {/* Red underline */}
          <div className="flex justify-center mb-3 sm:mb-8">
            <div className="w-8 sm:w-16 h-0.5 sm:h-1 bg-[#A82228]"></div>
          </div>

          <p className="text-[11px] sm:text-base lg:text-lg text-gray-700 leading-snug sm:leading-relaxed max-w-3xl mx-auto px-0.5 sm:px-0">
            To build a generation of empowered youth leaders who are informed,
            compassionate, and equipped to create a sustainable, equitable,
            and inclusive world
          </p>
        </div>

        {/* 🔥 Full-width Vision Image with overlays */}
        <div className="relative w-full mt-6 sm:mt-12">

          {/* Top shadow */}
          <img
            src={ourVisionShadow}
            alt="vision shadow"
            className="absolute top-0 left-0 w-full block z-10 pointer-events-none select-none"
          />

          {/* Main image full width */}
          <img
            src={visionImage}
            alt="Our Vision"
            className="w-full h-auto block object-cover"
          />

          {/* Bottom torn border */}
          <img
            src={tornBorder}
            alt="torn border"
            className="absolute bottom-[-10px] sm:bottom-[-30px] left-0 w-full block z-30 pointer-events-none select-none"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-6 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 text-center">
          <h1 className="text-xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight sm:leading-normal">
            Our Mission
          </h1>

          {/* Red underline */}
          <div className="flex justify-center mb-3 sm:mb-8">
            <div className="w-8 sm:w-16 h-0.5 sm:h-1 bg-[#A82228]"></div>
          </div>

          <p className="text-[11px] sm:text-base lg:text-lg text-gray-700 leading-snug sm:leading-relaxed max-w-3xl mx-auto px-0.5 sm:px-0 mb-8 sm:mb-12">
            To partner with schools, institutions, and organizations in nurturing student voice and leadership through education, empowerment, and equity.
          </p>

          {/* Three Blocks: Education, Empowerment, Equity */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mt-8 sm:mt-12">
            {/* Education Block */}
            <div className="bg-gray-100 rounded-lg p-8 sm:p-12 flex flex-col justify-end items-center min-h-[200px] sm:min-h-[250px] relative">
              <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Education</h3>
                <div className="w-3/4 h-1.5 bg-[#A82228]"></div>
              </div>
            </div>

            {/* Empowerment Block */}
            <div className="bg-gray-100 rounded-lg p-8 sm:p-12 flex flex-col justify-end items-center min-h-[200px] sm:min-h-[250px] relative">
              <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Empowerment</h3>
                <div className="w-3/4 h-1.5 bg-[#A82228]"></div>
              </div>
            </div>

            {/* Equity Block */}
            <div className="bg-gray-100 rounded-lg p-8 sm:p-12 flex flex-col justify-end items-center min-h-[200px] sm:min-h-[250px] relative">
              <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Equity</h3>
                <div className="w-3/4 h-1.5 bg-[#A82228]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering India's Youth Section */}
      <section className="py-6 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1 lg:max-w-md xl:max-w-lg">
              <h2 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Empowering India's Youth to Lead, Thrive, and Transform
              </h2>
              
              <div className="space-y-4 sm:space-y-5 text-gray-700 text-sm sm:text-base lg:text-[15px] xl:text-base leading-[1.7] sm:leading-relaxed">
                <p>
                  YoungVox was born out of a vision to create empowered, emotionally strong, and socially responsible young leaders across India.
                </p>
                
                <p>
                  India has one of the world's largest youth populations—253 million adolescents, with one in every five individuals aged between 10 and 19 (UNICEF, 2023). Yet, access to holistic education, leadership development, and emotional wellbeing support remains limited. While SDG 4 (Quality Education) and NEP 2020 strongly emphasize life-skill-oriented learning, most school systems continue to remain heavily academic-centric. This gap highlights the urgent need for a structured, school-based ecosystem that nurtures both competence and character.
                </p>
                
                <p>
                  YoungVox was created to bridge this gap. Through its unique 8-Wing Chapter Model, YoungVox provides students with opportunities to discover their voice, develop leadership abilities, strengthen emotional resilience, and contribute meaningfully to their communities.
                </p>
                
                <p>
                  YoungVox is redefining what youth development looks like in Indian schools — creating a generation that is not only academically capable, but also emotionally aware, socially responsible, and future-ready
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1529390079861-9deac17f4561?w=800&h=1000&fit=crop"
                  alt="Four young girls jumping joyfully in school uniforms"
                  className="w-full h-64 sm:h-80 lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
