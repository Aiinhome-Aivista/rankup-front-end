import React, { createContext, useContext, useRef } from "react";
import { Toast } from "primereact/toast";

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const toast = useRef(null);

  const showToast = (severity, summary, detail, life = 3000) => {
    if (toast.current) {
      toast.current.show({ severity, summary, detail, life });
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast ref={toast} position="top-right" />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
