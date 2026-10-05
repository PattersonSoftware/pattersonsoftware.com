import React from 'react';
import Modal from './Modal';

interface WaitlistProps {
  productName: string;
}

// Placeholder until a real sign-up exists: the button only explains that the waitlist is coming.
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
      description="The waitlist is coming soon."
    />
  );
};

export default Waitlist;
