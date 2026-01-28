import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { House, User, BookOpen, Mail, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/', icon: <House size={14} /> },
    { name: 'About', href: '/about', icon: <User size={14} /> },
    { name: 'Blog', href: '/blog', icon: <BookOpen size={14} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={14} /> },
    { name: 'Saturday School', href: '/sat-school', icon: <GraduationCap size={14} />, active: true },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[99] flex justify-center py-[40px] px-4">
      <div className="relative flex items-center h-[45px] bg-black/75 rounded-full overflow-hidden shadow-[inset_2px_2px_1px_-2px_rgba(0,0,0,0.5),inset_-2px_-2px_1px_-2px_rgba(0,0,0,0.5)] border border-white/10 px-1">
        
        {/* Logo Section */}
        <div className="flex items-center justify-center w-[37px] h-[37px] rounded-full mx-1">
          <Link href="/" className="flex items-center justify-center w-full h-full rounded-full transition-transform hover:scale-105 active:scale-95">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/svgs/owF1UKTXjGXZEyUs1qLF6U0K2Iw-1.svg" 
              alt="Xcelens Logo" 
              width={40} 
              height={40}
              className="w-full h-full"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group ${
                link.active 
                  ? 'text-white opacity-100' 
                  : 'text-white/60 hover:text-white hover:opacity-100'
              }`}
            >
              <span className={`transition-transform duration-200 group-hover:scale-110 ${link.active ? 'text-white' : 'text-white/70'}`}>
                {link.icon}
              </span>
              <span className="text-[14px] font-medium tracking-wide whitespace-nowrap">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      
      {/* SVG Filters for "Liquid" effect as seen in HTML structure */}
      <svg width="0" height="0" className="absolute invisible">
        <filter id="liquidDrop" width="100%" height="100%">
          <feTurbulence baseFrequency="0.015" numOctaves="3" result="noise" seed="2" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feDisplacementMap in="blur" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </div>
  );
};

export default Navbar;