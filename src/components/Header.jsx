import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import youngvoxLogo from '../assets/Youngvox logo.png';
import donationIcon from '../assets/icons/Donation.png';
import DonationModal from './DonationModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (itemName) => {
    setClickedItem(itemName);
    setTimeout(() => {
      setClickedItem(null);
    }, 400);
  };

  const toggleDonationModal = () => {
    setIsDonationModalOpen(!isDonationModalOpen);
  };

  const handleChaptersClick = (e) => {
    e.preventDefault();
    handleMenuClick('chapters');
    setIsComingSoonOpen(true);
  };

  const handleChaptersClickMobile = (e) => {
    e.preventDefault();
    handleMenuClick('chapters-mobile');
    setIsComingSoonOpen(true);
    toggleMenu();
  };

  const closeComingSoon = () => {
    setIsComingSoonOpen(false);
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
                className="w-16 h-16 sm:w-16 sm:h-16 lg:w-18 lg:h-18"
              />
            </Link>
          </div>

          {/* Center - Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => handleMenuClick('home')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block text-lg ${clickedItem === 'home' ? 'animate-bounce-click' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => handleMenuClick('about')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block text-lg ${clickedItem === 'about' ? 'animate-bounce-click' : ''}`}
            >
              About
            </Link>
            <button
              onClick={handleChaptersClick}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block text-lg cursor-pointer ${clickedItem === 'chapters' ? 'animate-bounce-click' : ''}`}
            >
              Chapters
            </button>
            <Link
              to="/wings"
              onClick={() => handleMenuClick('wings')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block text-lg ${clickedItem === 'wings' ? 'animate-bounce-click' : ''}`}
            >
              Wings
            </Link>
            <Link
              to="/joinyoung"
              onClick={() => handleMenuClick('get-involved')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block text-lg ${clickedItem === 'get-involved' ? 'animate-bounce-click' : ''}`}
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              onClick={() => handleMenuClick('contact')}
              className={`text-[#364153] hover:text-[#A82228] transition-colors scroll-smooth inline-block text-lg ${clickedItem === 'contact' ? 'animate-bounce-click' : ''}`}
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
            <button
              onClick={toggleDonationModal}
              className="hidden md:flex bg-[#A82228] text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl items-center space-x-2"
            >
              <img src={donationIcon} alt="Donation" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
              <span>Donate now</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Side Drawer from Left */}
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            onClick={toggleMenu}
          ></div>
          {/* Side Drawer */}
          <nav className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  onClick={() => { handleMenuClick('home-mobile'); toggleMenu(); }}
                  className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block text-lg ${clickedItem === 'home-mobile' ? 'animate-bounce-click' : ''}`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => { handleMenuClick('about-mobile'); toggleMenu(); }}
                  className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block text-lg ${clickedItem === 'about-mobile' ? 'animate-bounce-click' : ''}`}
                >
                  About
                </Link>
                <button
                  onClick={handleChaptersClickMobile}
                  className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block text-lg cursor-pointer text-left w-full ${clickedItem === 'chapters-mobile' ? 'animate-bounce-click' : ''}`}
                >
                  Chapters
                </button>
                <Link
                  to="/wings"
                  onClick={() => { handleMenuClick('wings-mobile'); toggleMenu(); }}
                  className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block text-lg ${clickedItem === 'wings-mobile' ? 'animate-bounce-click' : ''}`}
                >
                  Wings
                </Link>
                <Link
                  to="/joinyoung"
                  onClick={() => { handleMenuClick('get-involved-mobile'); toggleMenu(); }}
                  className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block text-lg ${clickedItem === 'get-involved-mobile' ? 'animate-bounce-click' : ''}`}
                >
                  Get Involved
                </Link>
                <Link
                  to="/contact"
                  onClick={() => { handleMenuClick('contact-mobile'); toggleMenu(); }}
                  className={`text-[#364153] hover:text-[#A82228] transition-colors py-2 scroll-smooth inline-block text-lg ${clickedItem === 'contact-mobile' ? 'animate-bounce-click' : ''}`}
                >
                  Contact us
                </Link>
                <button
                  onClick={() => { toggleDonationModal(); toggleMenu(); }}
                  className="bg-[#A82228] text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mt-4 w-full"
                >
                  <img src={donationIcon} alt="Donation" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
                  <span>Donate now</span>
                </button>
              </div>
            </div>
          </nav>
        </>
      </div>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={toggleDonationModal}
      />

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
    </header>
  );
};

export default Header;

