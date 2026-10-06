import React from 'react';
import { site } from '../siteConfig';
import EmailLink from './EmailLink';
import Modal from './Modal';
import PrimaryButton from './PrimaryButton';

const Contact: React.FC = () => {
  return (
    <Modal
      trigger={<PrimaryButton size="lg">Get in Touch</PrimaryButton>}
      title="Contact Me"
      description="Ready to discuss your project? Let's connect."
    >
      <EmailLink email={site.contactEmail} />
    </Modal>
  );
};

export default Contact;
