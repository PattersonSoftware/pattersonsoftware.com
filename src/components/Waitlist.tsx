import React from 'react';
import { site } from '../siteConfig';
import EmailLink from './EmailLink';
import Modal from './Modal';

interface WaitlistProps {
  productName: string;
}

// Placeholder until a real sign-up exists: points interested visitors to the inquiries inbox.
const Waitlist: React.FC<WaitlistProps> = ({ productName }) => {
  return (
    <Modal
      trigger={
        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          Join the List
        </button>
      }
      title={`${productName} Waitlist`}
      description={`The waitlist is coming soon. In the meantime, email us to be notified when ${productName} is available.`}
    >
      <EmailLink email={site.contactEmail} subject={`${productName} waitlist`} />
    </Modal>
  );
};

export default Waitlist;
