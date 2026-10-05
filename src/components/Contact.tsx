import * as Dialog from '@radix-ui/react-dialog';
import { Mail } from 'lucide-react';
import React from 'react';
import { site } from '../siteConfig';

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
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          {buttonText}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-lg p-6 w-[calc(100%-2rem)] max-w-md shadow-xl">
          <Dialog.Title className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
            {dialogTitle}
          </Dialog.Title>
          <Dialog.Description className="text-slate-600 dark:text-slate-400 mb-6">
            {dialogText}
          </Dialog.Description>
          <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
            <Mail className="w-5 h-5 text-blue-600" />
            <a href={`mailto:${contactEmail}`} className="hover:text-blue-600 underline">
              {contactEmail}
            </a>
          </div>
          <Dialog.Close asChild>
            <button
              type="button"
              className="mt-6 w-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Contact;
