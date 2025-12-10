import React from 'react';
import Contact from '../components/Contact';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Expert Software Architecture & Leadership
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Specialized consulting in .NET and Python/Django development, helping teams build robust, scalable applications through proven architecture and mentorship.
          </p>
          <Contact buttonText="Get in Touch" />
        </div>
      </section>
  );
}

export default HeroSection;
