import React from 'react';
import Contact from '../components/Contact';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Work Together</h2>
        <p className="text-lg text-slate-600 mb-8">
          Interested in working together? Reach out to discuss your project needs.
        </p>

        <Contact buttonText="Get in Touch" />
      </div>
    </section>
  );
}

export default ContactSection;