import { createBrowserRouter, Navigate } from 'react-router';

import { AppLayout } from '@/app/layout';
import { ApplicationsPage, CreateApplicationPage, ApplicationDetailsPage } from '@/pages/applications';
import { NotFoundPage } from '@/pages/not-found';
import { ROUTES } from '@/shared/routes';

import { ErrorBoundary } from './ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Navigate to={ROUTES.applications.root} replace /> },
      { path: ROUTES.applications.root, element: <ApplicationsPage /> },
      { path: ROUTES.applications.create, element: <CreateApplicationPage /> },
      { path: ROUTES.applications.details(':id'), element: <ApplicationDetailsPage /> },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
