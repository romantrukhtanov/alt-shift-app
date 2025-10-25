import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'unfonts.css';
import '@/app/styles/globals.css';

import { RouterProvider, ToastProvider } from '../providers';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    <ToastProvider>
      <RouterProvider />
    </ToastProvider>
  </StrictMode>,
);
