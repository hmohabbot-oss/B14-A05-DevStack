import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-white mt-24 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center text-white font-bold text-sm">
                DS
              </div>
              <span className="font-extrabold text-xl text-gray-900 tracking-tight">Dev Stack</span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-gray-600 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition">LinkedIn</a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h5 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Product</h5>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-gray-900 transition">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900 transition">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900 transition">Projects</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h5 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Company</h5>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-gray-900 transition">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900 transition">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900 transition">Careers</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h5 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Legal</h5>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#privacy" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900 transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#terms" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};