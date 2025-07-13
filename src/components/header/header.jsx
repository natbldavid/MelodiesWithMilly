// src/components/topnav/TopNav.jsx

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaInstagram
} from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FaTiktok } from 'react-icons/fa6';
import logo from '../../assets/mwmlogoofficial.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Characters', path: '/ourcharacters' },
  { label: 'Packages', path: '/packages' },
  { label: 'Makeovers', path: '/makeovers' },
  { label: 'Enquiries', path: '/contact' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQs', path: '/faqs' },
];

const Header = ({ visible = true }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`
          fixed top-0 inset-x-0 h-20 bg-[#F6EDEE] border-b-4 border-[#97B4EA]
          z-50 flex items-center px-4 md:px-20 transition-transform duration-300
          ${visible ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        {/* Left: logo + desktop links */}
        <div className="flex items-center space-x-8 flex-1">
          <img src={logo} alt="Logo" className="h-12 object-contain" />

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium hover:text-[#6187cf] ${
                    isActive ? 'text-[#6187cf]' : 'text-gray-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right: contact & socials (desktop only) */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-[#97B4EA] font-bold">
            <FaPhoneAlt /> <span>07825 180 222</span>
          </div>
          <div className="flex items-center space-x-2 text-[#97B4EA] font-bold">
            <MdMail /> <span>melodieswithmilly@gmail.com</span>
          </div>
          <a
            href="https://www.instagram.com/emeliehallett/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#6187cf]"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@emeliehallettmusic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-[#6187cf]"
          >
            <FaTiktok size={24} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-gray-700"
          aria-label="Open menu"
        >
          <FaBars size={24} />
        </button>
      </nav>

      {/* Mobile full-screen menu overlay */}
      <div
        className={`
          fixed inset-0 z-50 bg-white
          transition-opacity duration-500 ease-in-out
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 text-gray-700"
          aria-label="Close menu"
        >
          <FaTimes size={28} />
        </button>

        <nav className="h-full flex flex-col justify-center items-center space-y-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="text-3xl text-[#97B4EA] font-semibold hover:text-[#6187cf]"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-8 w-full flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/emeliehallett/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#97B4EA] hover:text-[#6187cf]"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.tiktok.com/@emeliehallettmusic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-[#97B4EA] hover:text-[#6187cf]"
          >
            <FaTiktok size={28} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
