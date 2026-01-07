import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import wingBanner from '../../assets/wing banner.png';
import wing1Image from '../../assets/wing1.png';
import wing2Image from '../../assets/wing2.png';
import wing3Image from '../../assets/wing3.png';
import wing4Image from '../../assets/wing4.png';
import wing5Image from '../../assets/wing5.png';
import wingLBanner from '../../assets/wingLbanner.png';
import vectorImage from '../../assets/our vision frame red.png';
import containerIcon from '../../assets/icons/Container.png';
import container01Icon from '../../assets/icons/Container01.png';
import maskGroupIcon from '../../assets/icons/Mask group.png';
import maskGroup1Icon from '../../assets/icons/Mask group1.png';
import maskGroup2Icon from '../../assets/icons/Mask group2.png';

const WingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    email: '',
    phoneNumber: '',
    location: '',
    message: '',
    notRobot: false
  });

  const [currentStep, setCurrentStep] = useState(1);

  // Scroll animations
  const [heroRef, heroVisible] = useScrollAnimation({ once: true });
  const [leadershipRef, leadershipVisible] = useScrollAnimation({ once: true });
  const [wing1Ref, wing1Visible] = useScrollAnimation({ once: true });
  const [wing2Ref, wing2Visible] = useScrollAnimation({ once: true });
  const [wing3Ref, wing3Visible] = useScrollAnimation({ once: true });
  const [wing4Ref, wing4Visible] = useScrollAnimation({ once: true });
  const [howItWorksRef, howItWorksVisible] = useScrollAnimation({ once: true });
  const [formRef, formVisible] = useScrollAnimation({ once: true });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-24 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
            {/* Left - Title */}
            <div className={`${heroVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h1 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-black mb-6">
                YOUNGVOX - WINGS & LEADERSHIP
              </h1>
            </div>

            {/* Right - Description */}
            <div className={`space-y-4 ${heroVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <p className="text-lg text-black leading-relaxed">
                YoungVox nurtures student leadership through a structured School Chapter model powered by four dynamic wings. Each wing is led by students, supported by a core leadership team and teacher mentors, ensuring meaningful engagement, collaboration, and real-world learning.
              </p>
              <button className="bg-[#A82228] text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md font-semibold hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl">
                Join Now
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`w-full ${heroVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
            <img
              src={wingBanner}
              alt="YoungVox students"
              className="w-full h-auto object-cover rounded-2xl hover-scale transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Leadership Structure Section */}
      <section ref={leadershipRef} className="py-6 sm:py-8 lg:py-12" style={{ backgroundColor: '#FFF6E3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-10 ${leadershipVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h2 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-black mb-2">
              Leadership Structure
            </h2>
            <p className="text-xs sm:text-sm font-bold text-gray-500 tracking-widest uppercase">
              A COLLABORATIVE MODEL WHERE STUDENTS LEAD, LEARN, AND GROW TOGETHER
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left - Teacher Mentors (Square Card with decreased width) */}
            <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-visible min-h-[280px] w-full max-w-sm mx-auto lg:mx-0 lg:ml-8 ${leadershipVisible ? 'animate-fade-in-left animate-delay-200' : 'opacity-0'}`}>
              <div className="flex flex-col items-center h-full justify-center">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <img src={containerIcon} alt="Teacher Mentors" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-3">Teacher Mentors (2)</h3>
                <p className="text-base text-gray-600 text-center leading-relaxed">
                  Two teachers guide, support, and ensure smooth functioning of student-led initiatives.
                </p>
              </div>
              {/* Red horizontal line below */}
              <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#A82228] rounded-b-2xl"></div>
            </div>

            {/* Right - Student Leadership */}
            <div className={`space-y-6 lg:-ml-12 ${leadershipVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              {/* Top Row - Three smaller square cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {/* Chapter Chief */}
                <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm text-center relative overflow-visible">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A82228] rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center p-2 sm:p-3 shadow-md">
                    <img src={maskGroupIcon} alt="Chapter Chief" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base font-bold text-black">Chapter Chief</h4>
                  <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#A82228] rounded-b-2xl"></div>
                </div>

                {/* Treasurer - Swapped icon */}
                <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm text-center relative overflow-visible">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A82228] rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center p-2 sm:p-3 shadow-md">
                    <img src={maskGroup2Icon} alt="Treasurer" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base font-bold text-black">Treasurer</h4>
                  <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#A82228] rounded-b-2xl"></div>
                </div>

                {/* Secretary - Swapped icon */}
                <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm text-center relative overflow-visible">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A82228] rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center p-2 sm:p-3 shadow-md">
                    <img src={maskGroup1Icon} alt="Secretary" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base font-bold text-black">Secretary</h4>
                  <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#A82228] rounded-b-2xl"></div>
                </div>
              </div>

              {/* Bottom - 4 Wing Leaders Card (Horizontal Layout) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-visible">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <img src={container01Icon} alt="4 Wing Leaders" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">4 Wing Leaders</h3>
                    <p className="text-base text-gray-600">
                      Each wing led by a Wing Leader with an active student team passionate about that domain.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#A82228] rounded-b-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wings Grid Section */}
      <section className="py-6 sm:py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Academic & Career Guidance Wing */}
            <div ref={wing1Ref} className={`p-6 lg:p-10 rounded-[2rem] bg-[#FFF6E3] shadow-sm transition-all hover:shadow-md ${wing1Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-1.5 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-wider">Student to Professional</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
                  <img src={wing1Image} alt="Academic & Career Guidance" className="w-full h-full object-cover" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">Academic & Career Guidance Wing</h2>
              <p className="text-sm text-gray-600 mb-4 font-medium italic">| SDG 4 – Quality Education |</p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Helps students discover academic interests, plan career paths, and access learning resources.
              </p>
            </div>

            {/* Student Wellbeing Wing */}
            <div ref={wing2Ref} className={`p-6 lg:p-10 rounded-[2rem] bg-[#A82228] shadow-sm transition-all hover:shadow-md ${wing2Visible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-1.5 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-wider">Digital Detox</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
                  <img src={wing2Image} alt="Student Wellbeing" className="w-full h-full object-cover" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Student Wellbeing Wing</h2>
              <p className="text-sm text-white/80 mb-4 font-medium italic">| SDG 3 – Good Health & Well-being |</p>
              <p className="text-lg text-white/90 leading-relaxed font-medium">
                Promotes emotional, mental, and physical wellbeing through psychoeducation, awareness sessions, and healthy habit-building activities.
              </p>
            </div>

            {/* Child Rights & Social Justice Wing */}
            <div ref={wing3Ref} className={`p-6 lg:p-10 rounded-[2rem] bg-[#A82228] shadow-sm transition-all hover:shadow-md ${wing3Visible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-1.5 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-wider">Speak Up</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
                  <img src={wing3Image} alt="Child Rights & Social Justice" className="w-full h-full object-cover" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Child Rights & Social Justice Wing</h2>
              <p className="text-sm text-white/80 mb-4 font-medium italic">| SDG 16 – Peace, Justice & Strong Institutions |</p>
              <p className="text-lg text-white/90 leading-relaxed font-medium">
                Builds awareness on children's rights, protection, equality, safety, and safety through campaigns and forums.
              </p>
            </div>

            {/* Community Outreach & Service Wing */}
            <div ref={wing4Ref} className={`p-6 lg:p-10 rounded-[2rem] bg-[#FFF6E3] shadow-sm transition-all hover:shadow-md ${wing4Visible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-1.5 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-wider">Blue Earth, Clean Earth</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
                  <img src={wing4Image} alt="Community Outreach & Service" className="w-full h-full object-cover" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">Community Outreach & Service Wing</h2>
              <p className="text-sm text-gray-600 mb-4 font-medium italic">| SDG 14 – Life Below Water |</p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Leads eco-friendly initiatives, environmental awareness drives, and community service to promote sustainability and civic responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section ref={howItWorksRef} className="py-6 sm:py-8 lg:py-12" style={{ backgroundColor: '#FFF6E3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className={`space-y-6 ${howItWorksVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                How it works
              </h2>

              {/* Step Indicators with Horizontal Line */}
              <div className="relative mb-8">
                {/* Horizontal Gray Line - spans from left edge to right edge */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>

                {/* Step Numbers and Dots - positioned in the left half */}
                <div className="relative w-full">
                  {[1, 2, 3, 4].map((step, index) => {
                    // Position dots in the left half: evenly distribute in first half
                    // Positions: 5%, 17.5%, 30%, 42.5%
                    const leftPosition = 5 + (index * 12.5);
                    return (
                      <div key={step} className="absolute flex flex-col items-center" style={{ left: `${leftPosition}%`, transform: 'translateX(-50%)', zIndex: 10 }}>
                        {/* Number - positioned above the line */}
                        <div className={`text-lg font-medium transition-all duration-300 ${
                          currentStep === step
                            ? 'font-bold text-gray-800'
                            : 'font-normal text-gray-500'
                        }`} style={{ marginBottom: '8px' }}>
                          {String(step).padStart(2, '0')}
                        </div>
                        {/* Dot - positioned directly on the line at top-8 (32px), centered vertically on the line */}
                        <div className={`rounded-full absolute transition-all duration-300 ${
                          currentStep === step
                            ? 'w-4 h-4 bg-[#A82228]'
                            : 'w-3 h-3 bg-gray-400'
                        }`} style={{
                          top: '32px',
                          transform: 'translateY(-50%)'
                        }}></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Descriptive Text - Positioned below the timeline, starts where dots start (at left) */}
              <div className="mb-8 mt-32">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Student-led leadership structure - Every activity is planned, and executed by student leaders from each wing.
                </p>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 active:scale-95"
                    aria-label="Previous step"
                  >
                    <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                      {/* Solid left arrow: triangle head pointing left + rectangular shaft */}
                      <polygon points="6,12 12,6 12,9 18,9 18,15 12,15 12,18"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                    className="w-10 h-10 rounded-full bg-[#A82228] flex items-center justify-center hover:bg-[#8a1c22] transition-all hover:scale-110 active:scale-95"
                    aria-label="Next step"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      {/* Solid right arrow: triangle head pointing right + rectangular shaft */}
                      <polygon points="18,12 12,6 12,9 6,9 6,15 12,15 12,18"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className={`${howItWorksVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <img
                src={wing5Image}
                alt="How it works"
                className="w-full h-auto rounded-lg shadow-lg hover-scale transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Launch a YoungVox Chapter Section */}
      <section ref={formRef} className="py-6 sm:py-8 lg:py-12" style={{ backgroundColor: '#FFF6E3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Content */}
            <div className={`space-y-6 ${formVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-black">
                Launch a YoungVox Chapter
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Bring the four-wing leadership model to your campus and empower future changemakers.
              </p>
              <a
                href="https://www.cry.org/contact/?type=corporate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#A82228] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-[#8a1c22] transition-colors"
              >
                I'd Like To Know More
              </a>
            </div>

            {/* Right - Form */}
            <div className={`bg-white rounded-lg p-6 sm:p-8 shadow-sm hover-lift transition-all ${formVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <h3 className="text-[30px] lg:text-[36px] font-bold text-black mb-6">
                Write to Us
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <select
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent appearance-none pr-10"
                    required
                  >
                    <option value="">School Name</option>
                    <option value="school1">School 1</option>
                    <option value="school2">School 2</option>
                    <option value="school3">School 3</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="notRobot"
                    id="notRobot"
                    checked={formData.notRobot}
                    onChange={handleChange}
                    className="mt-1 mr-2 w-4 h-4 text-[#A82228] border-gray-300 rounded focus:ring-[#A82228]"
                    required
                  />
                  <label htmlFor="notRobot" className="text-sm text-black">
                    I confirm the school's interest in becoming a YoungVox School Chapter (Free of Cost).
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A82228] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#8a1c22] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner Image */}
      <section className="w-full relative">
        <img
          src={wingLBanner}
          alt="YoungVox students"
          className="w-full h-auto object-cover"
        />

        {/* Crack/Tear Design at Bottom */}
        <div className="absolute bottom-0 left-0 right-0" style={{ transform: 'translateY(40%)', zIndex: 10 }}>
          <img
            src={vectorImage}
            alt="Crack design"
            className="w-full h-auto object-cover"
            style={{ display: 'block', width: '100%' }}
          />
        </div>
      </section>

      {/* Footer Section with proper z-index */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Footer />
      </div>
    </div>
  );
};

export default WingsPage;


