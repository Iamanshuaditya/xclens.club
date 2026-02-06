"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { House, User, BookOpen, Mail, GraduationCap, Beaker, Star, Users, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, DOMKeyframesDefinition } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: <House size={20} /> },
    { name: 'About', href: '/about', icon: <User size={20} /> },
    { name: 'Labs', href: '/labs', icon: <Beaker size={24} /> },
    { name: 'Fellowship', href: '/si-fellowship', icon: <Star size={24} /> },
    { name: 'Workshops', href: '/workshops', icon: <BookOpen size={20} /> },
    { name: 'Clubs', href: '/clubs', icon: <Users size={20} /> },
    { name: 'Saturday School', href: '/sat-school', icon: <GraduationCap size={20} /> },
    { name: 'Blog', href: '/blog', icon: <BookOpen size={20} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={20} /> },
  ];

  // Items visible on Desktop Top Bar (Matching user request)
  const desktopItems = [
    { name: 'Home', href: '/', icon: <House size={14} /> },
    { name: 'About', href: '/about', icon: <User size={14} /> },
    { name: 'Blog', href: '/blog', icon: <BookOpen size={14} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={14} /> },
    { name: 'Saturday School', href: '/sat-school', icon: <GraduationCap size={14} /> },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[999] flex justify-center p-4 md:p-[40px] pointer-events-none">
        <div className="pointer-events-auto">
          <header className={`relative flex items-center h-[50px] md:h-[45px] w-auto transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
            {/* Glass Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10" />
            </div>

            {/* Nav Content */}
            <div className="relative flex items-center justify-between w-full h-full px-2 pr-4 md:pr-4 gap-4 md:gap-8">

              {/* Logo */}
              <a href="./" className="relative flex items-center justify-center w-[36px] h-[36px] hover:bg-white/10 rounded-full transition-all hover:scale-105 ml-1">
                <Image
                  src="https://framerusercontent.com/images/owF1UKTXjGXZEyUs1qLF6U0K2Iw.svg"
                  alt="Xcelens Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>

              {/* Desktop Links (Hidden on Mobile) */}
              <nav className="hidden md:flex items-center gap-0.5">
                {desktopItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white/10 transition-all"
                  >
                    <span className="text-white/70 group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-white font-sans tracking-tight">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>

              {/* Mobile/Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors text-white"
              >
                <span className="text-xs font-medium uppercase tracking-widest opacity-60 hidden md:block">Menu</span>
                <Menu size={20} className="md:w-4 md:h-4" />
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[1000] bg-[#050505] text-white flex flex-col"
          >
            {/* Header in Overlay */}
            <div className="flex justify-between items-center p-6 md:p-12">
              <a href="./" className="flex items-center gap-3">
                <div className="w-10 h-10  rounded-full flex items-center justify-center">
                  <Image
                    src="https://framerusercontent.com/images/owF1UKTXjGXZEyUs1qLF6U0K2Iw.svg"
                    alt="Xcelens Logo"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="font-serif text-xl tracking-tight">Xcelens</span>
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  {navItems.slice(0, 5).map((item, idx) => ( // First half
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group flex items-center justify-between text-4xl md:text-6xl font-serif border-b border-white/10 py-6 hover:pl-8 transition-all hover:text-white/60"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-xs font-mono text-white/30 hidden md:inline-block">0{idx + 1}</span>
                        {item.name}
                      </span>
                      <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </motion.a>
                  ))}
                </div>
                <div className="space-y-4">
                  {navItems.slice(5).map((item, idx) => ( // Second half
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (idx + 5) * 0.1 }}
                      className="group flex items-center justify-between text-4xl md:text-6xl font-serif border-b border-white/10 py-6 hover:pl-8 transition-all hover:text-white/60"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-xs font-mono text-white/30 hidden md:inline-block">0{idx + 6}</span>
                        {item.name}
                      </span>
                      <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer in Overlay */}
            <div className="p-6 md:p-12 flex justify-between items-end text-white/40 text-sm">
              <div>
                <p>Bengaluru, India</p>
                <p>est. 2026</p>
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;