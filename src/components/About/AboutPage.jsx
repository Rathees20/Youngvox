import React, { useState } from 'react';
import Header from '../Header';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import visionImage from '../../assets/Our vision.png';
import tornBorder from '../../assets/our vision frame red.png';
import ourVisionShadow from '../../assets/our vision shadow.png';
import frame15Image from '../../assets/Frame 15.png';
import saranyaImage from '../../assets/Saranya jaikumar.png';
import NewsletterSection from '../Newsletter';
import Footer from '../Footer';

const AboutPage = () => {
  const [teamSlide, setTeamSlide] = useState(0);
  const [advisorsSlide, setAdvisorsSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Saranya Jaikumar",
      title: "Founder & President",
      image: saranyaImage
    },
    {
      id: 2,
      name: "Dr. Saranya Jaikumar",
      title: "Founder & President",
      image: saranyaImage
    },
    {
      id: 3,
      name: "Dr. Saranya Jaikumar",
      title: "Founder & President",
      image: saranyaImage
    }
  ];

  const advisors = [
    {
      id: 1,
      name: "Dr. Saranya Jaikumar",
      title: "Founder & President",
      image: saranyaImage
    },
    {
      id: 2,
      name: "Dr. Saranya Jaikumar",
      title: "Founder & President",
      image: saranyaImage
    },
    {
      id: 3,
      name: "Dr. Saranya Jaikumar",
      title: "Founder & President",
      image: saranyaImage
    }
  ];

  const nextTeamSlide = () => {
    setTeamSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeamSlide = () => {
    setTeamSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const nextAdvisorsSlide = () => {
    setAdvisorsSlide((prev) => (prev + 1) % advisors.length);
  };

  const prevAdvisorsSlide = () => {
    setAdvisorsSlide((prev) => (prev - 1 + advisors.length) % advisors.length);
  };

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
        <div className={`relative w-full mt-6 sm:mt-12 ${visionVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>

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
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1 lg:max-w-[420px] xl:max-w-[500px]">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-5 sm:mb-6 lg:mb-8 leading-[1.2] sm:leading-tight">
                Empowering India's Youth to Lead, Thrive, and Transform
              </h2>
              
              <div className="space-y-4 sm:space-y-5 lg:space-y-5 text-gray-700 text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-[1.6] sm:leading-[1.65]">
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
            <div className="order-1 lg:order-2 lg:pl-4 w-full">
              <div className="relative rounded-lg sm:rounded-lg overflow-hidden shadow-xl">
                <img
                  src={frame15Image}
                  alt="Four young girls jumping joyfully in school uniforms"
                  className="w-full h-auto min-h-[300px] sm:min-h-[400px] sm:h-80 lg:h-[600px] xl:h-[650px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={teamRef} className="py-6 sm:py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className={`lg:max-w-md ${teamVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">
                Our Team
              </h2>
              
              {/* Red underline - left aligned */}
              <div className="flex justify-start mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-[#A82228]"></div>
              </div>

              <p className="text-sm sm:text-base text-black leading-relaxed">
                Our leadership group brings together experienced professionals across programs, training, and operations, united in their commitment to shaping a generation of strong, confident, and capable young leaders
              </p>
            </div>

            {/* Right Column - Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out gap-4"
                  style={{ transform: `translateX(-${teamSlide * (100 / 2.5)}%)` }}
                >
                  {teamMembers.map((member) => (
                    <div key={member.id} className="min-w-[280px] sm:min-w-[320px] flex-shrink-0">
                      <div className="bg-white rounded-lg border border-white shadow-sm overflow-hidden">
                        {/* Headshot */}
                        <div className="relative h-64 sm:h-72 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Red Background Section */}
                        <div className="bg-[#A82228] p-4 sm:p-5">
                          <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                            {member.name}
                          </h3>
                          <p className="text-white text-sm sm:text-base mb-3">
                            {member.title}
                          </p>
                          <button className="bg-white text-[#A82228] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                            Read Bio
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Vertical on Left Side */}
              <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-20">
                <button
                  onClick={prevTeamSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:shadow-xl transition-all shadow-lg border border-gray-200"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextTeamSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:shadow-xl transition-all shadow-lg border border-gray-300"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advisors Section */}
      <section ref={advisorsRef} className="py-6 sm:py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className={`lg:max-w-md ${advisorsVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">
                Our Advisors
              </h2>
              
              {/* Red underline - left aligned */}
              <div className="flex justify-start mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-[#A82228]"></div>
              </div>

              <p className="text-sm sm:text-base text-black leading-relaxed">
                Our leadership group brings together experienced professionals across programs, training, and operations, united in their commitment to shaping a generation of strong, confident, and capable young leaders
              </p>
            </div>

            {/* Right Column - Carousel */}
            <div className={`relative ${advisorsVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out gap-4"
                  style={{ transform: `translateX(-${advisorsSlide * (100 / 2.5)}%)` }}
                >
                  {advisors.map((advisor) => (
                    <div key={advisor.id} className="min-w-[280px] sm:min-w-[320px] flex-shrink-0">
                      <div className="bg-white rounded-lg border border-white shadow-sm overflow-hidden">
                        {/* Headshot */}
                        <div className="relative h-64 sm:h-72 overflow-hidden">
                          <img
                            src={advisor.image}
                            alt={advisor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Red Background Section */}
                        <div className="bg-[#A82228] p-4 sm:p-5">
                          <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                            {advisor.name}
                          </h3>
                          <p className="text-white text-sm sm:text-base mb-3">
                            {advisor.title}
                          </p>
                          <button className="bg-white text-[#A82228] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                            Read Bio
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Vertical on Left Side */}
              <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-20">
                <button
                  onClick={prevAdvisorsSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:shadow-xl transition-all shadow-lg border border-gray-200"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextAdvisorsSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:shadow-xl transition-all shadow-lg border border-gray-300"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our CSR Partners Section */}
      <section className="py-6 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-8 sm:mb-12">
            Our CSR Partners
          </h2>
          
          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Placeholder for partner logos - replace with actual logo images */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-100 min-w-[120px] sm:min-w-[150px] flex items-center justify-center">
              <div className="text-gray-400 text-xs sm:text-sm text-center">Partner Logo 1</div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-100 min-w-[120px] sm:min-w-[150px] flex items-center justify-center">
              <div className="text-blue-600 font-bold text-sm sm:text-base">VELAMMAL NEXUS</div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-100 min-w-[120px] sm:min-w-[150px] flex flex-col items-center justify-center">
              <div className="text-[#A82228] font-bold text-sm sm:text-base uppercase">ABACUS</div>
              <div className="flex gap-1 my-1">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
              </div>
              <div className="text-black text-xs">Montessori School</div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-100 min-w-[120px] sm:min-w-[150px] flex items-center justify-center">
              <div className="text-blue-600 font-bold text-sm sm:text-base">TIPS iSP</div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-100 min-w-[120px] sm:min-w-[150px] flex items-center justify-center">
              <div className="text-gray-400 text-xs sm:text-sm text-center">Partner Logo 5</div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-100 min-w-[120px] sm:min-w-[150px] flex items-center justify-center">
              <div className="text-gray-400 text-xs sm:text-sm text-center">Partner Logo 6</div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's talk about school chapters Section */}
      <section className="py-6 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-8 sm:mb-12">
            Let's talk about school chapters
          </h2>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Card 1: Let's speak for work */}
            <div className="bg-white border border-black rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Let's speak for work</h3>
              <p className="text-base sm:text-lg text-black">+91 930979292</p>
            </div>

            {/* Card 2: Email us */}
            <div className="bg-[#FFFBF2] border border-black rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Email us</h3>
              <p className="text-base sm:text-lg text-black">hello@youngvox.org</p>
            </div>

            {/* Card 3: Reach us */}
            <div className="bg-white border border-black rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Reach us</h3>
              <p className="text-base sm:text-lg text-black">YoungVox, India</p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
