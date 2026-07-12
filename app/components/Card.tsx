"use client";

import React from "react";
import { cn, formatPrice } from "../utils/helpers";

interface CardProps {
  id: string;
  name: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
  tags?: string[];
  badge?: string;
  onClick?: () => void;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
}

export const Card: React.FC<CardProps> = ({
  name,
  price,
  description,
  image,
  tags,
  badge,
  onClick,
  className,
  imageClassName,
  aspectRatio,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group flex flex-col justify-between h-full bg-transparent rounded-xl cursor-pointer select-none transition-all duration-300",
        className
      )}
    >
      <div className="w-full">
        {image && (
          <div
            className={cn(
              "relative w-full overflow-hidden rounded-xl bg-surface-container-low mb-6 shadow-ambient transition-all duration-500 group-hover:shadow-lifted",
              aspectRatio || "aspect-[4/5]",
              imageClassName
            )}
          >
            {/* Fallback overlay color */}
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-300 z-10" />

            {/* Custom Next.js Image loader */}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {badge && (
              <span className="absolute top-4 left-4 z-20 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                {badge}
              </span>
            )}
          </div>
        )}

        <div className="px-1">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-headline-sm text-headline-sm text-primary transition-colors group-hover:text-secondary">
              {name}
            </h3>
            {price !== undefined && (
              <span className="font-body-md text-on-surface-variant font-medium shrink-0 ml-2">
                {formatPrice(price)}
              </span>
            )}
          </div>

          {description && (
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-4">
              {description}
            </p>
          )}
        </div>
      </div>

      {tags && tags.length > 0 && (
        <div className="px-1 flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-variant text-primary text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
