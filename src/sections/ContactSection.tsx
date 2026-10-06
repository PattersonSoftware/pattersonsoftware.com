import React from 'react';
import Contact from '../components/Contact';
import Section from '../components/Section';
import { pageSections } from '../pageSections';

const ContactSection: React.FC = () => {
  return (
    <Section id={pageSections.contact.id} title="Let's Work Together">
      <div className="text-center">
        <p className="text-lg text-muted mb-8">
          Interested in working together? Reach out to discuss your project needs.
        </p>
        <Contact />
      </div>
    </Section>
  );
};

export default ContactSection;
