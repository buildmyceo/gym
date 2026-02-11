import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Facility } from './components/Facility';
import { Membership } from './components/Membership';
import { Booking } from './components/Booking';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen">
      {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}
      
      {/* Main content is rendered but locked from scrolling during splash */}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <Philosophy />
          <Services />
          <Facility />
          <Membership />
          <Booking />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;