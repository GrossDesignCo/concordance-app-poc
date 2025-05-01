import { useMediaQuery } from './useMediaQuery';

export const useMediaBreakpoints = () => {
  const isDesktop = useMediaQuery('(min-width: 80ch)');
  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isLargeDesktop = useMediaQuery('(min-width: 160ch)');

  return {
    isDesktop,
    isLandscape,
    isLargeDesktop,
  };
};
