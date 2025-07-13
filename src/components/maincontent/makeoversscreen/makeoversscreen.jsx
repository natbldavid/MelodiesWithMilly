// src/screens/MakeOverScreen.jsx

import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

// 1) Import your makeover images
import makeover1 from '../../../assets/mwmmakeovercheek.jpg';
import makeover2 from '../../../assets/mwmmakeoverhand.jpg';
import makeover3 from '../../../assets/mwmmakeoverlips.jpg';
// …add as many as you need

const images = [
  { src: makeover1, alt: 'Little Princess Makeover 1' },
  { src: makeover2, alt: 'Little Princess Makeover 2' },
  { src: makeover3, alt: 'Little Princess Makeover 3' },
  // …
];

const MakeOverScreen = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const handlers = useSwipeable({
    onSwipedLeft:  () => { resetAuto(); next(); },
    onSwipedRight: () => { resetAuto(); prev(); },
    trackMouse: true,
  });

  const next = () => setCurrent(i => (i + 1) % images.length);
  const prev = () => setCurrent(i => (i === 0 ? images.length - 1 : i - 1));

  const startAuto = () => {
    intervalRef.current = setInterval(next, 4000);
  };
  const resetAuto = () => {
    clearInterval(intervalRef.current);
    startAuto();
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
 <div className="makeover-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-5xl text-[#97B4EA] font-bold text-center mb-2">
          Little Princess Makeovers
        </h1>

        {/* FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Carousel */}
          <div
            {...handlers}
            className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-lg"
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className={`
                  absolute inset-0 w-full h-full object-contain p-4
                  transition-opacity duration-1000
                  ${idx === current ? 'opacity-100' : 'opacity-0'}
                `}
              />
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`
                    w-3 h-3 rounded-full transition-colors
                    ${idx === current ? 'bg-[#97B4EA]' : 'bg-gray-300'}
                  `}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-gray-700 space-y-6 mt-8 md:mt-0">
            <p>
              Little Princess Makeovers are the best add on to the Ultimate
              Princess Party!
            </p>
            <p>
              A pamper session with the character of your choice and child-friendly makeup!
              Truly nothing better!
            </p>

            <h2 className="text-2xl font-semibold">What's Included:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Glitter</li>
              <li>Lipstick</li>
              <li>Eyeshadow</li>
              <li>Temp tattoos</li>
              <li>Face paint with patterned stencils</li>
            </ul>

            <h2 className="text-2xl font-semibold">Price for Little Princess Makeovers</h2>
            <p>£55 for up to 14 children</p>

            <h2 className="text-2xl font-semibold">
              Can we add more children to the package?
            </h2>
            <p>Yes, absolutely! It is £3.50 per extra child.</p>
          </div>
        </div>

        {/* Bottom border */}
        <div className="mt-8">
          <hr className="border-t-2 border-[#97B4EA] shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default MakeOverScreen;
