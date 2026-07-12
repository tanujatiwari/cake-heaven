"use client";

import React from "react";
import { ToastProviderState, useToast } from "../contexts/ToastContext";
import { ToastMessage } from "./ToastMessage";

const ToastList: React.FC = () => {
  const { toasts, hideToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 max-w-sm w-full">
      {toasts.map((toast) => (
        <ToastMessage key={toast.id} toast={toast} onClose={hideToast} />
      ))}
    </div>
  );
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ToastProviderState>
      {children}
      <ToastList />
    </ToastProviderState>
  );
};
