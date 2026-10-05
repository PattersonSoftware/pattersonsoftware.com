import { Mail } from 'lucide-react';
import React from 'react';

interface EmailLinkProps {
  email: string;
  subject?: string;
}

const EmailLink: React.FC<EmailLinkProps> = ({ email, subject }) => {
  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  return (
    <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
      <Mail className="w-5 h-5 text-blue-600" />
      <a href={href} className="hover:text-blue-600 underline">
        {email}
      </a>
    </div>
  );
};

export default EmailLink;
