"use client";

import React from "react";
import Link from "next/link";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "../../utils/svgs";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-12">
        <div className="max-w-xs">
          <Link href="/" className="font-display text-2xl text-primary tracking-tight mb-4 inline-block">
            Cake Heaven
          </Link>
          <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
            Handcrafting moments of sweetness with tradition, care, and the finest organic ingredients.
          </p>
        </div>
        
        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row gap-x-16 gap-y-8">
          <div>
            <h4 className="font-display text-xs font-bold text-primary mb-4 uppercase tracking-widest">Explore Menu</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Artisanal Cakes", href: "/cakes" },
                { label: "Fresh Pastries", href: "/pastries" },
                { label: "Cookies & Bread", href: "/cookies" },
                { label: "Product Gallery", href: "/gallery" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-label-md text-xs text-on-surface-variant hover:text-primary hover:underline transition-colors decoration-secondary decoration-2 underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-xs font-bold text-primary mb-4 uppercase tracking-widest">Information</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Book a Meeting", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-label-md text-xs text-on-surface-variant hover:text-primary hover:underline transition-colors decoration-secondary decoration-2 underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-12 pt-8 border-t border-outline-variant/10 text-center md:text-left">
        <p className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">
          © {new Date().getFullYear()} Cake Heaven. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
