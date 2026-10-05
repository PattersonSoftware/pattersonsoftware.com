import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesSection from './sections/ServicesSection';
import ProductsSection from './sections/ProductsSection';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-white focus:text-slate-900 focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main" tabIndex={-1} className="focus:outline-none">
          <HeroSection />
          <ServicesSection />
          <ProductsSection />
          <AboutSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
