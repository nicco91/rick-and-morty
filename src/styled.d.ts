// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      error: string;
      success: string;
      textPrimary: string;
      textSecondary: string;
    };
    breakpoints: {
      mobile: number;
      mobileLandscape: number;
      tablet: number;
      tabletLandscape: number;
      desktop: number;
      desktopLarge: number;
      desktopWide: number;
    };
    borderRadius: string;
    boxShadow: string;
  }
}
