// src/layout/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import HomeScreen from '../components/maincontent/homescreen/homescreen';
import AboutUsScreen from '../components/maincontent/aboutusscreen/aboutusscreen';
import ContactUsScreen from '../components/maincontent/contactusscreen/contactusscreen';
import OurCharactersScreen from '../components/maincontent/songslistscreen/ourcharacters';
import TestimonialsScreen from '../components/maincontent/testimonialsscreen/testimonialsscreen';
import PackagesScreen from '../components/maincontent/packagesscreen/packagesscreen';
import MakeOverScreen from '../components/maincontent/makeoversscreen/makeoversscreen';
import FAQsScreen from '../components/maincontent/faqsscreen/faqsscreen';
import ScrollToTop from '../components/scrolltop';
import ReviewSection from '../components/ratings/ratings';
import './layout.css';

const Layout = () => {
const isHome = useMatch({ path: '/', end: true }) !== null;

  const [showNav, setShowNav] = useState(!isHome);

  // on route change: if not home, always show; if home, hide until scroll
  useEffect(() => {
    setShowNav(!isHome);
  }, [isHome]);

  // on home only: fade-in nav when scrolled past hero bottom
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      const headerHeight = document
        .querySelector('nav')
        .offsetHeight;
      const threshold = window.innerHeight - headerHeight;
      setShowNav(window.scrollY > threshold);
    };
    window.addEventListener('scroll', onScroll);
// immediately run once so showNav is correct on load
onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <>
      <ScrollToTop />
      <Header visible={showNav} />
      <div className={`flex flex-col flex-1 min-h-screen ${!isHome ? 'pt-20' : ''}`}>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/aboutme" element={<AboutUsScreen />} />
            <Route path="/enquiries" element={<ContactUsScreen />} />
            <Route path="/characters" element={<OurCharactersScreen />} />
            <Route path="/testimonials" element={<TestimonialsScreen />} />
            <Route path="/packages" element={<PackagesScreen />} />
            <Route path="/little-princess-makeovers" element={<MakeOverScreen />} />
            <Route path="/faqs" element={<FAQsScreen />} />
            <Route path="*" element={<HomeScreen />} />
          </Routes>
        </main>
        <ReviewSection />
        <Footer />
      </div>
    </>
  );
};

export default Layout;