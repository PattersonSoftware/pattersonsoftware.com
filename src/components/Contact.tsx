import { Mail } from 'lucide-react';
import React from 'react';
import { site } from '../siteConfig';
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
      <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
        <Mail className="w-5 h-5 text-blue-600" />
        <a href={`mailto:${contactEmail}`} className="hover:text-blue-600 underline">
          {contactEmail}
        </a>
      </div>
    </Modal>
  );
};

export default Contact;
