import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import visionImage from '../../assets/Our vision.png';
import tornBorder from '../../assets/our vision frame red.png';
import ourVisionShadow from '../../assets/our vision shadow.png';
import frame15Image from '../../assets/Frame 15.png';
import saranyaImage from '../../assets/Saranya jaikumar.png';
import csrIcon1 from '../../assets/icons/CSR Icon.png';
import csrIcon2 from '../../assets/icons/CSR 2 Icon.png';
import csrIcon3 from '../../assets/icons/CSR 3 Icon.png';
import csrIcon4 from '../../assets/icons/CSR 4 Icon.png';
import csrIcon5 from '../../assets/icons/CSR 5 Icon.png';
import educationIcon from '../../assets/Education.png';
import empowermentIcon from '../../assets/Empowerment.png';
import equityIcon from '../../assets/Equity.png';
import NewsletterSection from '../Newsletter';
import Footer from '../Footer';

const AboutPage = () => {
  const [teamSlide, setTeamSlide] = useState(0);
  const [advisorsSlide, setAdvisorsSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
    setTeamSlide((prev) => {
      const maxSlide = isDesktop ? teamMembers.length - 2 : teamMembers.length - 1;
      return Math.min(prev + 1, maxSlide);
    });
  };

  const prevTeamSlide = () => {
    setTeamSlide((prev) => Math.max(prev - 1, 0));
  };

  const nextAdvisorsSlide = () => {
    setAdvisorsSlide((prev) => {
      const maxSlide = isDesktop ? advisors.length - 2 : advisors.length - 1;
      return Math.min(prev + 1, maxSlide);
    });
  };

  const prevAdvisorsSlide = () => {
    setAdvisorsSlide((prev) => Math.max(prev - 1, 0));
  };

  const [visionRef, visionVisible] = useScrollAnimation({ once: true });
  const [teamRef, teamVisible] = useScrollAnimation({ once: true });
  const [advisorsRef, advisorsVisible] = useScrollAnimation({ once: true });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Our Vision Section */}
      <section ref={visionRef} className="pt-0 pb-4 sm:pb-8 lg:pb-10">
        {/* Banner with text overlay */}
        <div className={`relative w-full ${visionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Top shadow */}
          <img
            src={ourVisionShadow}
            alt="vision shadow"
            className="absolute top-0 left-0 w-full block z-10 pointer-events-none select-none"
          />

          {/* Main image - Responsive heights for mobile and desktop */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[550px] xl:h-[600px]">
            <img
              src={visionImage}
              alt="Our Vision"
              className="w-full h-full object-cover object-center block"
            />

            {/* White gradient overlay at top - Responsive height */}
            <div className="absolute top-0 left-0 w-full h-[32%] sm:h-[30%] lg:h-[28%] bg-gradient-to-b from-white via-white/98 to-white/80 z-20"></div>

            {/* Text overlay positioned in white area - Responsive for mobile and desktop */}
            <div className={`absolute top-0 left-0 w-full h-[32%] sm:h-[30%] lg:h-[28%] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 z-30 ${visionVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-1.5 sm:mb-2 lg:mb-3 leading-tight">
                Our Vision
              </h1>

              {/* Red underline - Responsive */}
              <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
                <div className="w-10 sm:w-14 md:w-16 h-0.5 sm:h-1 bg-[#A82228]"></div>
              </div>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-[90%] sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-center">
                To build a generation of empowered youth leaders who are informed, compassionate, and equipped to create a sustainable, equitable, and inclusive world
              </p>
            </div>
          </div>

          {/* Bottom torn border - Responsive positioning */}
          <img
            src={tornBorder}
            alt="torn border"
            className="absolute bottom-[-8px] sm:bottom-[-15px] md:bottom-[-20px] lg:bottom-[-25px] xl:bottom-[-30px] left-0 w-full block z-30 pointer-events-none select-none"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-6 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight sm:leading-normal">
            Our Mission
          </h1>

          {/* Red underline */}
          <div className="flex justify-center mb-3 sm:mb-6">
            <div className="w-8 sm:w-16 h-0.5 sm:h-1 bg-[#A82228]"></div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto px-0.5 sm:px-0 mb-6 sm:mb-10">
            WE ARE COMMITTED TO NURTURING YOUNG MINDS AND EMPOWERING THEM TO BECOME RESPONSIBLE GLOBAL CITIZENS.
          </p>

          {/* Three Blocks: Education, Empowerment, Equity */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {/* Education Block */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col justify-between items-center min-h-[180px] sm:min-h-[200px] relative">
              <div className="flex-1 flex items-center justify-center mb-4">
                <img 
                  src={educationIcon} 
                  alt="Education" 
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <div className="w-full flex flex-col items-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Educate</h3>
                <div className="w-3/4 h-1 bg-[#A82228]"></div>
              </div>
            </div>

            {/* Empowerment Block */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col justify-between items-center min-h-[180px] sm:min-h-[200px] relative">
              <div className="flex-1 flex items-center justify-center mb-4">
                <img 
                  src={empowermentIcon} 
                  alt="Empowerment" 
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <div className="w-full flex flex-col items-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Empowerment</h3>
                <div className="w-3/4 h-1 bg-[#A82228]"></div>
              </div>
            </div>

            {/* Equity Block */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col justify-between items-center min-h-[180px] sm:min-h-[200px] relative">
              <div className="flex-1 flex items-center justify-center mb-4">
                <img 
                  src={equityIcon} 
                  alt="Equity" 
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <div className="w-full flex flex-col items-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Enable</h3>
                <div className="w-3/4 h-1 bg-[#A82228]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering India's Youth Section */}
      <section className="py-6 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1 lg:max-w-[500px]">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 leading-tight">
                Empowering India's Youth to Lead, Think, and Transform
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
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
            <div className="order-1 lg:order-2 w-full">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={frame15Image}
                  alt="Four young girls jumping joyfully in school uniforms"
                  className="w-full h-auto min-h-[300px] sm:min-h-[400px] lg:h-[500px] xl:h-[550px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={teamRef} className="py-6 sm:py-12 lg:py-14 bg-pink-50 lg:overflow-visible">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 lg:overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start lg:overflow-visible">
            {/* Left Column - Text Content */}
            <div className={`lg:max-w-md ${teamVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2 sm:mb-3">
                Our Team
              </h2>
              
              {/* Red underline - left aligned */}
              <div className="flex justify-start mb-4 sm:mb-5">
                <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-[#A82228]"></div>
              </div>

              <p className="text-sm sm:text-base text-black leading-relaxed">
                Our leadership group brings together experienced professionals across programs, training, and operations, united in their commitment to shaping a generation of strong, confident, and capable young leaders
              </p>
            </div>

            {/* Right Column - Carousel */}
            <div className="relative w-full lg:w-auto lg:overflow-visible">
              <div className="relative overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${teamSlide * (isDesktop ? 50 : 100)}%)` }}
                >
                  {teamMembers.map((member) => (
                    <div key={member.id} className="w-full lg:w-1/2 min-w-full lg:min-w-[50%] flex-shrink-0 px-0 sm:px-2">
                      <div className="bg-white rounded-lg border-2 border-[#A82228] shadow-sm overflow-hidden">
                        {/* Headshot */}
                        <div className="relative h-64 sm:h-68 lg:h-72 overflow-hidden m-0 p-0 leading-[0]">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover block m-0 p-0 align-top"
                            style={{ display: 'block', verticalAlign: 'top', width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                        {/* Red Background Section */}
                        <div className="bg-[#A82228] p-4 sm:p-5 mt-0">
                          <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                            {member.name}
                          </h3>
                          <p className="text-white text-sm sm:text-base mb-3">
                            {member.title}
                          </p>
                          <button className="bg-white text-[#A82228] px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Mobile: Below carousel, Desktop: Left border */}
              <div className="flex justify-center gap-3 sm:gap-4 mt-6 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:flex-col lg:mt-0 lg:gap-2 z-20">
                <button
                  onClick={prevTeamSlide}
                  className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 hover:shadow-xl transition-all shadow-lg border border-gray-300"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextTeamSlide}
                  className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 hover:shadow-xl transition-all shadow-lg border border-gray-300"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advisors Section */}
      <section ref={advisorsRef} className="py-6 sm:py-12 lg:py-14 bg-pink-50 lg:overflow-visible">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 lg:overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start lg:overflow-visible">
            {/* Left Column - Text Content */}
            <div className={`lg:max-w-md ${advisorsVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2 sm:mb-3">
                Our Advisors
              </h2>
              
              {/* Red underline - left aligned */}
              <div className="flex justify-start mb-4 sm:mb-5">
                <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-[#A82228]"></div>
              </div>

              <p className="text-sm sm:text-base text-black leading-relaxed">
                Our leadership group brings together experienced professionals across programs, training, and operations, united in their commitment to shaping a generation of strong, confident, and capable young leaders
              </p>
            </div>

            {/* Right Column - Carousel */}
            <div className={`relative w-full lg:w-auto ${advisorsVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <div className="relative overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${advisorsSlide * (isDesktop ? 50 : 100)}%)` }}
                >
                  {advisors.map((advisor) => (
                    <div key={advisor.id} className="w-full lg:w-1/2 min-w-full lg:min-w-[50%] flex-shrink-0 px-0 sm:px-2">
                      <div className="bg-white rounded-lg border-2 border-[#A82228] shadow-sm overflow-hidden">
                        {/* Headshot */}
                        <div className="relative h-64 sm:h-68 lg:h-72 overflow-hidden m-0 p-0 leading-[0]">
                          <img
                            src={advisor.image}
                            alt={advisor.name}
                            className="w-full h-full object-cover block m-0 p-0 align-top"
                            style={{ display: 'block', verticalAlign: 'top', width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                        {/* Red Background Section */}
                        <div className="bg-[#A82228] p-4 sm:p-5 mt-0">
                          <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                            {advisor.name}
                          </h3>
                          <p className="text-white text-sm sm:text-base mb-3">
                            {advisor.title}
                          </p>
                          <button className="bg-white text-[#A82228] px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Mobile: Below carousel, Desktop: Left border */}
              <div className="flex justify-center gap-3 sm:gap-4 mt-6 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:flex-col lg:mt-0 lg:gap-2 z-20">
                <button
                  onClick={prevAdvisorsSlide}
                  className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 hover:shadow-xl transition-all shadow-lg border border-gray-300"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextAdvisorsSlide}
                  className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 hover:shadow-xl transition-all shadow-lg border border-gray-300"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our CSR Partners Section */}
      <section className="py-6 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black text-center mb-6 sm:mb-10">
            Our CSR Partners
          </h2>
          
          {/* Partner Logos - Horizontal Scroll with Invisible Scrollbar */}
          <div className="overflow-x-auto scrollbar-hide -mx-3 sm:mx-0 px-3 sm:px-0 lg:overflow-visible" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex items-center gap-3 sm:gap-4 lg:justify-center lg:gap-8 pb-4 lg:mx-auto" style={{ width: 'max-content' }}>
              {/* Partner Logo 1 */}
              <div className="bg-white rounded-lg p-3 sm:p-3 shadow-md border border-gray-100 min-w-[130px] sm:min-w-[150px] lg:min-w-[170px] h-[80px] sm:h-[90px] lg:h-[100px] flex items-center justify-center flex-shrink-0">
                <img src={csrIcon1} alt="CSR Partner 1" className="max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] max-h-[70px] sm:max-h-[80px] lg:max-h-[100px] object-contain" />
              </div>
              
              {/* Partner Logo 2 - Velammal Nexus */}
              <div className="bg-white rounded-lg p-3 sm:p-3 shadow-md border border-gray-100 min-w-[130px] sm:min-w-[150px] lg:min-w-[170px] h-[80px] sm:h-[90px] lg:h-[100px] flex items-center justify-center flex-shrink-0">
                <img src={csrIcon2} alt="Velammal Nexus" className="max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] max-h-[70px] sm:max-h-[80px] lg:max-h-[100px] object-contain" />
              </div>
              
              {/* Partner Logo 3 - ABACUS Montessori School */}
              <div className="bg-white rounded-lg p-3 sm:p-3 shadow-md border border-gray-100 min-w-[130px] sm:min-w-[150px] lg:min-w-[170px] h-[80px] sm:h-[90px] lg:h-[100px] flex items-center justify-center flex-shrink-0">
                <img src={csrIcon3} alt="ABACUS Montessori School" className="max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] max-h-[70px] sm:max-h-[80px] lg:max-h-[100px] object-contain" />
              </div>
              
              {/* Partner Logo 4 - TIPS iSP */}
              <div className="bg-white rounded-lg p-3 sm:p-3 shadow-md border border-gray-100 min-w-[130px] sm:min-w-[150px] lg:min-w-[170px] h-[80px] sm:h-[90px] lg:h-[100px] flex items-center justify-center flex-shrink-0">
                <img src={csrIcon4} alt="TIPS iSP International Schools Partnership" className="max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] max-h-[70px] sm:max-h-[80px] lg:max-h-[100px] object-contain" />
              </div>
              
              {/* Partner Logo 5 */}
              <div className="bg-white rounded-lg p-3 sm:p-3 shadow-md border border-gray-100 min-w-[130px] sm:min-w-[150px] lg:min-w-[170px] h-[80px] sm:h-[90px] lg:h-[100px] flex items-center justify-center flex-shrink-0">
                <img src={csrIcon5} alt="CSR Partner 5" className="max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] max-h-[70px] sm:max-h-[80px] lg:max-h-[100px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect. Collaborate. Create Future Leaders Section */}
      <section className="py-6 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black text-center mb-6 sm:mb-10">
            Connect. Collaborate. Create Future Leaders.
          </h2>
          
          {/* Contact Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
            {/* Card 1: Address */}
            <div className="bg-pink-50 rounded-lg p-6 sm:p-8 shadow-md flex items-center gap-4 sm:gap-6 w-full sm:w-auto min-w-[280px] sm:min-w-[300px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A82228] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wide">Our Address</h3>
                <p className="text-base sm:text-lg text-black">Young Vox, India</p>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-pink-50 rounded-lg p-6 sm:p-8 shadow-md flex items-center gap-4 sm:gap-6 w-full sm:w-auto min-w-[280px] sm:min-w-[300px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A82228] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wide">Email Us</h3>
                <p className="text-base sm:text-lg text-black">hello@youngvox.org</p>
              </div>
            </div>

            {/* Card 3: Phone Number */}
            <div className="bg-pink-50 rounded-lg p-6 sm:p-8 shadow-md flex items-center gap-4 sm:gap-6 w-full sm:w-auto min-w-[280px] sm:min-w-[300px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A82228] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wide">Call Us</h3>
                <p className="text-base sm:text-lg text-black">+91 935979292</p>
              </div>
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
