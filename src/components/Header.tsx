import React, { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <a role="button" href="#" aria-label="Patterson Software Logo">
            <Logo className="dark:brightness-0 dark:invert" />
          </a>

          {/* Right-side: desktop nav + theme toggle + mobile hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a role="link" href="#services" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Services</a>
              <a role="link" href="#about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">About</a>
              <a role="link" href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Contact</a>
            </div>

            <button
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              aria-label="Menu"
              className="md:hidden p-2 text-slate-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a role="link" href="#services" className="block py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a role="link" href="#about" className="block py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a role="link" href="#contact" className="block py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
