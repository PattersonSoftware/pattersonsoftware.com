import React from 'react';
import Contact from '../components/Contact';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 role="heading" className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Let's Work Together</h2>
        <p role="paragraph" className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Interested in working together? Reach out to discuss your project needs.
        </p>

        <Contact buttonText="Get in Touch" />
      </div>
    </section>
  );
}

export default ContactSection;