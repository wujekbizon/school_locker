"use client";

import { Toaster } from "react-hot-toast";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-center"
        toastOptions={{
          icon: "👏",
          style: {
            borderRadius: "10px",
            borderWidth: "1px",
            borderColor: "rgb(39, 39, 42)",
            background: "rgb(9 9 11)",
            color: "rgb(245 158 11)",
          },
        }}
      />
    </>
  );
}
