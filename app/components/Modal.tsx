"use client";

import React, { useEffect } from "react";
import { cn } from "../utils/helpers";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={cn(
          "relative z-10 w-full max-w-lg bg-surface border border-outline-variant/30 rounded-xl shadow-lifted overflow-hidden transform scale-100 transition-all duration-300",
          className
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant/20">
          {title && (
            <h3 className="font-headline-sm text-headline-sm text-primary">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="ml-auto text-on-surface-variant hover:text-primary transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-160px)] custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};
