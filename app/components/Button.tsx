"use client";

import React from "react";
import { cn } from "../utils/helpers";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "text";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  isLoading,
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-label-md rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary/50 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-honey-gold text-on-primary font-bold shadow-md hover:bg-honey-gold-hover hover:scale-102 active:scale-98",
    secondary: "border-[1.5px] border-primary text-primary hover:bg-surface-variant active:bg-surface-container",
    dark: "bg-primary text-on-primary font-bold hover:bg-primary-container active:bg-black",
    text: "text-primary hover:underline px-0 py-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-label-md",
    lg: "px-8 py-4 text-label-md font-bold shadow-lg",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}

      {!isLoading && icon && iconPosition === "left" && (
        <span className="material-symbols-outlined text-[18px] mr-2 shrink-0">{icon}</span>
      )}

      <span>{children}</span>

      {!isLoading && icon && iconPosition === "right" && (
        <span className="material-symbols-outlined text-[18px] ml-2 shrink-0">{icon}</span>
      )}
    </button>
  );
};
