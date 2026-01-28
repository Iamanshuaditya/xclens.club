import React from 'react';
import Image from 'next/image';

const Header = () => {
  const navLinks = [
    {
      name: 'Home',
      href: '/',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: 'About',
      href: '/about',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0.5-5" />
          <path d="M8 7h6" />
          <path d="M8 11h6" />
        </svg>
      ),
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      name: 'Saturday School',
      href: '/sat-school',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="framer-ntd4y5 pointer-events-none fixed left-0 right-0 top-0 z-[9] flex h-[125px] w-full items-start justify-center p-[40px]">
      <div className="pointer-events-auto">
        <header className="framer-qJJrW framer-d7zb2p framer-v-d7zb2p relative flex h-[45px] w-fit min-w-[534px]">
          <div className="framer-1v9e51e relative flex h-full w-full items-center overflow-hidden rounded-[5000px] border border-white/5 bg-black/80 shadow-[inset_2px_2px_1px_-2px_rgba(0,0,0,0.5),inset_-2px_-2px_1px_-2px_rgba(0,0,0,0.5)] transition-all duration-300 backdrop-blur-[8px]">
            {/* Liquid drop SVG filter used in original DOM - implemented via background overlay if needed, but standard blur/opacity matches visuals */}
            <div className="framer-yqrqas relative flex h-full w-full items-center gap-[4px] px-[4px]">
              <div className="framer-1vaaw86 flex h-[37px] w-[37px] items-center justify-center pl-[4px]">
                <a
                  href="/"
                  className="framer-yrqdn flex h-[37px] w-[37px] items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative h-[40px] w-[40px]">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/svgs/owF1UKTXjGXZEyUs1qLF6U0K2Iw-1.svg"
                      alt="Xcelens Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </a>
              </div>

              <nav className="framer-1kervxk flex h-full items-center gap-[4px] px-[8px]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group relative flex h-[32px] items-center gap-[8px] rounded-full px-[12px] transition-all duration-300 hover:bg-white/10"
                  >
                    <span className="text-white/70 transition-colors duration-300 group-hover:text-white">
                      {link.icon}
                    </span>
                    <span className="font-sans text-[14px] font-medium tracking-[0.05em] text-white/70 transition-colors duration-300 group-hover:text-white">
                      {link.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;