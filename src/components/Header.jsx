import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import youngvoxLogo from '../assets/Youngvox logo.png';
import donationIcon from '../assets/icons/Donation.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (itemName) => {
    setClickedItem(itemName);
    setTimeout(() => {
      setClickedItem(null);
    }, 400);
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
            <Link 
              to="/" 
              onClick={() => handleMenuClick('home')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block ${clickedItem === 'home' ? 'animate-bounce-click' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => handleMenuClick('about')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block ${clickedItem === 'about' ? 'animate-bounce-click' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/chapters" 
              onClick={() => handleMenuClick('chapters')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block ${clickedItem === 'chapters' ? 'animate-bounce-click' : ''}`}
            >
              Chapters
            </Link>
            <Link 
              to="/wings" 
              onClick={() => handleMenuClick('wings')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block ${clickedItem === 'wings' ? 'animate-bounce-click' : ''}`}
            >
              Wings
            </Link>
            <a 
              href="#get-involved" 
              onClick={() => handleMenuClick('get-involved')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block ${clickedItem === 'get-involved' ? 'animate-bounce-click' : ''}`}
            >
              Get Involved
            </a>
            <Link 
              to="/contact" 
              onClick={() => handleMenuClick('contact')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block ${clickedItem === 'contact' ? 'animate-bounce-click' : ''}`}
            >
              Contact us
            </Link>
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
              <img src={donationIcon} alt="Donation" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
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
                    onClick={() => { handleMenuClick('home-mobile'); toggleMenu(); }}
                    className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block ${clickedItem === 'home-mobile' ? 'animate-bounce-click' : ''}`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => { handleMenuClick('about-mobile'); toggleMenu(); }}
                    className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block ${clickedItem === 'about-mobile' ? 'animate-bounce-click' : ''}`}
                  >
                    About
                  </Link>
                  <Link
                    to="/chapters"
                    onClick={() => { handleMenuClick('chapters-mobile'); toggleMenu(); }}
                    className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block ${clickedItem === 'chapters-mobile' ? 'animate-bounce-click' : ''}`}
                  >
                    Chapters
                  </Link>
                  <Link
                    to="/wings"
                    onClick={() => { handleMenuClick('wings-mobile'); toggleMenu(); }}
                    className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block ${clickedItem === 'wings-mobile' ? 'animate-bounce-click' : ''}`}
                  >
                    Wings
                  </Link>
                  <a
                    href="#get-involved"
                    onClick={() => { handleMenuClick('get-involved-mobile'); toggleMenu(); }}
                    className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block ${clickedItem === 'get-involved-mobile' ? 'animate-bounce-click' : ''}`}
                  >
                    Get Involved
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => { handleMenuClick('contact-mobile'); toggleMenu(); }}
                    className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block ${clickedItem === 'contact-mobile' ? 'animate-bounce-click' : ''}`}
                  >
                    Contact us
                  </Link>
                  <button className="bg-[#A82228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors flex items-center justify-center space-x-2 mt-4 w-full">
                    <img src={donationIcon} alt="Donation" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
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

