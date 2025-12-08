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
      <section ref={heroRef} className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
            {/* Left - Title */}
            <div className={`${heroVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
                YOUNGVOX - WINGS & LEADERSHIP
              </h1>
            </div>
            
            {/* Right - Description */}
            <div className={`space-y-4 ${heroVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                YoungVox nurtures student leadership through a structured School Chapter model powered by four dynamic wings. Each wing is led by students, supported by a core leadership team and teacher mentors, ensuring meaningful engagement, collaboration, and real-world learning.
              </p>
              <button className="bg-[#A82228] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-[#8a1c22] transition-all hover-lift">
                Join Now
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`w-full ${heroVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
            <img
              src={wingBanner}
              alt="YoungVox students"
              className="w-full h-auto object-cover rounded-lg hover-scale transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Leadership Structure Section */}
      <section ref={leadershipRef} className="py-12 sm:py-16 lg:py-24 bg-[#FFFBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${leadershipVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Leadership Structure
            </h2>
            <p className="text-lg sm:text-xl text-black">
              A collaborative model where students lead, learn, and grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left - Teacher Mentors (Square Card with decreased width) */}
            <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-visible min-h-[280px] max-w-md mx-auto lg:mx-0 ml-8 lg:ml-12 ${leadershipVisible ? 'animate-fade-in-left animate-delay-200' : 'opacity-0'}`}>
              <div className="flex flex-col items-center h-full justify-center">
                {/* Icon - Container.png without red circle */}
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img src={containerIcon} alt="Teacher Mentors" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-3">Teacher Mentors (2)</h3>
                <p className="text-base text-black text-center">
                  Two teachers guide, support, and ensure smooth functioning of student-led initiatives.
                </p>
              </div>
              {/* Red horizontal line below - increased thickness */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#A82228] rounded-b-full" style={{ transform: 'translateY(50%)' }}></div>
            </div>

            {/* Right - Student Leadership */}
            <div className={`space-y-6 -ml-8 lg:-ml-12 ${leadershipVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              {/* Top Row - Three smaller square cards */}
              <div className="grid grid-cols-3 gap-4">
                {/* Chapter Chief */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm text-center relative overflow-visible">
                  <div className="w-14 h-14 bg-[#A82228] rounded-full mx-auto mb-4 flex items-center justify-center p-3">
                    <img src={maskGroupIcon} alt="Chapter Chief" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-base font-bold text-black">Chapter Chief</h4>
                  {/* Red horizontal line below - increased thickness */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#A82228] rounded-b-full" style={{ transform: 'translateY(50%)' }}></div>
                </div>
                
                {/* Treasurer - Swapped icon */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm text-center relative overflow-visible">
                  <div className="w-14 h-14 bg-[#A82228] rounded-full mx-auto mb-4 flex items-center justify-center p-3">
                    <img src={maskGroup2Icon} alt="Treasurer" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-base font-bold text-black">Treasurer</h4>
                  {/* Red horizontal line below - increased thickness */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#A82228] rounded-b-full" style={{ transform: 'translateY(50%)' }}></div>
                </div>
                
                {/* Secretary - Swapped icon */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm text-center relative overflow-visible">
                  <div className="w-14 h-14 bg-[#A82228] rounded-full mx-auto mb-4 flex items-center justify-center p-3">
                    <img src={maskGroup1Icon} alt="Secretary" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-base font-bold text-black">Secretary</h4>
                  {/* Red horizontal line below - increased thickness */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#A82228] rounded-b-full" style={{ transform: 'translateY(50%)' }}></div>
                </div>
              </div>
              
              {/* Bottom - 4 Wing Leaders Card (Horizontal Layout) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-visible">
                {/* Horizontal layout: Icon on left, text on right */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <img src={container01Icon} alt="4 Wing Leaders" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">4 Wing Leaders</h3>
                    <p className="text-base text-black">
                      Each wing led by a Wing Leader with an active student team passionate about that domain.
                    </p>
                  </div>
                </div>
                {/* Red horizontal line below - increased thickness */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#A82228] rounded-b-full" style={{ transform: 'translateY(50%)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic & Career Guidance Wing */}
      <section ref={wing1Ref} className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className={`space-y-4 ${wing1Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              {/* Light pink tag */}
              <div className="inline-block bg-pink-200 rounded-lg px-4 py-2 mb-4">
                <span className="text-black font-medium">Student to Professional</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                Academic & Career<br />Guidance Wing
              </h2>
              <p className="text-sm sm:text-base text-[#A82228] italic">|SDG 4 - Quality Education|</p>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                Helps students discover academic interests, plan career paths, and access learning resources.
              </p>
            </div>
            
            {/* Right - Image */}
            <div className={`${wing1Visible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <img
                src={wing1Image}
                alt="Academic & Career Guidance"
                className="w-full h-auto rounded-lg shadow-lg hover-scale transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Wellbeing Wing */}
      <section ref={wing2Ref} className="py-12 sm:py-16 lg:py-24 bg-[#FFFBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className={`${wing2Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <img
                src={wing2Image}
                alt="Student Wellbeing"
                className="w-full h-auto rounded-lg shadow-lg hover-scale transition-transform duration-300"
              />
            </div>
            
            {/* Right - Content */}
            <div className={`space-y-4 ${wing2Visible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              {/* Light pink tag */}
              <div className="inline-block bg-pink-200 rounded-lg px-4 py-2 mb-4">
                <span className="text-black font-medium">Digital Detox</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                Student Wellbeing Wing
              </h2>
              <p className="text-sm sm:text-base text-[#A82228] italic">|SDG 3 - Good Health & Well-being|</p>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                Promotes emotional, mental, and physical wellbeing through psychoeducation, awareness sessions, and healthy habit-building activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Child Rights & Social Justice Wing */}
      <section ref={wing3Ref} className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className={`space-y-4 ${wing3Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              {/* Light pink tag */}
              <div className="inline-block bg-pink-200 rounded-lg px-4 py-2 mb-4">
                <span className="text-black font-medium">Speak Up</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                Child Rights & Social Justice Wing
              </h2>
              <p className="text-sm sm:text-base text-[#A82228] italic">| SDG 16 – Peace, Justice & Strong Institutions|</p>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                Builds awareness on children's rights, protection, equality, safety, and safety through campaigns and forums.
              </p>
            </div>
            
            {/* Right - Image */}
            <div className={`${wing3Visible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <img
                src={wing3Image}
                alt="Child Rights & Social Justice"
                className="w-full h-auto rounded-lg shadow-lg hover-scale transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Outreach & Service Wing */}
      <section ref={wing4Ref} className="py-12 sm:py-16 lg:py-24 bg-[#FFFBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className={`${wing4Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <img
                src={wing4Image}
                alt="Community Outreach & Service"
                className="w-full h-auto rounded-lg shadow-lg hover-scale transition-transform duration-300"
              />
            </div>
            
            {/* Right - Content */}
            <div className={`space-y-4 ${wing4Visible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              {/* Light pink tag */}
              <div className="inline-block bg-pink-200 rounded-lg px-4 py-2 mb-4">
                <span className="text-black font-medium">Blue Earth, Clean Earth</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                Community Outreach & Service Wing
              </h2>
              <p className="text-sm sm:text-base text-[#A82228] italic">| SDG 14 - Life Below Water|</p>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                Leads eco-friendly initiatives, environmental awareness drives, and community service to promote sustainability and civic responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section ref={howItWorksRef} className="py-12 sm:py-16 lg:py-24 bg-[#FFFBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className={`space-y-6 ${howItWorksVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                How it works
              </h2>
              
              {/* Step Indicators with Horizontal Line */}
              <div className="relative mb-6">
                {/* Horizontal Gray Line - positioned between numbers and dots */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
                
                {/* Step Numbers and Dots */}
                <div className="relative flex items-center justify-between w-full">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex flex-col items-center relative z-10 flex-1">
                      {/* Number - Plain text, not in circle */}
                      <div className={`text-lg mb-3 transition-all duration-300 ${
                        currentStep === step 
                          ? 'font-bold text-black scale-110' 
                          : 'font-normal text-gray-500'
                      }`}>
                        {String(step).padStart(2, '0')}
                      </div>
                      {/* Dot Below */}
                      <div className={`w-3 h-3 rounded-full mt-2 transition-all duration-300 ${
                        currentStep === step ? 'bg-[#A82228] scale-125' : 'bg-gray-400'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Descriptive Text - Below progress indicator */}
              <p className="text-base sm:text-lg text-black leading-relaxed mb-6">
                Student-led leadership structure - Every activity is planned, and executed by student leaders from each wing.
              </p>
              
              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 active:scale-95"
                  aria-label="Previous step"
                >
                  <svg className="w-5 h-5 text-gray-700 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  className="w-10 h-10 rounded-full bg-[#A82228] flex items-center justify-center hover:bg-[#8a1c22] transition-all hover:scale-110 active:scale-95"
                  aria-label="Next step"
                >
                  <svg className="w-5 h-5 text-white transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
      <section ref={formRef} className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Content */}
            <div className={`space-y-6 ${formVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                Launch a YoungVox Chapter
              </h2>
              <p className="text-base sm:text-lg text-black leading-relaxed">
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
            <div className={`bg-[#FFFBF2] rounded-lg p-6 sm:p-8 shadow-sm hover-lift transition-all ${formVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
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
                    className="w-full px-4 py-3 bg-[#FFFBF2] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="relative">
                  <select
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FFFBF2] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent appearance-none pr-10"
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
                    className="w-full px-4 py-3 bg-[#FFFBF2] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-[#FFFBF2] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-[#FFFBF2] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-[#FFFBF2] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent resize-none"
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


