// src/layout/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const isHome = location.pathname === '/';

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
            <Route path="/about" element={<AboutUsScreen />} />
            <Route path="/contact" element={<ContactUsScreen />} />
            <Route path="/ourcharacters" element={<OurCharactersScreen />} />
            <Route path="/testimonials" element={<TestimonialsScreen />} />
            <Route path="/packages" element={<PackagesScreen />} />
            <Route path="/makeovers" element={<MakeOverScreen />} />
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