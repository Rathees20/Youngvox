import React, { useEffect, useState } from 'react';
import Header from '../Header';
import NewsletterSection from '../Newsletter';
import Footer from '../Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import chapterBanner from '../../assets/chapter.png';
import schoolIcon from '../../assets/icons/schools.png';
import frameImage from '../../assets/Frame.png';
import rightArrowIcon from '../../assets/icons/right arrow.png';

const ChaptersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const schools = [
    {
      id: 1,
      name: 'Vaels International School',
      chapterId: 'CHN001',
      district: 'Chennai',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
    {
      id: 2,
      name: 'Islamiah Matriculation Higher Secondary School',
      chapterId: 'RAM002',
      district: 'Ramanathapuram',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
    {
      id: 3,
      name: 'Government Boys High School',
      chapterId: 'CHN003',
      district: 'Chennai',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
    {
      id: 4,
      name: 'St. Gabriel Higher Secondary School',
      chapterId: 'CHN004',
      district: 'Chennai',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
    {
      id: 5,
      name: 'Nehru High School',
      chapterId: 'CHN005',
      district: 'Chennai',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
    {
      id: 6,
      name: 'Velammal Vidyalaya, Poonamallee',
      chapterId: 'CHN006',
      district: 'Chennai',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
    {
      id: 7,
      name: 'Velammal Vidyalaya, Paruthipattu',
      chapterId: 'CHN007',
      district: 'Chennai',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
    {
      id: 8,
      name: 'Velammal Vidyalaya Annexure, Melayanambakkam',
      chapterId: 'CHN008',
      district: 'Chennai',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
    {
      id: 9,
      name: 'Velammal Vidyalaya, Melayanambakkam',
      chapterId: 'CHN009',
      district: 'Chennai',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
    {
      id: 10,
      name: 'Velammal Vidyalaya, Alapakkam',
      chapterId: 'CHN010',
      district: 'Chennai',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
    {
      id: 11,
      name: 'Zigma Matriculation Higher Secondary School',
      chapterId: 'CHN011',
      district: 'Chennai',
      state: 'Tamil Nadu',
      createdFrom: '25-01-2026',
    },
  ];

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      normalizedSearchTerm.length === 0 ||
      school.name.toLowerCase().includes(normalizedSearchTerm) ||
      school.chapterId.toLowerCase().includes(normalizedSearchTerm);

    const matchesState = selectedState.length === 0 || school.state === selectedState;
    const matchesDistrict = selectedDistrict.length === 0 || school.district === selectedDistrict;

    return matchesSearch && matchesState && matchesDistrict;
  });

  const states = Array.from(new Set(schools.map((s) => s.state))).sort((a, b) => a.localeCompare(b));
  const districts = Array.from(
    new Set(
      (selectedState ? schools.filter((s) => s.state === selectedState) : schools).map((s) => s.district)
    )
  ).sort((a, b) => a.localeCompare(b));

  const cardsPerPage = 9; // 3 rows × 3 columns
  const totalPages = Math.max(1, Math.ceil(filteredSchools.length / cardsPerPage));
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedSchools = filteredSchools.slice(startIndex, endIndex);
  const [heroRef, heroVisible] = useScrollAnimation({ once: true });
  const [searchRef, searchVisible] = useScrollAnimation({ once: true });
  const [resultsRef, resultsVisible] = useScrollAnimation({ once: true });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedState, selectedDistrict]);

  useEffect(() => {
    if (selectedDistrict && !districts.includes(selectedDistrict)) {
      setSelectedDistrict('');
    }
  }, [districts, selectedDistrict]);

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
        <div
          className={`absolute inset-0 flex items-center z-20 ${heroVisible ? 'animate-fade-in-right' : 'opacity-0'
            }`}
        >
          <div
            className="
      ml-auto
      mr-[6%]
      max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
      text-left
      space-y-4 sm:space-y-5 md:space-y-6
    "
          >

            <h1 className="text-[24px] lg:text-[42px] font-extrabold text-white leading-tight drop-shadow-lg">
              YoungVox School Chapters
            </h1>
            <p className="text-base lg:text-lg text-white leading-relaxed drop-shadow-md">
              Join our network of schools committed to empowering young leaders. Discover how your school can become part of the YoungVox movement.
            </p>
            <div className="pt-2 sm:pt-3 md:pt-4">

              <button className="bg-[#A82228] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl relative z-30">
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
          <h2 className={`text-[15px] sm:text-[20px] md:text-[25px] lg:text-[26px] font-bold text-black mb-6 sm:mb-8 ${resultsVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            Showing Result {filteredSchools.length === 0 ? 0 : startIndex + 1}-{Math.min(endIndex, filteredSchools.length)} of {filteredSchools.length}
          </h2>

          {/* School Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
            {displayedSchools.map((school, index) => {
              const isPinkBox = index % 2 !== 0; // Pink boxes for odd indices
              return (
                <div
                  key={school.id}
                  className={`rounded-sm p-4 sm:p-4 relative hover-lift transition-all overflow-hidden ${isPinkBox ? 'bg-pink-50' : 'bg-white border border-gray-200'
                    } ${resultsVisible ? 'animate-scale-in' : 'opacity-100 sm:opacity-0'} w-full min-h-[280px] h-auto sm:h-[300px]`}
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
                  <div className="relative z-10 w-full h-full flex flex-col">
                    {/* School Icon and Name Header */}
                    <div className="mb-2 flex-shrink-0">
                      <div className="flex items-start gap-2">
                        <img
                          src={schoolIcon}
                          alt="School icon"
                          className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0 mt-0.5"
                        />
                        <h3 className="text-base sm:text-lg font-bold text-black leading-tight mt-3">
                          {school.name}
                        </h3>
                      </div>
                    </div>

                    {/* Horizontal Line */}
                    <hr className="border-gray-300 mb-2 flex-shrink-0" />

                    {/* Details */}
                    <div className="space-y-2 flex-1 min-h-0">
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600 font-normal mb-1">Chapter ID:</p>
                        <p className="text-xs sm:text-sm font-bold text-black">{school.chapterId}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600 font-normal mb-1">District:</p>
                        <p className="text-xs sm:text-sm font-bold text-black">{school.district}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600 font-normal mb-1">State:</p>
                        <p className="text-xs sm:text-sm font-bold text-black">{school.state}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600 font-normal mb-1">Created From:</p>
                        <p className="text-xs sm:text-sm font-bold text-black">{school.createdFrom}</p>
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
                    className={`${isActive
                      ? 'w-10 h-10 rounded-full bg-[#A82228] text-white shadow-lg hover:shadow-xl'
                      : 'w-10 h-10 rounded-full text-[#A82228]'
                      } flex items-center justify-center transition-colors font-semibold hover:bg-[#8a1c22] hover:text-white`}
                  >
                    {page}
                  </button>
                );
              });
            })()}

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full bg-[#A82228] text-white flex items-center justify-center hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#A82228] font-semibold"
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

