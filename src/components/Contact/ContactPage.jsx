import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import contactImage from '../../assets/contact.png';
import vector1Image from '../../assets/Vector (1).png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx9tye5z3YOIA1hBa7Up-PKAypxfUfqc1sjVxp1_DZ5appzR5fc14Elfors-yomwvuPlA/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");

        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          location: '',
          subject: '',
          message: ''
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };


  const [touchRef, touchVisible] = useScrollAnimation({ once: true });
  const [bannerRef, bannerVisible] = useScrollAnimation({ once: true });
  const [imageRef, imageVisible] = useScrollAnimation({ once: true });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Connect. Collaborate. Create Future Leaders. Section - Red Banner */}
      <section ref={bannerRef} className="bg-[#A82228] py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-[24px] leading-tight lg:text-[42px] font-extrabold text-white text-center mb-8 sm:mb-12 ${bannerVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            Connect. Collaborate. Create Future Leaders.
          </h2>

          {/* Contact Cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto ${bannerVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            {/* Phone Number Card */}
            <div className="bg-[#F5F5DC] rounded-lg p-4 sm:p-6 border border-[#A82228] flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-6 bg-[#A82228] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs sm:text-xs font-bold text-black uppercase mb-1">Phone Number</h3>
                <p className="text-sm sm:text-sm text-black">+91 93818-11111</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#F5F5DC] rounded-lg p-4 sm:p-6 border border-[#A82228] flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-6 bg-[#A82228] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs sm:text-xs font-bold text-black uppercase mb-1">Email</h3>
                <p className="text-sm sm:text-sm text-black">Info@youngvox.com</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#F5F5DC] rounded-lg p-4 sm:p-6 border border-[#A82228] flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-6 bg-[#A82228] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs sm:text-xs font-bold text-black uppercase mb-1">Address</h3>
                <p className="text-sm sm:text-sm text-black leading-snug">1/40H , EJR Enclave , Mount Poonamallee Road , St. Thomas Mt , Chennai - 600016</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vector 1 Image at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[20%] sm:translate-y-[35%]" style={{ zIndex: 8 }}>
          <img
            src={vector1Image}
            alt="Vector decoration"
            className="w-full h-auto object-cover"
            style={{ display: 'block', width: '100%' }}
          />
        </div>

        {/* Second Vector 1 Image below the first one */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[43%] sm:translate-y-[57%]" style={{ zIndex: 9 }}>
          <img
            src={vector1Image}
            alt="Vector decoration"
            className="w-full h-auto object-cover"
            style={{ display: 'block', width: '100%' }}
          />
        </div>
      </section>

      {/* Get in Touch Section */}
      <section ref={touchRef} className="py-12 sm:py-16 lg:py-24 bg-white border border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Panel */}
            <div className={`space-y-6 ${touchVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h1 className="text-[24px] leading-tight lg:text-[42px] font-extrabold text-black">
                <span className="block">Get in Touch with<br />YoungVox</span>
                <span className="block text-[24px] lg:text-[54px]"></span>
              </h1>
              <p className="text-base lg:text-lg text-black text-justify leading-relaxed">
                Ready to collaborate, contribute, or learn more about our student-led leadership initiatives?
              </p>
              <p className="text-base lg:text-lg text-black text-justify leading-relaxed">
                YoungVox welcomes educators, schools, senior advisors, NGOs, corporates, mission-driven brands, and youth advocates to join our movement. Let's work together to empower students with real-world skills, meaningful opportunities, and impactful leadership pathways.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.instagram.com/young_vox_?igsh=YTM5NWthbjU5bGIw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm"
                  aria-label="Instagram"
                >
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/zhSC2v7vYjZ5ifAr/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm"
                  aria-label="Facebook"
                >
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/109957290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.07 107 0 82.93 0 53.71 0 24.5 24.07.42 53.84.42 83.6.42 107.7 24.5 107.7 53.71c0 29.22-24.1 53.29-53.86 53.29zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.6-2.9 13.4-2.9 21.2V448h-92.68s1.2-242.1 0-266.1h92.68v37.7c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.4-46 83.7-46 61.1 0 107.1 39.8 107.1 125.4V448z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Panel - Contact Form */}
            <div className={`bg-white ${touchVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <h2 className="text-[24px] lg:text-[36px] font-bold text-black mb-6">
                Write to the YoungVox Team
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Row: Full Name and Email side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Second Row: Phone Number and Location side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Third Row: Subject full width */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>

                {/* Fourth Row: Your message textarea full width */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="bg-[#A82228] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#8B0000] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image / Banner Section */}
      <section ref={imageRef} className={`w-full relative ${imageVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ marginTop: '-1px', zIndex: 1 }}>
        <img
          src={contactImage}
          alt="YoungVox students"
          className="w-full h-auto object-cover"
        />
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
