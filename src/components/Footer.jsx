import React from 'react';
import { Link } from 'react-router-dom';
import youngvoxLogo from '../assets/Youngvox logo.png';
import instagramIcon from '../assets/icons/instagram.png';
import youtubeIcon from '../assets/icons/youtube.png';
import facebookIcon from '../assets/icons/facebook.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white pt-12 pb-6">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-1">
                        <img
                            src={youngvoxLogo}
                            alt="YoungVox Logo"
                            className="h-12 mb-4"
                        />
                        <p className="text-gray-600 text-xs leading-relaxed">
                            YoungVox is a national youth leadership initiative dedicated to nurturing students and socially responsible leaders.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold text-black mb-3">QUICK LINKS</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" onClick={scrollToTop} className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Home</Link></li>
                            <li><Link to="/about" onClick={scrollToTop} className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">About Us</Link></li>
                            <li><Link to="/wings" onClick={scrollToTop} className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Wings </Link></li>
                            <li><Link to="/chapters" onClick={scrollToTop} className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Chapters</Link></li>
                            <li><a href="#" className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Events</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-bold text-black mb-3">RESOURCES</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Learning Hub</a></li>
                            <li><a href="#" className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Success Stories</a></li>
                            <li><a href="#" className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-bold text-black mb-3">SUPPORT</h3>
                        <ul className="space-y-2">
                            <li><Link to="/contact" onClick={scrollToTop} className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Contact Us</Link></li>
                            <li><Link to="/joinyoung" onClick={scrollToTop} className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Join YoungVox</Link></li>
                            <li><a href="#" className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-600 text-xs hover:text-[#A82228] transition-colors">Ethics & Privacy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                    <h3 className="text-sm font-bold text-black mb-3">SOCIALS MEDIAS</h3>
                    <div className="flex gap-3">
                        <a href="#" className="w-10 h-10 bg-white border border-gray-300 rounded-full hover:border-[#A82228] transition-colors flex items-center justify-center">
                            <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white border border-gray-300 rounded-full hover:border-[#A82228] transition-colors flex items-center justify-center">
                            <img src={youtubeIcon} alt="YouTube" className="w-5 h-5 object-contain" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white border border-gray-300 rounded-full hover:border-[#A82228] transition-colors flex items-center justify-center">
                            <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 pt-4 text-center">
                    <p className="text-gray-500 text-xs">
                        Copyright 2025, Youngvox | Privacy Policy | Terms Conditions
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
