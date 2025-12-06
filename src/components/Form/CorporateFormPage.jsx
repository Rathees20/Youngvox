import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import vectorImage from '../../assets/Vector.png';
import joinBanner from '../../assets/join bannner.png';

const CorporateFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
    country: '',
    subject: 'CSR Partnership',
    organizationName: '',
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
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Panel - Content */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                CSR for Change. Empower the Next Generation With YoungVox.
              </h1>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                Companies can partner with YoungVox by supporting initiatives, campaigns, or leadership programs that align with their CSR priorities. From education and skill-building to civic engagement and environmental awareness, your contribution helps strengthen youth leadership, empower student action, and build the next generation of responsible changemakers.
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
            <div className="bg-[#FFFBF2] rounded-lg p-6 sm:p-8 shadow-sm">
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
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject - CSR Partnership"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="organizationName"
                    placeholder="Organization Name"
                    value={formData.organizationName}
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
                    I confirm our intent to contribute to YoungVox programs and campaigns.
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
          className="w-full h-auto object-contain"
          style={{ display: 'block', maxWidth: '100%' }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default CorporateFormPage;

