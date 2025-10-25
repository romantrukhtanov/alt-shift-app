import { useRef, useCallback } from 'react';

export function useScrollTo<TElement extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<TElement | null>(null);

  const scrollTo = useCallback((options?: ScrollIntoViewOptions) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', ...(options || {}) });
    } else {
      console.warn('useScrollTo: element not found');
    }
  }, []);

  return { ref, scrollTo };
}
