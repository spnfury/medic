import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/HomePage';
import TermsOfUse from '@/pages/TermsOfUse';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import AdminPage from '@/pages/AdminPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </script>
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terminos-de-uso" element={<TermsOfUse />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;