// src/components/CharacterCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import partyCharacters from '../../../config/ourCharactersConfig';
import { useNavigate } from 'react-router-dom';

const CharacterCarousel = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const length = partyCharacters.length;

  const prevIndex = () => setCurrent((c) => (c - 1 + length) % length);
  const nextIndex = () => setCurrent((c) => (c + 1) % length);

  // autoplay
  useEffect(() => {
    resetAutoplay();
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const resetAutoplay = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextIndex, 5000);
  };

  // touch handlers for mobile
  const onTouchStart = (e) => {
    clearTimeout(timeoutRef.current);
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const dx = touchStartX.current - touchEndX.current;
    if (dx > 50) nextIndex();
    else if (dx < -50) prevIndex();
    resetAutoplay();
  };

  const getSlideClass = (idx) => {
    const base = 'relative w-40 h-40 md:w-60 md:h-60 flex-shrink-0 transition-all duration-700 ease-in-out';
    if (idx === current)
      return `${base} transform scale-100 opacity-100`;
    if (idx === (current - 1 + length) % length || idx === (current + 1) % length)
      return `${base} transform scale-90 opacity-50`;
    return 'hidden';
  };

  return (
    <section className="py-12 px-4 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#97B4EA] mb-8">Our Characters</h2>

      {/* Carousel Wrapper */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={resetAutoplay}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ height: '15rem', maxHeight: '15rem' }}
      >
        {/* Left Arrow */}
        <button
          onClick={prevIndex}
          className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 text-6xl z-20 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out"
        >
          ‹
        </button>

        {/* Slides */}
        <div className="flex items-center justify-center space-x-4 w-full">
          {partyCharacters.map((char, idx) => (
            <div key={char.id} className={getSlideClass(idx)}>
              <img
                src={char.photo}
                alt={char.name}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-[#97B4EA] text-sm text-center font-semibold px-2 py-1 rounded">
                {char.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextIndex}
          className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 text-6xl z-20 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out"
        >
          ›
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {partyCharacters.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
              idx === current ? 'bg-[#97B4EA]' : 'bg-[#F6EDEE]'
            }`}
          />
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-6">
        <button onClick={() => navigate('/ourcharacters')}
        className="px-6 py-2 bg-[#97B4EA] text-white rounded-lg hover:bg-[#7592c9] transition-all duration-300 tracking-[0.2em]">
          See More
        </button>
      </div>
    </section>
  );
};

export default CharacterCarousel;
