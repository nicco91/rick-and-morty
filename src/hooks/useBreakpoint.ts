import { useEffect, useState } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';

type ActiveBreakpoints = Record<keyof DefaultTheme['breakpoints'], boolean>;

export default function useBreakpoint() {
  const {
    breakpoints: { mobile, tablet, tabletLandscape, desktop, desktopLarge, desktopWide },
  } = useTheme();
  const [activeBreakpoints, setActiveBreakpoints] = useState<ActiveBreakpoints>({
    mobile: false,
    tablet: false,
    tabletLandscape: false,
    desktop: false,
    desktopLarge: false,
    desktopWide: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setActiveBreakpoints({
        mobile: width <= mobile,
        tablet: width > mobile && width <= tablet,
        tabletLandscape: width > tablet && width <= tabletLandscape,
        desktop: width > tabletLandscape && width <= desktop,
        desktopLarge: width > desktop && width <= desktopLarge,
        desktopWide: width > desktopLarge && width <= desktopWide,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [desktop, desktopLarge, desktopWide, mobile, tablet, tabletLandscape]);

  return activeBreakpoints;
}
