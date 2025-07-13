// src/screens/TestimonialsScreen.jsx

import React from 'react';
import reviews from '../../../config/reviewsConfig';

const TestimonialsScreen = () => {
  return (
    <div className="bg-[#F6EDEE] py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page header */}
        <h1 className="text-5xl text-[#97B4EA] font-bold text-center mb-2">
          Testimonials
        </h1>
        <hr className="border-t-2 border-black shadow-lg mb-8" />

        {/* Grid of testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center"
            >
              <p className="text-gray-700 text-base italic mb-4">
                <span className="text-6xl text-[#97B4EA] leading-none">“</span>
                <span className="block mt-2">{rev.text}</span>
                <span className="text-6xl text-[#97B4EA] leading-none block mt-2">”</span>
              </p>
              <p className="text-[#97B4EA] font-semibold mt-4">
                — {rev.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsScreen;
