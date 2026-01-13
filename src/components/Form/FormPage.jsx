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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbztGvAOZbqJ60e3yHDaHmFUvRjIkfyKaQv7gvFnq9HKKBwn86_N9sUzOqSQLDJmysHdXg/exec",
        {
          method: "POST",
          
          body: JSON.stringify({
            ...formData,
            source: "school_form" // 👈 identify form
          }),
        }
      );
  
      const result = await response.json();
  
      if (result.success) {
        alert("Thank you! We will contact you soon.");
  
        setFormData({
          name: '',
          designation: '',
          email: '',
          phoneNumber: '',
          location: '',
          schoolName: '',
          message: '',
          confirmInterest: false
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };
  

  const designations = [
    'Principal',
    'Vice Principal',
    'Teacher',
    'Administrator',
    'Coordinator',
    'Other'
  ];

  const [contentRef, contentVisible] = useScrollAnimation({ once: true });

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
        </div>
      </section>

      {/* Form Section */}
      <section ref={contentRef} className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Panel - Content */}
            <div className={`space-y-6 ${contentVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h1 className="text-[34px] leading-tight lg:text-[32px] font-extrabold text-black">
                Bring YoungVox to Your Campus. Inspire Changemakers.
              </h1>
              <p className="text-lg text-justify text-black leading-relaxed">
                As a YoungVox school chapter, your students gain the opportunity to build leadership skills, participate in engaging activities and campaigns within their own school, and take part in community initiatives that create real, lasting impact.
              </p>
              <p className="text-lg text-black leading-relaxed">
                And the best part? It's completely <b>free of cost</b>.
              </p>
              <p className="text-lg text-justify text-black leading-relaxed">
                By joining YoungVox, your school becomes part of a national movement nurturing confident, responsible young changemakers.
              </p>
              
            </div>

            {/* Right Panel - Form */}
            <div className={`bg-pink-50 rounded-lg p-6 sm:p-8 shadow-sm hover-lift transition-all ${contentVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <h2 className="text-[30px] lg:text-[36px] font-bold text-black mb-6">
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
                    className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent ${formData.designation ? 'text-black' : 'text-gray-400'}`}
                    required
                  >
                    <option value="" className="text-gray-400">Designation</option>
                    {designations.map((designation) => (
                      <option key={designation} value={designation} className="text-black">
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
          className="w-full h-auto object-contain"
          style={{ display: 'block', maxWidth: '100%' }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default FormPage;

