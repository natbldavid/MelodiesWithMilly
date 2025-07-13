// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Layout from './layout/layout';
import './index.css';

// —––––––– preserve deep‐link if coming from 404.html –––––––—
const params = new URLSearchParams(window.location.search);
const forced = params.get('path');
if (forced) {
  // replace the “?path=” URL with the real one so Router sees it
  window.history.replaceState({}, '', forced);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <BrowserRouter basename="/MelodiesWithMilly">
        <Layout />
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
