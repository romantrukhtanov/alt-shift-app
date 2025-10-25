import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

type ToastProviderProps = {
  children: ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer position="top-right" autoClose={2500} newestOnTop pauseOnFocusLoss draggable={false} />
    </>
  );
}
