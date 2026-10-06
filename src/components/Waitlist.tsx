import React from 'react';
import { site } from '../siteConfig';
import EmailLink from './EmailLink';
import Modal from './Modal';
import PrimaryButton from './PrimaryButton';

interface WaitlistProps {
  productName: string;
}

// Placeholder until a real sign-up exists: points interested visitors to the inquiries inbox.
const Waitlist: React.FC<WaitlistProps> = ({ productName }) => {
  return (
    <Modal
      trigger={<PrimaryButton>Join the List</PrimaryButton>}
      title={`${productName} Waitlist`}
      description={`The waitlist is coming soon. In the meantime, email us to be notified when ${productName} is available.`}
    >
      <EmailLink email={site.contactEmail} subject={`${productName} waitlist`} />
    </Modal>
  );
};

export default Waitlist;
