import React from 'react';
import Image from 'next/image';
import { House, User, BookOpen, Mail, GraduationCap, Beaker, Star, Users } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/', icon: <House size={14} /> },
    { name: 'About', href: '/about', icon: <User size={14} /> },
    { name: 'Blog', href: '/blog', icon: <BookOpen size={14} /> },
    { name: 'Labs', href: '/labs', icon: <Beaker size={14} /> },
    { name: 'Fellowship', href: '/si-fellowship', icon: <Star size={14} /> },
    { name: 'Workshops', href: '/workshops', icon: <BookOpen size={14} /> },
    { name: 'Clubs', href: '/clubs', icon: <Users size={14} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={14} /> },
    { name: 'Sat Sch', href: '/sat-school', icon: <GraduationCap size={14} /> },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[999] flex justify-center pointer-events-none p-[40px]">
      <div className="pointer-events-auto">
        <header className="relative flex items-center h-[45px] w-auto min-w-[534px]">
          {/* Glassmorphism Background Container */}
          <div className="absolute inset-0 rounded-[5000px] overflow-hidden">
            {/* The actual dark glass background layer */}
            <div
              className="absolute inset-0 bg-[rgba(0,0,0,0.75)] backdrop-blur-[10px]"
              style={{
                boxShadow: 'inset 2px 2px 1px -2px rgba(0, 0, 0, 0.5), inset -2px -2px 1px -2px rgba(0, 0, 0, 0.5)'
              }}
            />
          </div>

          {/* Navigation Content */}
          <div className="relative flex items-center justify-between w-full h-full px-[4px] py-[4px]">
            {/* Circular Logo Area */}
            <div className="flex items-center justify-center pl-[2px]">
              <a
                href="./"
                className="relative flex items-center justify-center w-[37px] h-[37px] rounded-full overflow-hidden transition-transform hover:scale-105"
              >
                <div className="w-full h-full  flex items-center justify-center">
                  <Image
                    src="https://framerusercontent.com/images/owF1UKTXjGXZEyUs1qLF6U0K2Iw.svg"
                    alt="Xcelens Logo"
                    width={40}
                    height={40}
                    className="w-[20px] h-[20px] object-contain"
                  />
                </div>
              </a>
            </div>

            {/* Menu Items */}
            <nav className="flex items-center gap-[4px] pr-[12px]">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center gap-2 px-[12px] py-[8px] transition-colors"
                >
                  <span className="text-white/70 group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-[14px] font-medium text-white font-sans tracking-tight">
                    {item.name}
                  </span>
                  {/* Subtle hover effect if needed, though clean in screenshot */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all group-hover:w-[70%]" />
                </a>
              ))}
            </nav>
          </div>
        </header>
      </div>

      {/* SVG filter for the specific liquid drop effect if required by Framer styles 
            (referenced in HTML but usually masked by the background div) */}
      <svg className="absolute w-0 h-0 invisible" aria-hidden="true">
        <filter id="liquidDrop">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
          <feDisplacementMap in="blur" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </div>
  );
};

export default Navbar;