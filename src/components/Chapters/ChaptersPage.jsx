import React, { useState } from 'react';
import Header from '../Header';
import NewsletterSection from '../Newsletter';
import Footer from '../Footer';
import joinBanner from '../../assets/join bannner.png';

const ChaptersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Sample school data
  const schools = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: 'Delhi Public School',
    category: 'K-12',
    city: 'Chennai',
    state: 'Tamil Nadu',
    availableSlots: '1000+ Slots'
  }));

  const states = ['Tamil Nadu', 'Karnataka', 'Maharashtra', 'Delhi', 'Gujarat'];
  const cities = ['Chennai', 'Bangalore', 'Mumbai', 'Delhi', 'Ahmedabad'];

  const totalPages = Math.ceil(schools.length / 12);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <div className="absolute inset-0">
          <img
            src={joinBanner}
            alt="Young boy with paper airplane"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Overlay */}
        <div className="absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 p-6 sm:p-8 lg:p-10 max-w-md lg:max-w-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
            YoungVox School Chapters
          </h1>
          <p className="text-sm sm:text-base text-black mb-6 leading-relaxed">
            Join our network of schools committed to empowering young leaders. Discover how your school can become part of the YoungVox movement.
          </p>
          <button className="bg-[#A82228] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#8a1c22] transition-colors">
            Join Now
          </button>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by School Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
              />
            </div>

            {/* State Dropdown */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            {/* City Dropdown */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* School Chapters Listing */}
      <section className="py-6 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8">
            Showing 1000+ Results
          </h2>

          {/* School Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {schools.map((school) => (
              <div key={school.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow relative">
                {/* Red Triangular Logo */}
                <div className="absolute top-3 left-3">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="absolute">
                    <polygon points="0,0 32,0 0,32" fill="#A82228" />
                  </svg>
                  <svg className="absolute top-1.5 left-1.5 w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                    {school.name}
                  </h3>
                  
                  {/* Details with Beige Background */}
                  <div className="bg-[#FFFBF2] rounded-md p-3 space-y-2">
                    <p className="text-sm text-black">
                      <span className="font-semibold">Category:</span> {school.category}
                    </p>
                    <p className="text-sm text-black">
                      <span className="font-semibold">City:</span> {school.city}
                    </p>
                    <p className="text-sm text-black">
                      <span className="font-semibold">State:</span> {school.state}
                    </p>
                    <p className="text-sm text-black">
                      <span className="font-semibold">Available:</span> {school.availableSlots}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-[#A82228] flex items-center justify-center hover:bg-[#A82228] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full border ${
                  currentPage === page
                    ? 'bg-[#A82228] border-[#A82228] text-white'
                    : 'border-[#A82228] text-[#A82228] hover:bg-[#A82228] hover:text-white'
                } transition-colors`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-[#A82228] flex items-center justify-center hover:bg-[#A82228] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default ChaptersPage;

