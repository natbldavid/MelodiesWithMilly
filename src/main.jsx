// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Layout from './layout/layout';
import './index.css';

// Handle deep-links from GitHub Pages 404 redirect
const params = new URLSearchParams(window.location.search);
const forced = params.get('path');
if (forced) {
  window.history.replaceState({}, '', forced);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      useRecaptchaNet
    >
      <BrowserRouter basename="/MelodiesWithMilly">
        <Layout />
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
