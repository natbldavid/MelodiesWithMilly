import React from 'react';
import './homescreen.css';
import CharacterCarousel from './charactercarousel.jsx';
import emeliehomescreenphoto from '../../../assets/mwmmainofficalreal.JPG';
import mwmhomepartyphoto from '../../../assets/mwmmidparty.JPG';
import mwmfunpartyphoto from '../../../assets/mwmfunpartyphoto.JPG';
import mwmtwoentertainers from '../../../assets/mwmtwoentertainerspackagebronze.JPG';
import mwmvirtualpackages from '../../../assets/mwmroyalvideomessage.JPG';

import logo from '../../../assets/mwmlogoofficial.png';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

    const scrollToContent = () => {
      // grab your header element (or hard-code its height if you prefer)
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 80;
      // scroll to just below the hero, leaving room for the header
      window.scrollTo({
        top: window.innerHeight - headerHeight,
        behavior: 'smooth'
      });
    };

  return (
    <div className="home-screen font-fredoka bg-[#F6EDEE]">
      {/* Section 1 */}
      <div className="relative w-full h-[100dvh] overflow-hidden bg-[#F6EDEE]">
        <img
          src={emeliehomescreenphoto}
          alt="Melodies With Milly Fun Party Photo"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white space-y-4 px-4">
          <img
            src={logo}
            alt="Logo for MWM"
            loading="lazy"
            className="w-64 h-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
          />
          <h1 className="text-4xl md:text-6xl font-bold leading-snug text-center drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            Where Dreams<br />Come True
          </h1>
        </div>

        {/* Scroll Down button */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-2 cursor-pointer"
          onClick={scrollToContent}
        >
          <span className="text-white text-lg tracking-wide drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            Please Scroll Down
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 animate-bounce text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

{/* Section 2 */}
<div className="py-20 px-8 md:px-20">
  <div className="flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Image */}
    <div className="w-full md:w-1/2">
<img
  src={mwmhomepartyphoto}
  alt="Melodies With Milly at a party in London, Surrey or Hampshire area"
  className="w-96 h-96 md:w-120 md:h-120 object-cover rounded-md shadow-lg mx-auto"
/>
    </div>

    {/* Right Text */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-5xl font-semibold mb-6 text-[#97B4EA]">Welcome to Melodies With Milly</h1>
      <h1 className="text-3xl font-semibold mb-6 text-[#97B4EA]">Princess Parties in Greater London, Surrey & Hampshire</h1>
      <p className="text-lg mb-4">
        Discover the magic with Melodies with Milly!
      </p>
      <p className="text-lg mb-4">
        Elevate your celebrations in South-West London, Surrey, and Hampshire with enchanting princess parties, delightful entertainment, and memorable visits.
      </p>
      <p className="text-lg mb-4">
        Our customisable princess packages, professional team, and local charm make every moment magical.
      </p>
      <p className="text-lg mb-4">
        Book your unique experience today and let the joyous celebrations begin!
      </p>
              <button
          onClick={() => navigate('/about')}
          className="mt-8 bg-[#97B4EA] text-white py-3 px-20 rounded-lg hover:bg-[#7592c9] transition-all tracking-[0.2em]"
        >
          Enquire Now
        </button>
    </div>
  </div>
</div>

      <hr className="border-t-2 border-[#97B4EA] shadow-lg" />
{/*Section 3: Character Carousel */}
      <CharacterCarousel />

      <hr className="border-t-2 border-[#97B4EA] shadow-lg" />

           {/* Section 3.5 Services */}
      <div className="py-20 px-8 md:px-20">
        <h2 className="text-3xl font-elegant font-bold mb-12 text-center text-[#97B4EA]">Our Party Packages</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="service-card">
            <img src={mwmfunpartyphoto} alt="Handyman Work" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl text-[#97B4EA] font-semibold mb-2">Single Entertainer Packages</h3>
            <p className="text-lg mb-4">One royal guest arrives in full costume to lead games, sing songs, and pose for photos.</p>
          </div>
          <div className="service-card">
            <img src={mwmtwoentertainers} alt="Painting & Decorating" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl text-[#97B4EA] font-semibold mb-2">Two Entertainer Packages</h3>
            <p className="text-lg mb-4">Double the fun! Two princesses team up for interactive storytelling, guided crafts, and solo and duet performances that keep every child enchanted.</p>
          </div>
          <div className="service-card">
            <img src={mwmvirtualpackages} alt="Landscaping & Gardens" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl text-[#97B4EA] font-semibold mb-2">Virtual Packages</h3>
            <p className="text-lg mb-4">Invite a princess into your home—remotely! Our live, interactive video sessions feature all kinds of fun from the comfort (and safety) of your living room.</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/about')}
          className="mt-8 bg-[#97B4EA] text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-all"
        >
          Read More
        </button>
      </div>

      {/* Section 4: Stats Section */}
<div className="bg-[#97B4EA] text-[#fff] py-16 px-8 md:px-20">
  <div className="grid gap-12 md:grid-cols-3 text-center">
    <div>
      <h3 className="text-4xl font-extrabold mb-2">3+</h3>
      <p className="text-lg">Years of Experience</p>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold mb-2">200+</h3>
      <p className="text-lg">Party Guests Satisfied</p>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold mb-2">18</h3>
      <p className="text-lg">Fantastic Characters</p>
    </div>
    
  </div>
  
</div>
   
      </div>
      
  );
};

export default HomeScreen;