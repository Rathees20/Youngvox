import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import vectorImage from '../../assets/Vector.png';
import joinBanner from '../../assets/join bannner.png';

const PartnerFormPage = () => {
  const [contentRef, contentVisible] = useScrollAnimation({ once: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
    organisation: '',
    designation: '',
    areaOfInterest: '',
    message: '',
    confirmInterest: false
  });

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

  // 8 Wings options
  const wings = [
    'Education & Learning',
    'Health & Wellbeing',
    'Environment & Sustainability',
    'Civic Engagement',
    'Arts & Culture',
    'Technology & Innovation',
    'Social Justice',
    'Community Development'
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Banner Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <div className="absolute inset-0">
          <img
            src={joinBanner}
            alt="Join YoungVox Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Form Section */}
      <section ref={contentRef} className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Panel - Content */}
            <div className={`space-y-6 ${contentVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                Your Partnership. Their Leadership. Lasting Change.
              </h1>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                Are you an NGO, school, or community organization working with youth on the ground? Partner with YoungVox to combine resources, share expertise, and amplify the impact of youth campaigns and leadership programs. Every partnership begins with a conversation. Let's explore how we can work together to empower young leaders and drive meaningful change.
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

            {/* Right Panel - Form */}
            <div className={`bg-[#FFFBF2] rounded-lg p-6 sm:p-8 shadow-sm hover-lift transition-all ${contentVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Write to Us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="organisation"
                    placeholder="Organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <select
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  >
                    <option value="">Area of Interest / Collaboration (Tick all that apply)</option>
                    {wings.map((wing) => (
                      <option key={wing} value={wing}>
                        {wing}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Message / Proposal"
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
                    name="confirmInterest"
                    id="confirmInterest"
                    checked={formData.confirmInterest}
                    onChange={handleChange}
                    className="mt-1 mr-2 w-4 h-4 text-[#A82228] border-gray-300 rounded focus:ring-[#A82228]"
                  />
                  <label htmlFor="confirmInterest" className="text-sm text-black">
                    I confirm our organisation's interest in partnering with YoungVox to empower young leaders.
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

      <div className="w-full">
        <img
          src={vectorImage}
          alt="Wavy separator"
          className="w-full h-auto object-cover"
          style={{ display: 'block' }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default PartnerFormPage;

