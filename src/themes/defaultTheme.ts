import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#58a9d4',
    primaryDark: '#2e84b2',
    secondary: '#67cbc3',
    secondaryDark: '#349890',
    success: '#00cc66',
    error: '#cc0000',
    textPrimary: '#333',
    textSecondary: '#999',
  },
  breakpoints: {
    mobile: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1200,
    desktopLarge: 1500,
    desktopWide: 1920,
  },
  borderRadius: '16px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
};
