import { useEffect, useState } from 'react';

type Breakpoints = {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  base?: number;
};

export function useResponsiveItemsPerView(breakpoints: Breakpoints) {
  const [itemsPerView, setItemsPerView] = useState(breakpoints.xl || 1);

  useEffect(() => {
    function updateItemsPerView() {
      const width = window.innerWidth;

      if (width >= 1280) setItemsPerView(breakpoints.xl ?? 1);
      else if (width >= 1024) setItemsPerView(breakpoints.lg ?? breakpoints.xl ?? 1);
      else if (width >= 768)
        setItemsPerView(breakpoints.md ?? breakpoints.lg ?? breakpoints.xl ?? 1);
      else if (width >= 640)
        setItemsPerView(breakpoints.sm ?? breakpoints.md ?? breakpoints.lg ?? 1);
      else setItemsPerView(breakpoints.base ?? breakpoints.sm ?? breakpoints.md ?? 1);
    }

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [breakpoints]);

  return itemsPerView;
}
