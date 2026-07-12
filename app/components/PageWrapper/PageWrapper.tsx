"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" // triggers slightly before scrolling fully in
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    // Find all elements marked for reveal transitions
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Instantly reveal first section (or top section) above the fold
    const firstSection = document.querySelector("section");
    if (firstSection && firstSection.classList.contains("reveal")) {
      firstSection.classList.add("active");
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]); // Re-observe when page transitions occur

  return <div className="flex-1 flex flex-col">{children}</div>;
};
