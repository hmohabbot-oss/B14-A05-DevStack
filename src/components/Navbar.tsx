import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile: Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Left: Brand Logo & Title */}
<div className="flex items-center gap-3">
  <img 
    src="/logo-text.png" 
    alt="Dev Stack" 
    className="h-9 w-auto object-contain cursor-pointer"
  />
</div>

          {/* Center: Nav links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold brand-gradient-text transition">Home</a>
            <a href="#technologies" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Technologies</a>
            <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Projects</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">About</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Contact</a>
          </nav>

          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-3 py-2 transition">
              Sign In
            </button>
            <button className="text-sm font-semibold text-white brand-gradient px-5 py-2.5 rounded-full hover:opacity-90 shadow-sm transition">
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-5 space-y-2">
          <a href="#home" className="block text-base font-semibold text-pink-600 py-1">Home</a>
          <a href="#technologies" className="block text-base font-medium text-gray-700 py-1">Technologies</a>
          <a href="#projects" className="block text-base font-medium text-gray-700 py-1">Projects</a>
          <a href="#about" className="block text-base font-medium text-gray-700 py-1">About</a>
          <a href="#contact" className="block text-base font-medium text-gray-700 py-1">Contact</a>
        </div>
      )}
    </header>
  );
};