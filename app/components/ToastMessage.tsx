"use client";

import React from "react";
import { Toast, ToastType } from "../contexts/ToastContext";

interface ToastMessageProps {
  toast: Toast;
  onClose: (id: string) => void;
}

const toastStyles: Record<ToastType, { bg: string; text: string; icon: string; border: string }> = {
  success: {
    bg: "bg-surface-container-low",
    text: "text-primary",
    icon: "check_circle",
    border: "border-secondary/40",
  },
  error: {
    bg: "bg-red-50",
    text: "text-error",
    icon: "error",
    border: "border-error/30",
  },
  info: {
    bg: "bg-surface-container-low",
    text: "text-primary",
    icon: "info",
    border: "border-outline-variant",
  },
  warning: {
    bg: "bg-orange-50",
    text: "text-amber-900",
    icon: "warning",
    border: "border-amber-200",
  },
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ toast, onClose }) => {
  const styles = toastStyles[toast.type];

  return (
    <div
      className={`flex items-center gap-3 px-5 py-4 rounded-xl border ${styles.bg} ${styles.text} ${styles.border} shadow-lifted animate-fade-in transition-all duration-300 max-w-sm`}
      role="alert"
    >
      <span className="material-symbols-outlined text-[20px] shrink-0">{styles.icon}</span>
      <p className="font-body-md text-sm font-medium pr-4">{toast.message}</p>
      <button
        onClick={() => onClose(toast.id)}
        className="ml-auto text-on-surface-variant hover:text-primary transition-colors focus:outline-none shrink-0 cursor-pointer"
        aria-label="Close"
      >
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
  );
};
