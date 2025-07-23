// src/screens/PackagesScreen.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import partyPackages from '../../../config/partyPackagesConfig';

const PackagesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFeatures, setShowFeatures] = useState(null);
  const navigate = useNavigate();
  const currentGroup = partyPackages.find(g => g.id === selectedCategory);

  return (
    <div className="ourcharacters-screen bg-[#F6EDEE] py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Page header */}
        <h1 className="text-5xl text-[#97B4EA] font-bold text-center mb-2">
          Party Packages
        </h1>
        <h4 className="text-lg text-center text-gray-700 mb-4">
          Click on your desired package to enquire!
        </h4>
        <hr className="border-t-2 border-black shadow-lg mb-8" />

        {!currentGroup ? (
          /* --- MAIN CATEGORIES GRID --- */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partyPackages.map(group => (
              <div
                key={group.id}
                onClick={() => setSelectedCategory(group.id)}
                className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group"
              >
                <img
                  src={group.categoryImage}
                  alt={group.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white px-2 text-center">
                    {group.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- SUB-PACKAGES VIEW --- */
          <>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setShowFeatures(null);
              }}
              className="text-blue-600 hover:underline mb-6"
            >
              ← Back to categories
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentGroup.packages.map(pkg => {
                const isShown = showFeatures === pkg.id;

                return (
                  <div
                    key={pkg.id}
                    onClick={() =>
                      setShowFeatures(prev => (prev === pkg.id ? null : pkg.id))
                    }
                    className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group"
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-64 object-cover"
                    />

                    {/* Top overlay: name */}
                    <div className={`
                      absolute top-0 left-0 w-full bg-white bg-opacity-50 text-black
                      py-2 px-4 transition-opacity duration-300
                      ${isShown ? 'opacity-0' : 'opacity-100'} group-hover:opacity-0
                    `}>
                      <h4 className="text-lg font-semibold">{pkg.name}</h4>
                    </div>

                    {/* Bottom overlay: price */}
                    <div className={`
                      absolute bottom-0 left-0 w-full bg-white bg-opacity-50 text-black
                      py-2 px-4 transition-opacity duration-300
                      ${isShown ? 'opacity-0' : 'opacity-100'} group-hover:opacity-0
                    `}>
                      <span className="font-bold">{pkg.price}</span>
                    </div>

                    {/* Full overlay: features + button */}
                    <div
                      className={`
                        absolute inset-0 bg-white bg-opacity-90 text-black p-4 flex flex-col
                        overflow-auto transition-opacity duration-300
                        ${isShown ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                      `}
                    >
                      <span className="font-bold mb-2">{pkg.name}</span>
                      <div className="font-semibold mb-2">Features:</div>
                      <ul className="list-disc list-inside flex-grow space-y-1">
                        {pkg.features.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>

                      <button
                        onClick={e => {
                          e.stopPropagation();
                          navigate('/contact', { state: { preselectedPackage: pkg.id } });
                        }}
                        className="mt-4 bg-[#97B4EA] text-white py-2 rounded-lg hover:bg-[#7592c9] transition tracking-[0.2em]"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Bottom blue border */}
        <div className="mt-8">
          <hr className="border-t-2 border-[#97B4EA] shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default PackagesScreen;
