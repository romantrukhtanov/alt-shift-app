const APPLICATIONS_ROOT = '/applications';

export const ROUTES = {
  root: '/',
  applications: {
    root: APPLICATIONS_ROOT,
    create: `${APPLICATIONS_ROOT}/create`,
    details: (applicationId: string) => `${APPLICATIONS_ROOT}/${applicationId}`,
  },
};
