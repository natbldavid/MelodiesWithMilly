// src/screens/EnquiryScreen.jsx

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FaEnvelope, FaTimes } from 'react-icons/fa';
import partyCharacters from '../../../config/ourCharactersConfig';
import partyPackages   from '../../../config/partyPackagesConfig';

const EnquiryScreen = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const location  = useLocation();
  const navigate  = useNavigate();
  const prePkg    = location.state?.preselectedPackage || '';

  const [form, setForm]       = useState({
    name: '', email: '', phone: '',
    childName: '', childAge: '',
    character: '', package: prePkg,
    numChildren: 1, date: '', time: '',
    location: '', makeovers: '',
    parking: 'unsure', additional: '',
  });
  const [showModal, setShowModal]   = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (prePkg) setForm(f => ({ ...f, package: prePkg }));
  }, [prePkg]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!executeRecaptcha) {
      alert('reCAPTCHA not yet available, please try again.');
      return;
    }
    setSubmitting(true);

    // 1) get reCAPTCHA token
    const token = await executeRecaptcha('enquiry_form');
    if (!token) {
      alert('reCAPTCHA failed, please try again.');
      setSubmitting(false);
      return;
    }

    try {
      // 2) send to backend (make sure VITE_BACKEND_URL is set in your .env)
      const resp = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/contact`,
        {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ ...form, recaptchaToken: token }),
        }
      );

      if (resp.ok) {
        setShowModal(true);
      } else {
        alert('Submission error, please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error, please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // close & go home
  const closeModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="bg-[#F6EDEE] py-8 relative">
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
              { label: 'Email',     name: 'email', type: 'email', required: true },
              { label: 'Phone',     name: 'phone', type: 'tel' },
            ].map(field => (
              <label key={field.name} className="block">
                <span className="text-sm font-medium text-gray-700">
                  {field.label}
                </span>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="
                    mt-1 w-full bg-white
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
                className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
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
                className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
              />
            </label>
          </div>

          {/* Character & Package */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Character</span>
              <select
                name="character"
                value={form.character}
                onChange={handleChange}
                required
                className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
              >
                <option value="" disabled>Select a character</option>
                {partyCharacters.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Package</span>
              <select
                name="package"
                value={form.package}
                onChange={handleChange}
                required
                className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
              >
                <option value="" disabled>Select a package</option>
                {partyPackages.map(group => (
                  <optgroup key={group.id} label={group.title}>
                    {group.packages.map(p => (
                      <option key={p.id} value={p.id}>
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
            <label className="block">
              <span className="text-sm font-medium text-gray-700"># of Children</span>
              <input
                type="number"
                name="numChildren"
                min="1"
                value={form.numChildren}
                onChange={handleChange}
                className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Date</span>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Time</span>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
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
              className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
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
                className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
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
                className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
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
              className="mt-1 w-full bg-white border-0 border-b-2 border-[#97B4EA] focus:outline-none px-2 py-1"
            />
          </label>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={submitting}
              className={`
                px-8 py-3 bg-[#97B4EA] text-white rounded-lg
                hover:bg-opacity-90 tracking-[0.2em]
                ${submitting ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {submitting ? 'Sending...' : 'Submit Enquiry'}
            </button>
          </div>
        </form>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-sm w-full p-6 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <FaTimes size={20} />
            </button>

            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-[#97B4EA]" size={48} />
            </div>

            <h2 className="text-2xl font-bold text-center mb-2">
              Thank you for your enquiry
            </h2>
            <p className="text-center text-gray-700">
              Your enquiry has been received. A member of our team will be in contact
              with you in the next 48 hours. Thank you!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquiryScreen;
