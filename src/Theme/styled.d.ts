import { Style } from "util";

declare module GlobalTheme {
  type StyleObject = { [key: string]: string | number } | string;

  export interface DefaultTheme {
    colors: Colors;
    effects: Effects;
    typography: Typography;
  }

  export interface Colors {
    primary: string;
    primary100: string;
    secondary: string;
    white100: string;
    aquaBlue: string;
    gray100: string;
    background: string;
  }

  export interface Effects {
    boxShadow: string;
  }

  export interface Typography {
    openSansFont: string;
  }
}

export { GlobalTheme };
