import React from 'react';
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
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.07 107 0 82.93 0 53.71 0 24.5 24.07.42 53.84.42 83.6.42 107.7 24.5 107.7 53.71c0 29.22-24.1 53.29-53.86 53.29zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.6-2.9 13.4-2.9 21.2V448h-92.68s1.2-242.1 0-266.1h92.68v37.7c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.4-46 83.7-46 61.1 0 107.1 39.8 107.1 125.4V448z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-6 font-sans text-[#333]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="flex flex-col md:flex-row justify-between gap-20">

          {/* LEFT CONTENT */}
          <div className="max-w-sm">
            <img src={youngvoxLogo} alt="YoungVox" className="h-14 mb-6" />
            <p className="text-base text-black leading-relaxed">
              YoungVox is a national youth leadership initiative
              dedicated to nurturing confident and socially
              responsible young leaders across India.
            </p>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-col pt-25 lg:pt-20">
            <h4 className="text-lg font-semibold uppercase mb-5 text-black font-bold">
              Quick Links
            </h4>
            <ul className="flex flex-wrap gap-6 text-base text-black">
              <li><Link to="/" className="text-black">Home</Link></li>
              <li><Link to="/about" className="text-black">About Us</Link></li>
                <li><Link to="/wings" className="text-black">Wings</Link></li>
                <li><Link to="/events" className="text-black">Chapters</Link></li>
                <li><Link to="/getinvolved" className="text-black">Get Involved</Link></li>
                <li><Link to="/contact" className="text-black">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex items-start justify-between mt-6 pt-6">

          {/* BOTTOM LEFT — SOCIAL MEDIA */}
          <div className="flex flex-col gap-3 ">
            <h4 className="text-lg font-semibold uppercase text-black">
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

          {/* BOTTOM RIGHT — COPYRIGHT */}
          <p className="text-base text-black text-left leading-relaxed -ml-30 mt-2">
            Copyright 2025. Youngvox All Rights Reserved
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;