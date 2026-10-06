import React, { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../context/useTheme';
import { navSections } from '../pageSections';
import { zIndex } from '../zIndex';
import Logo from './Logo';

const navLinks = navSections.map(({ id, navLabel }) => ({ href: `#${id}`, label: navLabel }));

const navLinkClassName = 'text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`bg-white dark:bg-slate-900 shadow-sm sticky top-0 ${zIndex.header}`}>
      <nav aria-label="Main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* "#top" scrolls to the top of the page; the logo alt text names this link. */}
          <a href="#top">
            <Logo className="dark:brightness-0 dark:invert" />
          </a>

          <div className="flex items-center gap-4">
            <ul className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={navLinkClassName}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              type="button"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="md:hidden p-2 text-slate-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <ul id="mobile-menu" hidden={!mobileMenuOpen} className="md:hidden py-4 space-y-2">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`block py-2 ${navLinkClassName}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
