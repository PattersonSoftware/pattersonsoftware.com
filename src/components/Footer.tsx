import React from 'react';
import { site } from '../siteConfig';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-400">
          © {site.foundedYear} - {currentYear} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
