// src/screens/OurCharactersScreen.jsx

import React from 'react';
import partyCharacters from '../../../config/ourCharactersConfig';

const OurCharactersScreen = () => {
  return (
    <div className="ourcharacters-screen bg-[#F6EDEE] min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Page header */}
        <h1 className="text-5xl text-[#97B4EA] font-bold text-center mb-2 transition-colors">
          Party Characters
        </h1>
        <h4 className="text-lg text-center text-gray-700 mb-4 transition-colors">
          Choose your entertainer
        </h4>
        <hr className="border-t-2 border-black shadow-lg mb-8" />

        {/* Grid: 1 column on small, 2 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partyCharacters.map((char) => (
            <div
              key={char.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-center text-left p-4 transition-transform hover:scale-105"
            >
              {/* Image on the left */}
              <div className="flex-shrink-0">
                <img
                  src={char.photo}
                  alt={char.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
              {/* Text on the right */}
              <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-1">
                  {char.name}
                </h2>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Power:</span> {char.power}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCharactersScreen;