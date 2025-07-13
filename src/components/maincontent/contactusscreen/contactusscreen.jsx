// src/screens/EnquiryScreen.jsx

import React, { useState } from 'react';
import partyCharacters from '../../../config/ourCharactersConfig';
import partyPackages from '../../../config/partyPackagesConfig';

const EnquiryScreen = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    childName: '', childAge: '',
    character: '', package: '',
    numChildren: 1, date: '', time: '',
    location: '', makeovers: '',
    parking: 'unsure', additional: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitting enquiry:', form);
    // TODO: wire up to your API / email service
  };

  return (
    <div className="bg-[#F6EDEE] py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl text-[#97B4EA] font-bold text-center mb-2">
          Party Enquiry
        </h1>
        <h4 className="text-lg text-center text-gray-700 mb-6">
          Please fill out the form below and we'll be in touch!
        </h4>
        <hr className="border-t-2 border-black shadow-lg mb-8" />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name / Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Your Name', name: 'name', type: 'text', required: true },
              { label: 'Email', name: 'email', type: 'email', required: true },
              { label: 'Phone Number', name: 'phone', type: 'tel' },
            ].map(field => (
              <label key={field.name} className="block">
                <span className="text-sm font-medium text-gray-700">{field.label}</span>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="
                    mt-1 w-full
                    bg-white 
                    border-0 border-b-2 border-[#97B4EA]
                    focus:outline-none focus:border-[#97B4EA]
                    px-2 py-1
                  "
                />
              </label>
            ))}
          </div>

          {/* Child info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Child’s Name</span>
              <input
                type="text"
                name="childName"
                value={form.childName}
                onChange={handleChange}
                className="
                  mt-1 w-full
                  bg-white
                  border-0 border-b-2 border-[#97B4EA]
                  focus:outline-none focus:border-[#97B4EA]
                  px-2 py-1
                "
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Child’s Age</span>
              <input
                type="number"
                name="childAge"
                min="0"
                value={form.childAge}
                onChange={handleChange}
                className="
                  mt-1 w-full
                  bg-white
                  border-0 border-b-2 border-[#97B4EA]
                  focus:outline-none focus:border-[#97B4EA]
                  px-2 py-1
                "
              />
            </label>
          </div>

          {/* Character & Package */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Character */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Character</span>
              <select
                name="character"
                value={form.character}
                onChange={handleChange}
                required
                className="
                  mt-1 w-full
                  bg-white
                  border-0 border-b-2 border-[#97B4EA]
                  focus:outline-none focus:border-[#97B4EA]
                  px-2 py-1
                "
              >
                <option value="" disabled>Select a character</option>
                {partyCharacters.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </label>

            {/* Package */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Package</span>
              <select
                name="package"
                value={form.package}
                onChange={handleChange}
                required
                className="
                  mt-1 w-full
                  bg-white
                  border-0 border-b-2 border-[#97B4EA]
                  focus:outline-none focus:border-[#97B4EA]
                  px-2 py-1
                "
              >
                <option value="" disabled>Select a package</option>
                {partyPackages.map(group => (
                  <optgroup key={group.id} label={group.title}>
                    {group.packages.map(p => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.price})
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </label>
          </div>

          {/* # Children / Date / Time */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Number */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700"># of Children</span>
              <input
                type="number"
                name="numChildren"
                min="1"
                value={form.numChildren}
                onChange={handleChange}
                className="
                  mt-1 w-full
                  bg-white
                  border-0 border-b-2 border-[#97B4EA]
                  focus:outline-none focus:border-[#97B4EA]
                  px-2 py-1
                "
              />
            </label>
            {/* Date */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Date</span>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="
                  mt-1 w-full
                  bg-white
                  border-0 border-b-2 border-[#97B4EA]
                  focus:outline-none focus:border-[#97B4EA]
                  px-2 py-1
                "
              />
            </label>
            {/* Time */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Time</span>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="
                  mt-1 w-full
                  bg-white
                  border-0 border-b-2 border-[#97B4EA]
                  focus:outline-none focus:border-[#97B4EA]
                  px-2 py-1
                "
              />
            </label>
          </div>

          {/* Location */}
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Location / Address</span>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="
                mt-1 w-full
                bg-white
                border-0 border-b-2 border-[#97B4EA]
                focus:outline-none focus:border-[#97B4EA]
                px-2 py-1
              "
            />
          </label>

          {/* Makeovers & Parking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Little Princess Makeovers?</span>
              <select
                name="makeovers"
                value={form.makeovers}
                onChange={handleChange}
                required
                className="
                  mt-1 w-full
                  bg-white
                  border-0 border-b-2 border-[#97B4EA]
                  focus:outline-none focus:border-[#97B4EA]
                  px-2 py-1
                "
              >
                <option value="" disabled>Select one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Parking available?</span>
              <select
                name="parking"
                value={form.parking}
                onChange={handleChange}
                className="
                  mt-1 w-full
                  bg-white
                  border-0 border-b-2 border-[#97B4EA]
                  focus:outline-none focus:border-[#97B4EA]
                  px-2 py-1
                "
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Unsure</option>
              </select>
            </label>
          </div>

          {/* Additional info */}
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Additional Information</span>
            <textarea
              name="additional"
              value={form.additional}
              onChange={handleChange}
              rows="4"
              className="
                mt-1 w-full
                bg-white
                border-0 border-b-2 border-[#97B4EA]
                focus:outline-none focus:border-[#97B4EA]
                px-2 py-1
              "
            />
          </label>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#97B4EA] text-white rounded-lg hover:bg-opacity-90"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryScreen;