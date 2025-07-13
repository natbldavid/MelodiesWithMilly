import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaList,
  FaStar,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaTimes,
} from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FaTiktok } from 'react-icons/fa6';

const navItems = [
  { icon: <FaHome />, label: 'Home', path: '/' },
  { icon: <FaInfoCircle />, label: 'About', path: '/about' },
  { icon: <FaList />, label: 'Song List', path: '/songslist' },
  { icon: <FaStar />, label: 'Testimonials', path: '/testimonials' },
  { icon: <FaStar />, label: 'Packages', path: '/packages'},
  { icon: <FaEnvelope />, label: 'Contact', path: '/contact' },
];

const Navbar = ({
  expanded,
  setExpanded,
  mobileOpen,
  onClose,
  visible = true,
}) => {
  // Prevent body scroll on mobile
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const desktopWidthClass = expanded ? 'w-80' : 'w-16';

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside
        className={`
          hidden md:flex flex-col fixed top-0 left-0 h-full
          bg-[#F6EDEE] shadow-xl transition-width duration-300
          transition-opacity duration-500 z-40
          ${desktopWidthClass}
          ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="h-20 flex items-center justify-center">
          <FaList size={24} />
        </div>
        <nav className="flex-1 flex flex-col overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `
                flex items-center py-4 px-3
                hover:bg-gray-100
                text-[#97B4EA] font-bold text-2xl
                transition-colors
                ${isActive ? 'bg-blue-50' : ''}
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span
                className={`
                  ml-3 overflow-hidden whitespace-nowrap
                  transition-[max-width] duration-300 ease-in-out
                  ${expanded ? 'max-w-[8rem]' : 'max-w-0'}
                `}
              >
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* desktop footer (only when expanded) */}
        {expanded && (
          <div className="p-4 border-t">
            <div className="flex flex-col items-start space-y-2">
              <div className="flex items-center text-[#97B4EA] text-lg font-bold">
                <FaPhoneAlt className="text-current text-xl" />
                <span className="ml-2">07825180222</span>
              </div>
              <div className="flex items-center text-[#97B4EA] text-lg font-bold">
                <MdMail className="text-current text-xl" />
                <span className="ml-2">melodieswithmilly@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <a
                  href="https://www.instagram.com/emeliehallett/"
                  aria-label="Instagram"
                  className="text-[#97B4EA] text-2xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@emeliehallettmusic"
                  aria-label="TikTok"
                  className="text-[#97B4EA] text-2xl"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* DESKTOP OVERLAY */}
      {expanded && visible && (
        <div
          className="hidden md:block fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-500"
          onMouseEnter={() => setExpanded(false)}
        />
      )}

      {/* MOBILE OVERLAY & NAV */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <aside className="relative w-72 bg-[#F6EDEE] h-full shadow-xl p-4 flex flex-col">
            <button
              onClick={onClose}
              className="mb-4 text-[#97B4EA] self-end"
            >
              <FaTimes size={24} />
            </button>
            <nav className="flex-1 flex flex-col space-y-4 overflow-y-auto">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `
                    flex items-center py-4 px-3
                    hover:bg-gray-100
                    text-[#97B4EA] font-bold text-2xl
                    transition-colors
                    ${isActive ? 'bg-blue-50' : ''}
                  `}
                  onClick={onClose}
                >
                  <span className="text-xl text-current">
                    {item.icon}
                  </span>
                  <span className="ml-3">{item.label}</span>
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto pt-4 border-t text-[#97B4EA] text-lg font-bold">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-current text-xl" />
                  <span className="ml-2">07825 180 222</span>
                </div>
                <div className="flex items-center">
                  <MdMail className="text-current text-xl" />
                  <span className="ml-2">
                    melodieswithmilly@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <a
                    href="https://www.instagram.com/emeliehallett/"
                    aria-label="Instagram"
                    className="text-current text-2xl"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.tiktok.com/@emeliehallettmusic"
                    aria-label="TikTok"
                    className="text-current text-2xl"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;