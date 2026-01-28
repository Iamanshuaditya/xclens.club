import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-[80px] px-8 md:px-16 flex flex-col items-center">
      <div className="container max-w-[1200px] w-full">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-[100px]">
          {/* Email Section */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-sans font-medium text-[#999999] opacity-80">
              Have a question? Email me at
            </p>
            <a 
              href="mailto:neelmani@xcelens.club" 
              className="font-display text-[24px] sm:text-[32px] md:text-[40px] leading-[1.2] hover:opacity-70 transition-opacity"
            >
              neelmani@xcelens.club
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <Link 
              href="/" 
              className="font-display text-[24px] sm:text-[28px] md:text-[32px] hover:opacity-70 transition-opacity"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="font-display text-[24px] sm:text-[28px] md:text-[32px] hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="font-display text-[24px] sm:text-[28px] md:text-[32px] hover:opacity-70 transition-opacity"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="font-display text-[24px] sm:text-[28px] md:text-[32px] hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-[12px] font-sans text-[#999999]/60">
            © 2026 Xcelens All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link 
              href="/privacy" 
              className="text-[12px] font-sans text-[#999999]/60 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/cookies" 
              className="text-[12px] font-sans text-[#999999]/60 hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;