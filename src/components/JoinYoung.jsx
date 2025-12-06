import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewsletterSection from './Newsletter';
import joinBanner from '../assets/join bannner.png';
import join01Image from '../assets/join01.png';
import joinImage from '../assets/join.png';
import join1Image from '../assets/join1.png';

const JoinYoung = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      {/* Banner Section */}
      <section className="w-full relative">
        <div className="relative w-full">
          <img 
            src={joinBanner} 
            alt="Join YoungVox Banner" 
            className="w-full h-auto object-cover"
          />
          
          {/* Overlay Content - Right aligned on all screens */}
          <div className="absolute inset-0 flex items-center justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-24 py-8 sm:py-12 md:py-16 lg:py-20 z-20">
            <div className="max-w-[85%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-right space-y-4 sm:space-y-5 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Join YoungVox
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-relaxed drop-shadow-md">
                At YoungVox, we're building a community of passionate, driven individuals committed to empowering youth and creating lasting change. Whether you're a school, volunteer, corporate partner, or advisor, there's a place for you in our mission.
              </p>
              <div className="flex justify-end pt-2 sm:pt-3 md:pt-4">
                <button className="bg-[#A82228] text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl relative z-30">
                  Explore Ways to Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join as a School Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Join as a School
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              Become a YoungVox School Chapter and empower your students to lead with purpose. Students build leadership skills, run campaigns in their own school, and take part in community initiatives that create real, lasting impact. And the best part? It's completely free of cost. By joining YoungVox, your school becomes part of a national movement nurturing confident, responsible young changemakers.
              </p>
              <button className="bg-[#A82228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors w-full sm:w-auto">
                I'd Like To Know More
              </button>
            </div>
            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <img
                src={join01Image}
                alt="Students in school uniforms"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer or Intern With Us Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Image */}
            <div>
              <img
                src={joinImage}
                alt="Volunteers working with students"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right Column - Text Content */}
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Volunteer or Intern With Us
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              Our volunteers and interns work closely with students and communities to implement programs that inspire real change. From organizing school and community campaigns to offering guidance, creativity, and mentorship, every contribution strengthens our mission. Your time and skills can empower young leaders.
              </p>
              <button className="bg-[#A82228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors w-full sm:w-auto">
                I'd Like To Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Collaboration Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Corporate Collaboration
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              Companies can partner with YoungVox by supporting initiatives, campaigns, or leadership programs that align with their CSR priorities. From education and skill-building to civic engagement and environmental awareness, your contribution helps strengthen youth leadership and build the next generation of responsible changemakers.
              </p>
              <button className="bg-[#A82228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors w-full sm:w-auto">
                I'd Like To Know More
              </button>
            </div>
            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <img
                src={join1Image}
                alt="Corporate collaboration"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Image */}
            <div>
              <img
                src={joinImage}
                alt="Advisors and mentors"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right Column - Text Content */}
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Advisors
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              We collaborate with education experts, youth mentors, and thought leaders who share our commitment to nurturing the next generation of responsible leaders. Partner with us to provide guidance, shape programs, and support student-led initiatives that create real community impact.
              </p>
              <button className="bg-[#A82228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors w-full sm:w-auto">
                I'd Like To Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Partners Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Implementation Partners
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              Are you an NGO, school, or community organization working with youth on the ground? Partner with YoungVox to combine resources, share expertise, and amplify the impact of youth campaigns and leadership programs. Every partnership begins with a conversation. Let's explore how we can work together to empower young leaders and drive meaningful change.
              </p>
              <button className="bg-[#A82228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors w-full sm:w-auto">
                I'd Like To Know More
              </button>
            </div>
            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <img
                src={join1Image}
                alt="Implementation partners"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JoinYoung;

