"use client";

import React, { forwardRef } from "react";
import { cn } from "../utils/helpers";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  containerClassName?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, className, id, containerClassName, ...props }, ref) => {
    const fallbackId = React.useId();
    const selectId = id || fallbackId;

    return (
      <div className={cn("relative w-full group", containerClassName)}>
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "peer w-full bg-transparent border-0 border-b-2 pt-5 pb-1 font-body-md text-on-surface outline-none transition-all duration-300 focus:ring-0 focus:border-primary appearance-none cursor-pointer",
            error ? "border-error focus:border-error" : "border-outline-variant focus:border-primary",
            className
          )}
          {...props}
        >
          <option value="" disabled hidden></option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-surface text-on-surface">
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom Chevron Indicator */}
        <span className="material-symbols-outlined absolute right-2 top-5 text-on-surface-variant pointer-events-none text-[18px]">
          arrow_drop_down
        </span>

        <label
          htmlFor={selectId}
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

Select.displayName = "Select";
