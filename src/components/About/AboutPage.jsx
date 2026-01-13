import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import visionImage from '../../assets/Our vision.png';
import tornBorder from '../../assets/our vision frame red.png';
import ourVisionShadow from '../../assets/our vision shadow.png';
import frame15Image from '../../assets/Frame 15.png';
import saranyaImage from '../../assets/Saranya jaikumar.png';
import sylendraBabuImage from '../../assets/Sylendra-Babu.jpg';
import drPalImage from '../../assets/drpal.jpg';
import ashwinImage from '../../assets/Ashwin.jpeg';
import aravindImage from '../../assets/aravind.JPG';
import c2Image from '../../assets/c2.png';
import c5Image from '../../assets/c5.jpeg';
import c7Image from '../../assets/c7.jpeg';
import c8Image from '../../assets/c8.jpeg';
import g1Gif from '../../assets/gif/g1.gif';
import g2Gif from '../../assets/gif/g2.gif';
import g3Gif from '../../assets/gif/g3.gif';
import csrIcon1 from '../../assets/icons/CSR Icon.png';
import csrIcon2 from '../../assets/icons/CSR 2 Icon.png';
import csrIcon3 from '../../assets/icons/CSR 3 Icon.png';
import csrIcon4 from '../../assets/icons/CSR 4 Icon.png';
import csrIcon5 from '../../assets/icons/CSR 5 Icon.png';
import NewsletterSection from '../Newsletter';
import Footer from '../Footer';

const AboutPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // CSR Partners array for continuous rotation
  const csrPartners = [csrIcon5, csrIcon2, csrIcon3, csrIcon4, csrIcon1];

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Saranya Jaikumar",
      title: "Founder & President",
      image: c2Image,
      linkedin: "http://linkedin.com/in/dr-saranya-t-jaikumar-72b833169"
    },
    {
      id: 2,
      name: "Banupriya",
      title: "Chief Operating Officer (COO)",
      image: c5Image,
      linkedin: "https://www.linkedin.com/in/banu-priya-a0312b8b/"
    },
    {
      id: 3,
      name: "Kapilash.G",
      title: "Head - Business Strategy & Creative communication",
      image: c7Image,
      linkedin: "https://www.linkedin.com/in/kapilash-gunasekaran/"
    },
    {
      id: 4,
      name: "Siyana Salim",
      title: "National Program Coordinator",
      image: c8Image,
      linkedin: "https://www.linkedin.com/in/siyana-salim-vaidyar-395b03267/"
    }
  ];

  const advisors = [
    {
      id: 1,
      name: "Dr. C. Sylendra Babu, I.P.S., (Retd)",
      title: "Retired Indian Police Service",
      image: sylendraBabuImage
    },
    {
      id: 2,
      name: "Dr Pal Manickam",
      title: "Gastroenterologist, Preventive Gastro USA, Founder - Dr. Pal's NewME and MedCom",
      image: drPalImage
    },
    {
      id: 3,
      name: "Ashwin R",
      title: "Career Guidance Expert",
      image: ashwinImage
    },
    {
      id: 4,
      name: "S.B.Aravind Tharunsri",
      title: "Analyst and Director - DIVE FORCE, PADI Master Instructor",
      image: aravindImage
    }
  ];


  const [visionRef, visionVisible] = useScrollAnimation({ once: true });
  const [teamRef, teamVisible] = useScrollAnimation({ once: true });
  const [advisorsRef, advisorsVisible] = useScrollAnimation({ once: true });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Our Vision Section */}
      <section ref={visionRef} className="py-6 sm:py-20 lg:py-12">
        <div className={`max-w-7xl mx-auto px-3 sm:px-6 text-center ${visionVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h1 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-gray-900 mb-3 sm:mb-8">
            Our Vision
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 leading-snug lg:leading-relaxed max-w-7xl mx-auto px-6 lg:px-0">
            To build a generation of empowered youth leaders who are informed, compassionate, and equipped to create a sustainable, equitable and inclusive world.
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

          {/* Bottom red shade (Paint stroke effect) */}
          <div
            className="absolute bottom-[-1px] left-0 w-full h-24 sm:h-32 lg:h-40 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #A82228 0%, rgba(168, 34, 40, 0.7) 30%, transparent 100%)'
            }}
          ></div>

          {/* Bottom torn border */}
          <img
            src={tornBorder}
            alt="torn border"
            className="absolute bottom-[-10px] sm:bottom-[-30px] left-0 w-full block z-30 pointer-events-none select-none"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-6 sm:py-18 lg:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 text-center">
          <h1 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-gray-900 mb-3 sm:mb-8">
            Our Mission
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 leading-snug sm:leading-relaxed max-w-6xl mx-auto px-0.5 sm:px-0 mb-8 sm:mb-12">
            To partner with schools, institutions, and organizations in nurturing student voice and leadership through education, empowerment, and equity.
          </p>

          {/* Three Blocks: Education, Empowerment, Equity */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 max-w-5xl mx-auto mt-6 sm:mt-10">
            {/* Education Block */}
            <div className="bg-[#F5F5F5] rounded-t-lg px-4 sm:px-6 pt-8 pb-4 sm:pb-6 flex flex-col items-center min-h-[180px] sm:min-h-[210px] relative">
              <div className="flex-1 flex items-center justify-center mb-6">
                <img
                  src={g1Gif}
                  alt="Education"
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Education
              </h3>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#A82228] rounded-b-lg"></div>
            </div>

            {/* Empowerment Block */}
            <div className="bg-[#F5F5F5] rounded-t-lg px-4 sm:px-6 pt-8 pb-4 sm:pb-6 flex flex-col items-center min-h-[180px] sm:min-h-[210px] relative">
              <div className="flex-1 flex items-center justify-center mb-6">
                <img
                  src={g2Gif}
                  alt="Empowerment"
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Empowerment
              </h3>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#A82228] rounded-b-lg"></div>
            </div>

            {/* Equity Block */}
            <div className="bg-[#F5F5F5] rounded-t-lg px-4 sm:px-6 pt-8 pb-4 sm:pb-6 flex flex-col items-center min-h-[180px] sm:min-h-[210px] relative">
              <div className="flex-1 flex items-center justify-center mb-6">
                <img
                  src={g3Gif}
                  alt="Equity"
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Equity
              </h3>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#A82228] rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Our Team Section */}
      <section ref={teamRef} className="py-6 sm:py-18 lg:py-20" style={{ backgroundColor: '#FFF2DD' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className={`text-center mb-6 sm:mb-10 ${teamVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h2 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-black mb-4">
              Our Team
            </h2>
            <p className="text-lg text-center text-black leading-relaxed max-w-6xl mx-auto">
              The YoungVox team is a dynamic collective of experienced professionals across program design, training, psychology, and operations, united by a shared mission to empower the next generation of emotionally strong, confident, and socially responsible leaders.
            </p>
          </div>

          {/* Team Cards Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 ${teamVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg border-2 border-[#A82228] shadow-sm overflow-hidden h-full flex flex-col">
                {/* Headshot */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden m-0 p-0 leading-[0] flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full block m-0 p-0 align-top"
                    style={{
                      display: 'block',
                      verticalAlign: 'top',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: member.id === 3 ? 'center top' : member.id === 4 ? 'center 20%' : 'center',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
                {/* Red Background Section */}
                <div className="bg-[#A82228] p-3 sm:p-3.5 mt-0 flex flex-col flex-grow">
                  <h3 className="text-white text-sm sm:text-base font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white text-xs sm:text-sm mb-2 flex-grow leading-tight">
                    {member.title}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Advisors Section */}
      <section ref={advisorsRef} className="py-6 sm:py-18 lg:py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className={`text-center mb-6 sm:mb-10 ${advisorsVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h2 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-black mb-4">
              Our Advisors
            </h2>
            <p className="text-lg text-center text-black leading-relaxed max-w-6xl mx-auto">
              Our leadership group brings together experienced professionals across programs, training, and operations, united in their commitment to shaping a generation of strong, confident, and capable young leaders.
            </p>
          </div>

          {/* Advisors Cards Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 ${advisorsVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            {advisors.map((advisor) => (
              <div key={advisor.id} className="bg-white rounded-lg border-2 border-[#A82228] shadow-sm overflow-hidden h-full flex flex-col">
                {/* Headshot */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden m-0 p-0 leading-[0] flex-shrink-0">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover block m-0 p-0 align-top"
                    style={{
                      display: 'block',
                      verticalAlign: 'top',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: advisor.id === 1 ? 'center -5%' : advisor.id === 2 ? 'center 20%' : advisor.id === 4? 'center 5%' : 'center'
                    }}
                  />
                </div>
                {/* Red Background Section */}
                <div className="bg-[#A82228] p-3 sm:p-3.5 mt-0 flex flex-col flex-grow">
                  <h3 className="text-white text-sm sm:text-base font-bold mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-white text-xs sm:text-sm mb-2 flex-grow leading-tight">
                    {advisor.title}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowering India's Youth Section */}
      <section className="pt-6 sm:pt-12 lg:pt-16 pb-3 sm:pb-6 lg:pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1 lg:max-w-[600px] xl:max-w-[700px]">
              <h2 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
                Empowering India's Youth to Lead, Thrive & Transform
              </h2>

              <div className="space-y-4 sm:space-y-5 lg:space-y-5 text-gray-700 text-lg leading-[1.6] sm:leading-[1.65] text-justify sm:text-justify">
                <p>
                YoungVox was founded with a vision to nurture empowered, emotionally resilient, and socially responsible young leaders across India. Although India has one of the world’s largest youth populations - over 253 million adolescents, with one in five individuals aged 10–19 (UNICEF, 2023) - access to holistic education, leadership development, and emotional wellbeing support remains limited. While SDG 4 and NEP 2020 strongly advocate life-skill-based learning, most school systems continue to be predominantly academic-focused. This gap underscores the urgent need for a structured, school-based ecosystem that develops both competence and character.
                </p>

                <p>
                YoungVox bridges this gap through its unique 4-Wing Chapter Model, empowering students to discover their voice, build leadership skills, strengthen emotional resilience, and contribute meaningfully to their communities - shaping a generation that is academically capable, emotionally aware, socially responsible, and future-ready. In doing so, YoungVox is redefining youth development in Indian schools by integrating character, competence, and purpose-driven learning.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 lg:pl-4 w-full lg:pt-2">
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

      {/* Our CSR Partners Section */}
      {/* 
      <section className="pt-3 sm:pt-6 lg:pt-8 pb-6 sm:pb-16 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-black text-center mb-6 sm:mb-10">
            Our CSR Partners
          </h2>

          <div className="overflow-hidden relative">
            <style>{`
              @keyframes csrScroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-100% / 2));
                }
              }
              .csr-infinite-scroll {
                animation: csrScroll 25s linear infinite;
              }
            `}</style>
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-8 csr-infinite-scroll" style={{ width: '200%', display: 'flex' }}>
              {[...csrPartners, ...csrPartners].map((icon, index) => {
                const altTexts = [
                  'CSR Partner 1',
                  'Velammal Nexus',
                  'ABACUS Montessori School',
                  'TIPS iSP International Schools Partnership',
                  'CSR Partner 5'
                ];
                const altIndex = index % 5;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 sm:p-4 shadow-md border border-gray-100 min-w-[140px] sm:min-w-[160px] lg:min-w-[180px] h-[90px] sm:h-[100px] lg:h-[120px] flex items-center justify-center flex-shrink-0"
                    style={{ width: `calc(100% / ${csrPartners.length * 2})` }}
                  >
                    <img
                      src={icon}
                      alt={altTexts[altIndex]}
                      className="max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] max-h-[70px] sm:max-h-[80px] lg:max-h-[100px] object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Connect. Collaborate. Create Future Leaders Section */}
      <section className="py-6 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-black text-center mb-6 sm:mb-10">
            Connect. Collaborate. Create Future Leaders.
          </h2>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Card 1: Phone Number */}
            <div className="bg-pink-50 rounded-lg p-6 sm:p-8 shadow-md flex items-center gap-4 sm:gap-6 h-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A82228] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wide">Phone Number</h3>
                <p className="text-base sm:text-lg text-black">+91 93818-11111</p>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-pink-50 rounded-lg p-6 sm:p-8 shadow-md flex items-center gap-4 sm:gap-6 h-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A82228] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wide">Email</h3>
                <p className="text-base sm:text-lg text-black">Info@youngvox.com</p>
              </div>
            </div>

            {/* Card 3: Address */}
            <div className="bg-pink-50 rounded-lg p-6 sm:p-8 shadow-md flex items-center gap-4 sm:gap-6 h-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A82228] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wide">Address</h3>
                <p className="text-base text-left text-black leading-snug">1/40H , EJR Enclave , Mount Poonamallee Road , St. Thomas Mt , Chennai - 600016</p>
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



