import React from 'react';
import HeroSection from './components/HeroSection';
import AboutServices from './components/AboutServices';
import WorkSection from './components/WorkSection';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans antialiased">
      <HeroSection />
      <AboutServices />
      <WorkSection />
      <ContactFooter />
    </div>
  );
}

export default App;
