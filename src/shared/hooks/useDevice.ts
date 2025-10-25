import { useMediaQuery } from 'react-responsive';

import { DESKTOP_MEDIA_QUERY, MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from '@/shared/constants';

type UseDeviceResult = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export function useDevice(): UseDeviceResult {
  const isMobile = useMediaQuery({ query: MOBILE_MEDIA_QUERY });
  const isTablet = useMediaQuery({ query: TABLET_MEDIA_QUERY });
  const isDesktop = useMediaQuery({ query: DESKTOP_MEDIA_QUERY });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
