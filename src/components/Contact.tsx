import React from 'react';
import { site } from '../siteConfig';
import EmailLink from './EmailLink';
import Modal from './Modal';

interface ContactProps {
  buttonText?: string;
  contactEmail?: string;
  dialogTitle?: string;
  dialogText?: string;
}

const Contact: React.FC<ContactProps> = ({
  buttonText = 'Contact Me',
  contactEmail = site.contactEmail,
  dialogTitle = 'Contact Me',
  dialogText = "Ready to discuss your project? Let's connect.",
}) => {
  return (
    <Modal
      trigger={
        <button
          type="button"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          {buttonText}
        </button>
      }
      title={dialogTitle}
      description={dialogText}
    >
      <EmailLink email={contactEmail} />
    </Modal>
  );
};

export default Contact;
