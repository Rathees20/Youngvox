import React, { useState } from 'react';
import Header from '../Header';
import NewsletterSection from '../Newsletter';
import Footer from '../Footer';
import chapterBanner from '../../assets/chapter.png';
import maskGroupIcon from '../../assets/icons/Mask group.png';

const ChaptersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Sample school data
  const schools = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: 'Delhi Public School',
    chapterId: '127879317',
    district: 'Chennai',
    state: 'Tamil Nadu',
    createdFrom: '12/11/20205'
  }));

  const states = ['Tamil Nadu', 'Karnataka', 'Maharashtra', 'Delhi', 'Gujarat'];
  const districts = ['Chennai', 'Bangalore', 'Mumbai', 'Delhi', 'Ahmedabad'];

  const totalPages = Math.ceil(schools.length / 12);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <div className="absolute inset-0">
          <img
            src={chapterBanner}
            alt="Chapter banner"
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
                placeholder="Search by Name or ID..."
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

            {/* District Dropdown */}
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent"
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
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
            Showing Result 1-30
          </h2>

          {/* School Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {schools.map((school, index) => (
              <div 
                key={school.id} 
                className={`border border-gray-200 rounded-sm p-4 sm:p-5 relative ${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#FFFBF2]'
                }`}
              >
                {/* School Icon */}
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src={maskGroupIcon} 
                    alt="School icon" 
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-600">Name</span>
                </div>

                {/* School Name */}
                <h3 className="text-base sm:text-lg font-bold text-black mb-2">
                  {school.name}
                </h3>
                
                {/* Horizontal Line */}
                <hr className="border-gray-300 mb-3" />
                
                {/* Details */}
                <div className="space-y-1.5">
                  <p className="text-xs sm:text-sm text-black">
                    <span className="font-semibold">Chapter ID:</span> <span className="font-bold">{school.chapterId}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-black">
                    <span className="font-semibold">District:</span> <span className="font-bold">{school.district}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-black">
                    <span className="font-semibold">State:</span> <span className="font-bold">{school.state}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-black">
                    <span className="font-semibold">Created From:</span> <span className="font-bold">{school.createdFrom}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            {(() => {
              const pages = [];
              const showPages = 4; // Show first 4 pages
              
              // Add first pages (1, 2, 3, 4)
              for (let i = 1; i <= Math.min(showPages, totalPages); i++) {
                pages.push(i);
              }
              
              // Add ellipsis if there are more pages
              if (totalPages > showPages + 1) {
                pages.push('ellipsis');
              }
              
              // Add last page
              if (totalPages > showPages) {
                pages.push(totalPages);
              }
              
              return pages.map((item, index) => {
                if (item === 'ellipsis') {
                  return (
                    <span key={`ellipsis-${index}`} className="text-[#A82228] px-1">
                      ...
                    </span>
                  );
                }
                
                const page = item;
                const isActive = currentPage === page;
                
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`${
                      isActive
                        ? 'w-10 h-10 rounded-full bg-[#A82228] text-white'
                        : 'text-[#A82228] hover:opacity-80'
                    } flex items-center justify-center transition-colors font-medium`}
                  >
                    {page}
                  </button>
                );
              });
            })()}

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full bg-[#A82228] text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              &gt;
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

