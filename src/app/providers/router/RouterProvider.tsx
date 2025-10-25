import { RouterProvider as Provider } from 'react-router';

import { router } from './router';

export function RouterProvider() {
  return <Provider router={router} />;
}
