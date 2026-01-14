import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import youngvoxLogo from '../assets/Youngvox logo.png';
import instagramIcon from '../assets/icons/instagram.png';
import facebookIcon from '../assets/icons/facebook.png';

// LinkedIn SVG Component
const LinkedInIcon = ({ className = "w-6 h-6 text-blue-600" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.07 107 0 82.93 0 53.71 0 24.5 24.07.42 53.84.42 83.6.42 107.7 24.5 107.7 53.71c0 29.22-24.1 53.29-53.86 53.29zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.6-2.9 13.4-2.9 21.2V448h-92.68s1.2-242.1 0-266.1h92.68v37.7c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.4-46 83.7-46 61.1 0 107.1 39.8 107.1 125.4V448z" />
  </svg>
);

const Footer = () => {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const handleChaptersClick = (e) => {
    e.preventDefault();
    setIsComingSoonOpen(true);
  };

  const closeComingSoon = () => {
    setIsComingSoonOpen(false);
  };

  return (
    <footer className="bg-white pt-8 md:pt-16 pb-6 font-sans text-[#333]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20">

          {/* LEFT CONTENT */}
          <div className="max-w-sm flex flex-col items-start text-left mx-auto md:mx-0">
            <img src={youngvoxLogo} alt="YoungVox" className="h-10 md:h-14 mb-4 md:mb-6" />
            <p className="text-sm md:text-base text-black leading-relaxed">
              YoungVox is a national youth leadership initiative
              dedicated to nurturing confident and socially
              responsible young leaders across India.
            </p>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-col items-start md:pt-20">
            <h4 className="text-base md:text-lg font-semibold uppercase mb-3 md:mb-5 text-black font-bold">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-6 text-sm md:text-base text-black w-full md:w-auto">
              <li><Link to="/" className="text-black">Home</Link></li>
              <li><Link to="/about" className="text-black">About Us</Link></li>
              <li><Link to="/wings" className="text-black">Wings</Link></li>
              <li>
                <button
                  onClick={handleChaptersClick}
                  className="text-black hover:text-[#A82228] transition-colors text-left"
                >
                  Chapters
                </button>
              </li>
              <li><Link to="/joinyoung" className="text-black">Get Involved</Link></li>
              <li><Link to="/contact" className="text-black">Contact Us</Link></li>
            </ul>
            <p className="hidden md:block text-base text-black mt-8">
              Copyright 2025. Youngvox All Rights Reserved
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-0 mt-8 md:mt-0">

          {/* BOTTOM LEFT — SOCIAL MEDIA */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="text-base md:text-lg font-semibold uppercase text-black">
              Social Media
            </h4>

            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/young_vox_?igsh=YTM5NWthbjU5bGIw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/share/zhSC2v7vYjZ5ifAr/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/109957290/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <LinkedInIcon className="w-6 h-6 text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Copyright */}
        <div className="md:hidden mt-8 text-left">
          <p className="text-xs text-black">
            Copyright 2025. Youngvox All Rights Reserved
          </p>
        </div>

      </div>

      {/* Coming Soon Modal */}
      {isComingSoonOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeComingSoon}
          ></div>

          {/* Modal Container */}
          <div className="relative bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-[420px] overflow-hidden animate-popup">
            {/* Close Button */}
            <button
              onClick={closeComingSoon}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="p-8 sm:p-10">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-[#A82228]/10 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#A82228]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-4">
                  Coming Soon
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The Chapters page is currently under development. We'll be launching it soon!
                </p>
                <button
                  onClick={closeComingSoon}
                  className="mt-6 w-full bg-[#A82228] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transform"
                >
                  OK
                </button>
              </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="h-2 bg-[#A82228]"></div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;