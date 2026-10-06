import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { zIndex } from '../zIndex';

interface ModalProps {
  // A single button element; Radix wires up its click, focus, and ARIA attributes.
  trigger: React.ReactElement;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ trigger, title, description, children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={`fixed inset-0 ${zIndex.modal} bg-black/50`} />
        <Dialog.Content
          className={`fixed ${zIndex.modal} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card rounded-lg p-6 w-[calc(100%-2rem)] max-w-md shadow-xl`}
        >
          <Dialog.Title className="text-2xl font-bold mb-4 text-strong">{title}</Dialog.Title>
          <Dialog.Description className="text-muted mb-6">{description}</Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <button
              type="button"
              className="mt-6 w-full bg-slate-100 dark:bg-slate-700 text-strong px-4 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
