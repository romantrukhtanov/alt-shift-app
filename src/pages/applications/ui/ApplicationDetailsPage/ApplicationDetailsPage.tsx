import { useNavigate, useParams } from 'react-router';

import { useApplicationById } from '@/entities/application';
import { NotFoundPage } from '@/pages/not-found';
import { ROUTES } from '@/shared/routes';
import { ApplicationGenerator } from '@/widgets/applications';

export function ApplicationDetailsPage() {
  const { id } = useParams();
  const application = useApplicationById(id);
  const navigate = useNavigate();

  if (!application) {
    return <NotFoundPage />;
  }

  return <ApplicationGenerator application={application} onCreateClick={() => navigate(ROUTES.applications.create)} />;
}
