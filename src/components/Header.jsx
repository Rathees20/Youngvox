import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import youngvoxLogo from '../assets/Youngvox logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm h-[85px]">
      <div className="max-w-[1440px] mx-auto px-4 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={youngvoxLogo}
                alt="Youngvox Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18"
              />
            </Link>
          </div>

          {/* Center - Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth">Home</Link>
            <Link to="/about" className="text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth">About</Link>
            <Link to="/chapters" className="text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth">Chapters</Link>
            <a href="#get-involved" className="text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth">Get Involved</a>
            <a href="#contact" className="text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth">Contact us</a>
          </nav>

          {/* Right Side - Mobile Menu Button and Donate Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-[#364153]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Donate Button */}
            <button className="hidden md:flex bg-[#A82228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>Donate now</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Side Drawer from Left */}
        <>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleMenu}
          ></div>
          {/* Side Drawer */}
          <nav className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
              <div className="flex flex-col h-full pt-20 px-6">
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/"
                    onClick={toggleMenu}
                    className="text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={toggleMenu}
                    className="text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth"
                  >
                    About
                  </Link>
                  <Link
                    to="/chapters"
                    onClick={toggleMenu}
                    className="text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth"
                  >
                    Chapters
                  </Link>
                  <a
                    href="#get-involved"
                    onClick={toggleMenu}
                    className="text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth"
                  >
                    Get Involved
                  </a>
                  <a
                    href="#contact"
                    onClick={toggleMenu}
                    className="text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth"
                  >
                    Contact us
                  </a>
                  <button className="bg-[#A82228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors flex items-center justify-center space-x-2 mt-4 w-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span>Donate now</span>
                  </button>
                </div>
              </div>
            </nav>
        </>
      </div>
    </header>
  );
};

export default Header;

