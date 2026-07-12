"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../Button";
import { NAVIGATION_LINKS } from "../../utils/constants";
import { cn } from "../../utils/helpers";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "w-full sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-surface/90 backdrop-blur-md shadow-sm border-b border-outline-variant/30 py-3"
            : "bg-surface border-b border-outline-variant/10 py-4"
        )}
      >
        <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-headline-sm text-primary tracking-tight transition-all duration-300 hover:opacity-90"
          >
            Cake Heaven
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => {
              // Exact matches or subset queries
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "font-label-md text-label-md transition-all duration-200 border-b-2 pb-0.5",
                    isActive
                      ? "text-primary border-primary font-bold"
                      : "text-on-surface-variant/80 border-transparent hover:text-primary hover:border-outline-variant"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact?type=general">
              <Button variant="secondary" size="sm">
                Contact Us
              </Button>
            </Link>
            <Link href="/contact?type=booking">
              <Button variant="primary" size="sm">
                Schedule a Meeting
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-4">
            <Link href="/contact?type=booking" className="hidden sm:inline-block">
              <Button variant="primary" size="sm">
                Schedule
              </Button>
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-1 focus:outline-none md:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-primary/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 bottom-0 right-0 z-45 w-4/5 max-w-sm bg-surface border-l border-outline-variant/30 shadow-lifted px-6 py-20 flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-display text-2xl text-primary tracking-tight mb-8"
          >
            Cake Heaven
          </Link>

          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-headline-sm text-xl py-2",
                  isActive ? "text-primary font-bold border-l-4 border-primary pl-3 -ml-3" : "text-on-surface-variant"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col space-y-4 pt-6 border-t border-outline-variant/20">
          <Link href="/contact?type=general" onClick={() => setIsOpen(false)}>
            <Button variant="secondary" className="w-full py-3.5">
              Contact Us
            </Button>
          </Link>
          <Link href="/contact?type=booking" onClick={() => setIsOpen(false)}>
            <Button variant="primary" className="w-full py-3.5">
              Schedule a Meeting
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
