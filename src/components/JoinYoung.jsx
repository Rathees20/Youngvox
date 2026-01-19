import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewsletterSection from './Newsletter';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import joinBanner from '../assets/joinyoungvox 2.jpeg';
import join01Image from '../assets/join01.png';
import joinImage from '../assets/join.png';
import join1Image from '../assets/join1.png';

const JoinYoung = () => {
  const [bannerRef, bannerVisible] = useScrollAnimation({ once: true });
  const [schoolRef, schoolVisible] = useScrollAnimation({ once: true });
  const [volunteerRef, volunteerVisible] = useScrollAnimation({ once: true });
  const [corporateRef, corporateVisible] = useScrollAnimation({ once: true });
  const [advisorRef, advisorVisible] = useScrollAnimation({ once: true });
  const [partnerRef, partnerVisible] = useScrollAnimation({ once: true });

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Banner Section */}
      <section ref={bannerRef} className="w-full relative overflow-hidden">
        <div className="relative w-full">
          <img
            src={joinBanner}
            alt="Join YoungVox Banner"
            className="w-full h-[300px] sm:h-[350px] md:h-auto md:max-h-screen object-cover scale-120 md:scale-100"
            style={{
              imageRendering: '-webkit-optimize-contrast',
              WebkitImageRendering: '-webkit-optimize-contrast',
              msInterpolationMode: 'bicubic'
            }}
            loading="eager"
            decoding="async"
          />

          {/* Overlay Content - Right aligned on all screens */}
          <div
            className={`absolute inset-0 flex items-center z-20 ${bannerVisible ? 'animate-fade-in-right' : 'opacity-0'
              }`}
          >
            <div
              className="
      ml-20 sm:ml-auto
      mr-4 sm:mr-[6%]
      max-w-[85%] sm:max-w-lg md:max-w-xl lg:max-w-2xl
      text-left
      space-y-1 sm:space-y-5 md:space-y-6
    "
            >

              <h1 className="text-[24px] lg:text-5xl font-bold text-black leading-tight sm:leading-tight drop-shadow-lg">
                Join YoungVox
              </h1>
              <p className="text-base sm:text-lg text-black leading-tight sm:leading-relaxed drop-shadow-md text-justify">
                At YoungVox, we're building a community of passionate, driven individuals committed to empowering youth and creating meaningful impact. We provide a collaborative environment where ideas flourish, and your efforts directly contribute to shaping the next generation of responsible, capable leaders.
              </p>
              <div className="pt-1 sm:pt-3">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join as a School Section */}
      <section ref={schoolRef} className="py-4 sm:py-6 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className={`order-2 lg:order-1 space-y-6 ${schoolVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-[24px] lg:text-4xl font-bold text-gray-900 leading-tight">
                Join as a School
              </h2>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed text-justify">
                Become a YoungVox School Chapter and empower your students to lead with purpose. Students build leadership skills, run campaigns in their own school, and take part in community initiatives that create real, lasting impact. And the best part? It's completely free of cost. By joining YoungVox, your school becomes part of a national movement nurturing confident, responsible young changemakers.
              </p>
              <div className="pt-2">
                <Link
                  to="/form/school"
                  onClick={handleLinkClick}
                  className="inline-block bg-[#A82228] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl text-base md:text-lg"
                >
                  Get in touch
                </Link>
              </div>
            </div>
            {/* Right Column - Image */}
            <div className={`order-1 lg:order-2 lg:pt-2 flex justify-center lg:justify-end ${schoolVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <div className="w-full max-w-[500px] h-[300px] sm:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl hover-scale transition-transform duration-300">
                <img
                  src={join01Image}
                  alt="Students in school uniforms"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer or Intern With Us Section */}
      <section ref={volunteerRef} className="py-4 sm:py-6 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <div className={`flex justify-center lg:justify-start ${volunteerVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="w-full max-w-[500px] h-[300px] sm:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl hover-scale transition-transform duration-300">
                <img
                  src={joinImage}
                  alt="Volunteers working with students"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Right Column - Text Content */}
            <div className={`space-y-6 lg:pt-2 ${volunteerVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <h2 className="text-[24px] lg:text-4xl font-bold text-gray-900 leading-tight">
                Volunteer or Intern With Us
              </h2>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed text-justify">
                Our volunteers and interns play a vital role in YoungVox, working closely with students and communities to implement programs and initiatives that inspire real change. From organizing school and community campaigns to offering guidance, creativity, and mentorship, every contribution strengthens our mission. Your time and skills can empower young leaders.
              </p>
              <div className="pt-2">
                <Link
                  to="/form/volunteer"
                  onClick={handleLinkClick}
                  className="inline-block bg-[#A82228] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl text-base md:text-lg"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Collaboration Section */}
      <section ref={corporateRef} className="py-4 sm:py-6 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className={`order-2 lg:order-1 space-y-6 ${corporateVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-[24px] lg:text-4xl font-bold text-gray-900 leading-tight">
                Corporate Collaboration
              </h2>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed text-justify">
                Companies can partner with YoungVox by supporting initiatives, campaigns, or leadership programs that align with their CSR priorities. From education and skill-building to civic engagement and environmental awareness, your contribution helps strengthen youth leadership, empower student action, and build the next generation of responsible changemakers.
              </p>
              <div className="pt-2">
                <Link
                  to="/form/corporate"
                  onClick={handleLinkClick}
                  className="inline-block bg-[#A82228] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl text-base md:text-lg"
                >
                  Get in touch
                </Link>
              </div>
            </div>
            {/* Right Column - Image */}
            <div className={`order-1 lg:order-2 lg:pt-2 flex justify-center lg:justify-end ${corporateVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <div className="w-full max-w-[500px] h-[300px] sm:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl hover-scale transition-transform duration-300">
                <img
                  src={join1Image}
                  alt="Corporate collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section ref={advisorRef} className="py-4 sm:py-6 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <div className={`flex justify-center lg:justify-start ${advisorVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="w-full max-w-[500px] h-[300px] sm:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl hover-scale transition-transform duration-300">
                <img
                  src={joinImage}
                  alt="Advisors and mentors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Right Column - Text Content */}
            <div className={`space-y-6 lg:pt-2 ${advisorVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <h2 className="text-[24px] lg:text-4xl font-bold text-gray-900 leading-tight">
                Advisors
              </h2>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed text-justify">
                We collaborate with education experts, youth mentors, and thought leaders who share our commitment to nurturing the next generation of responsible leaders. Partner with us to provide guidance, shape programs, and support student-led initiatives that create real community impact.
              </p>
              <div className="pt-2">
                <Link
                  to="/form/advisor"
                  onClick={handleLinkClick}
                  className="inline-block bg-[#A82228] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl text-base md:text-lg"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Partners Section */}
      <section ref={partnerRef} className="pt-4 pb-12 sm:py-6 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className={`order-2 lg:order-1 space-y-6 ${partnerVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-[24px] lg:text-4xl font-bold text-gray-900 leading-tight">
                Implementation Partners
              </h2>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed text-justify">
                Are you an NGO, school, or community organization working with youth on the ground? Partner with YoungVox to combine resources, share expertise, and amplify the impact of youth campaigns and leadership programs. Every partnership begins with a conversation. Let's explore how we can work together to empower young leaders and drive meaningful change.
              </p>
              <div className="pt-2">
                <Link
                  to="/form/partner"
                  onClick={handleLinkClick}
                  className="inline-block bg-[#A82228] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl text-base md:text-lg"
                >
                  Get in touch
                </Link>
              </div>
            </div>
            {/* Right Column - Image */}
            <div className={`order-1 lg:order-2 lg:pt-2 flex justify-center lg:justify-end ${partnerVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <div className="w-full max-w-[500px] h-[300px] sm:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl hover-scale transition-transform duration-300">
                <img
                  src={join1Image}
                  alt="Implementation partners"
                  className="w-full h-full object-cover"
                />
              </div>
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

