import { useShallow } from 'zustand/react/shallow';

import { useApplicationStore } from './store';
import type { Application } from './types';

export const useApplications = () => useApplicationStore(state => state.applications);

export const useApplicationById = (id?: string): Application | undefined =>
  useApplicationStore(state => state.applications.find(app => app.id === id));

export const useGoal = () => useApplicationStore(state => state.goal);

export const useApplicationActions = () =>
  useApplicationStore(
    useShallow(state => ({
      add: state.add,
      update: state.update,
      remove: state.remove,
    })),
  );

export const useGoalProgress = () => {
  const { applications, goal } = useApplicationStore(
    useShallow(state => ({
      applications: state.applications,
      goal: state.goal,
    })),
  );

  const count = applications.length;
  const isReached = count >= goal;

  return { count, goal, isReached };
};
