import React from 'react';
import { site } from '../siteConfig';

// Computed once at load; render must stay pure.
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
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
