"use client";

import React from "react";
import Image from "next/image";
import { Home, User, BookOpen, Mail, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Navigation Component
 * 
 * Features a floating pill-shaped dark navigation bar with a translucent background.
 * Includes the brand logo and menu links with active state styling for 'Blog'.
 */
const Navigation = () => {
  const [activePath, setActivePath] = React.useState("/blog");

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Saturday School", href: "/sat-school", icon: GraduationCap },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[99] flex justify-center p-10 pointer-events-none">
      <header className="pointer-events-auto">
        <div
          className="relative flex items-center bg-[rgba(0,0,0,0.8)] backdrop-blur-[12px] h-[45px] px-1 rounded-full border border-white/10 shadow-[inset_2px_2px_1px_-2px_rgba(0,0,0,0.5),inset_-2px_-2px_1px_-2px_rgba(0,0,0,0.5)]"
        >
          {/* Brand Logo Wrapper */}
          <div className="flex items-center justify-center h-[37px] w-[37px] ml-1">
            <a
              href="/"
              className="relative flex items-center justify-center w-[37px] height-[37px] rounded-full transition-opacity hover:opacity-80"
              aria-label="Home"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/svgs/owF1UKTXjGXZEyUs1qLF6U0K2Iw-1.svg"
                alt="Xcelens Logo"
                width={20}
                height={20}
                className="select-none"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center px-4 gap-1">
            {navLinks.map((link) => {
              const isActive = activePath === link.href;
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    // Prevent navigation for demo stability but allow state update
                    // In real app, standard <a> behavior or <Link> would be used
                    setActivePath(link.href);
                  }}
                  className={cn(
                    "relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 group",
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  <Icon size={14} strokeWidth={2} className="shrink-0" />
                  <span className="text-[14px] font-medium tracking-[0.02em] whitespace-nowrap">
                    {link.name}
                  </span>

                  {/* Active Indicator Bar - Optional styling refinement suggested by high level design */}
                  {isActive && (
                    <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-40" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Background/SVG Filter used in original for liquid drop effects if needed */}
      <svg width="0" height="0" className="absolute invisible">
        <filter id="liquidDrop" width="100%" height="100%">
          <feTurbulence baseFrequency="0.01" numOctaves="3" result="noise" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feDisplacementMap in="blur" in2="noise" scale="5" />
        </filter>
      </svg>
    </div>
  );
};

export default Navigation;