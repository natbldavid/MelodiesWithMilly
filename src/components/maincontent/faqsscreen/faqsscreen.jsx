// src/screens/FaqsScreen.jsx

import React, { useState } from 'react';
import faqs from '../../../config/faqConfig';

const FaqsScreen = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="bg-[#F6EDEE] py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-5xl text-[#97B4EA] font-bold text-center mb-2">
          FAQs
        </h1>
        <hr className="border-t-2 border-black shadow-lg mb-8" />

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div key={idx} className="border-b">
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                >
                  <span className="text-2xl font-semibold text-[#97B4EA]">
                    {item.question}
                  </span>
                  <span className="text-3xl text-[#97B4EA]">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-[max-height] duration-700 ease-in-out
                    ${isOpen ? 'max-h-[500px]' : 'max-h-0'}
                  `}
                >
                  <p
                    className={`
                      text-gray-700 
                      px-2 pb-4 
                      transition-opacity duration-1000 ease-in-out
                      ${isOpen ? 'opacity-100' : 'opacity-0'}
                    `}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
              <div className="mt-8">
          <hr className="border-t-2 border-[#97B4EA] shadow-lg" />
        </div>
    </div>

    
  );
};

export default FaqsScreen;
