"use client";

import React, { forwardRef } from "react";
import { cn } from "../utils/helpers";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, placeholder = " ", type = "text", containerClassName, ...props }, ref) => {
    const fallbackId = React.useId();
    const inputId = id || fallbackId;

    return (
      <div className={cn("relative w-full group", containerClassName)}>
        <input
          ref={ref}
          type={type}
          id={inputId}
          placeholder={placeholder}
          className={cn(
            "peer w-full bg-transparent border-0 border-b-2 pt-4 pb-1 font-body-md text-on-surface outline-none transition-all duration-300 focus:ring-0 focus:border-primary",
            error ? "border-error focus:border-error" : "border-outline-variant focus:border-primary",
            className
          )}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "absolute left-0 top-4 text-on-surface-variant duration-300 transform origin-[0] pointer-events-none",
            "scale-75 -translate-y-6",
            "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0",
            "peer-focus:scale-75 peer-focus:-translate-y-6",
            error ? "peer-focus:text-error text-error/80" : "peer-focus:text-primary"
          )}
        >
          {label}
        </label>
        {error && (
          <p className="mt-1.5 text-xs text-error font-body-md font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
