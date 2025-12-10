import React from 'react';
import Contact from '../components/Contact';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 role="heading" className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Custom Solutions For Your Needs!
          </h1>
          <p role="paragraph" className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Helping teams build modern, robust, and scalable applications using proven architecture and design.
          </p>
          <Contact buttonText="Get in Touch" />
        </div>
      </section>
  );
}

export default HeroSection;
