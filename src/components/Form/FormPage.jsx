import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import vectorImage from '../../assets/Vector.png';
import joinBanner from '../../assets/join bannner.png';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    email: '',
    phoneNumber: '',
    location: '',
    schoolName: '',
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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const designations = [
    'Principal',
    'Vice Principal',
    'Teacher',
    'Administrator',
    'Coordinator',
    'Other'
  ];

  const [bannerRef, bannerVisible] = useScrollAnimation({ once: true });
  const [contentRef, contentVisible] = useScrollAnimation({ once: true });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Banner Section */}
      <section ref={bannerRef} className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
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
                Bring YoungVox to Your Campus. Inspire Changemakers.
              </h1>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                As a YoungVox school chapter, your students gain the opportunity to build leadership skills, participate in engaging activities and campaigns within their own school, and take part in community initiatives that create real, lasting impact.
              </p>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                And the best part? It's completely free of cost.
              </p>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                By joining YoungVox, your school becomes part of a national movement nurturing confident, responsible young changemakers—one student at a time.
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
                  <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  >
                    <option value="">Designation</option>
                    {designations.map((designation) => (
                      <option key={designation} value={designation}>
                        {designation}
                      </option>
                    ))}
                  </select>
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
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="School Name"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
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
                    name="confirmInterest"
                    id="confirmInterest"
                    checked={formData.confirmInterest}
                    onChange={handleChange}
                    className="mt-1 mr-2 w-4 h-4 text-[#A82228] border-gray-300 rounded focus:ring-[#A82228]"
                  />
                  <label htmlFor="confirmInterest" className="text-sm text-black">
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

      {/* Wavy Red Separator */}
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

export default FormPage;

