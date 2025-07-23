import React from 'react';
import manateeicon from '../../assets/TeamManateeLogo.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FaInstagram, FaFacebook } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-8 pt-16 pb-6">
      <div className="max-w-4xl mx-auto space-y-8 text-[#97B4EA]">
        {/* Disclaimer & Title */}
        <div className="space-y-2 text-center">
          <p className="text-sm">
            Disclaimer: Our characters are based upon well-known and loved fairytales and have no affiliation to any other trademarks or companies.
          </p>
          <h2 className="text-xl font-semibold">Melodies with Milly</h2>
        </div>

        {/* Contact & Social Icons */}
        <div className="flex flex-wrap justify-center items-center space-x-4 text-[#97B4EA] text-sm">
          <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-gray-700">
            <FaPhoneAlt /> <span>07825 180 222</span>
          </a>
          <a href="mailto:info@melodieswithmilly.com" className="flex items-center space-x-1 hover:text-gray-700">
            <MdMail /> <span>melodieswithmilly@gmail.com</span>
          </a>
          <a
            href="https://www.instagram.com/melodieswithmilly/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-gray-700"
          >
            <FaInstagram /> <span>melodieswithmilly</span>
          </a>
          <a
            href="http://facebook.com/melodieswithmilly"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-gray-700"
          >
            <FaFacebook /> <span>melodieswithmilly</span>
          </a>
        </div>
        <div className="flex flex-wrap justify-center items-center text-xs text-[#97B4EA]">© 2023 | by Melodies With Milly.</div>


        {/* Credit & Copyright */}
        <div className="flex flex-wrap justify-center items-center text-xs text-gray-500 gap-2">
          <img src={manateeicon} alt="Manatee Icon" className="w-5 h-5" />
          <span>Created by Manatee Web Creation</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
