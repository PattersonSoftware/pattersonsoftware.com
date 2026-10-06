import React from 'react';
import Contact from '../components/Contact';

// Deliberately not a <Section>: it holds the page's only <h1>, isn't a nav target, and uses larger
// spacing. Every other section should use <Section>.
const HeroSection: React.FC = () => {
  return (
    <section aria-labelledby="hero-heading" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-strong mb-6">
          Custom Solutions For Your Needs
        </h1>
        <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
          Helping teams build modern, robust, and scalable applications using proven architecture
          and design.
        </p>
        <Contact />
      </div>
    </section>
  );
};

export default HeroSection;
