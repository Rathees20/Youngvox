import React, { useState } from 'react';
import Header from '../Header';
import NewsletterSection from '../Newsletter';
import Footer from '../Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import chapterBanner from '../../assets/chapter.png';
import maskGroupIcon from '../../assets/icons/Mask group.png';
import frameImage from '../../assets/Frame.png';
import rightArrowIcon from '../../assets/icons/right arrow.png';

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
    createdFrom: '12/11/2025'
  }));

  const states = ['Tamil Nadu', 'Karnataka', 'Maharashtra', 'Delhi', 'Gujarat'];
  const districts = ['Chennai', 'Bangalore', 'Mumbai', 'Delhi', 'Ahmedabad'];

  const totalPages = Math.ceil(schools.length / 12);
  const [heroRef, heroVisible] = useScrollAnimation({ once: true });
  const [searchRef, searchVisible] = useScrollAnimation({ once: true });
  const [resultsRef, resultsVisible] = useScrollAnimation({ once: true });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full overflow-hidden">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={chapterBanner}
            alt="Chapter banner"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Text Overlay */}
        <div className={`absolute inset-0 flex items-center justify-end px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 ${heroVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
          <div className="w-full sm:w-auto max-w-full sm:max-w-md lg:max-w-lg sm:ml-auto">
            <div className="text-left sm:text-right">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 drop-shadow-sm">
                YoungVox School Chapters
              </h1>
              <p className="text-sm sm:text-base text-black mb-4 sm:mb-6 leading-relaxed drop-shadow-sm">
                Join our network of schools committed to empowering young leaders. Discover how your school can become part of the YoungVox movement.
              </p>
              <button className="bg-[#A82228] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#8a1c22] transition-colors w-auto text-sm sm:text-base">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section ref={searchRef} className="py-6 sm:py-8 bg-white">
        <div className={`max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 ${searchVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
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
      <section ref={resultsRef} className="py-6 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 ${resultsVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            Showing Result 1-30
          </h2>

          {/* School Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {schools.map((school, index) => {
              const isPinkBox = index % 2 !== 0; // Pink boxes for odd indices
              return (
                <div 
                  key={school.id} 
                  className={`rounded-sm p-4 sm:p-4 relative hover-lift transition-all overflow-hidden ${
                    isPinkBox ? 'bg-pink-50' : 'bg-white border border-gray-200'
                  } ${resultsVisible ? 'animate-scale-in' : 'opacity-0'} w-full h-[300px] sm:h-[300px]`}
                  style={{ 
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {/* Frame Image for Pink Boxes */}
                  {isPinkBox && (
                    <img
                      src={frameImage}
                      alt="Frame"
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                      style={{ opacity: 0.4 }}
                    />
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* School Icon and Name Header */}
                    <div className="mb-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <img 
                          src={maskGroupIcon} 
                          alt="School icon" 
                          className="w-5 h-5 object-contain flex-shrink-0"
                        />
                        <span className="text-[10px] text-gray-600 font-normal">Name</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex-shrink-0"></div>
                        <h3 className="text-sm font-bold text-black leading-tight">
                          {school.name}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Horizontal Line */}
                    <hr className="border-gray-300 mb-2" />
                    
                    {/* Details */}
                    <div className="space-y-1.5 flex-1">
                      <div>
                        <p className="text-[10px] text-gray-600 font-normal mb-0.5">Chapter ID:</p>
                        <p className="text-[10px] font-bold text-black">{school.chapterId}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-600 font-normal mb-0.5">District:</p>
                        <p className="text-[10px] font-bold text-black">{school.district}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-600 font-normal mb-0.5">State:</p>
                        <p className="text-[10px] font-bold text-black">{school.state}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-600 font-normal mb-0.5">Created From:</p>
                        <p className="text-[10px] font-bold text-black">{school.createdFrom}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
              className="w-10 h-10 rounded-full bg-[#A82228] text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img 
                src={rightArrowIcon} 
                alt="Next page" 
                className="w-5 h-5 object-contain"
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(100%)'
                }}
              />
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

