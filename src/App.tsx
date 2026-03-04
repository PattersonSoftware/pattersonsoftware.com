
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesSection from './sections/ServicesSection';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <Header />

        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;
