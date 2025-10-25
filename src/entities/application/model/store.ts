import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import { MAX_GENERATION_COUNT } from '@/shared/constants';
import type { BaseJobDocument } from '@/shared/types';

import type { Application } from './types';

type ApplicationPatch = Omit<Application, keyof BaseJobDocument>;

interface ApplicationState {
  applications: Application[];
  goal: number;
  add: (app: ApplicationPatch) => Application;
  update: (id: string, patch: ApplicationPatch) => Application | null;
  remove: (id: string) => void;
}

export const useApplicationStore = create<ApplicationState>()(
  devtools(
    persist(
      set => ({
        applications: [],
        goal: MAX_GENERATION_COUNT,

        add: appData => {
          const id = crypto.randomUUID();
          const app: Application = {
            ...appData,
            id,
            type: 'application',
            createdAt: new Date().toISOString(),
          };

          set(state => ({
            applications: [...state.applications, app],
          }));

          return app;
        },

        remove: id => {
          set(state => ({
            applications: state.applications.filter(app => app.id !== id),
          }));
        },

        update: (id, patch) => {
          let updatedApp: Application | null = null;

          set(state => {
            const newApps = state.applications.map(app => {
              if (app.id === id) {
                updatedApp = { ...app, ...patch };
                return updatedApp;
              }
              return app;
            });

            return { applications: newApps };
          });

          return updatedApp;
        },
      }),
      { name: 'applications' },
    ),
  ),
);
