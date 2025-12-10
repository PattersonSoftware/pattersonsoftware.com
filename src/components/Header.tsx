import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a href="#services" className="block py-2 text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="block py-2 text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="block py-2 text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
