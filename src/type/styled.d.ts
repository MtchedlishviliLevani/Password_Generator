import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      basic: {
        bodyBackgroundColor: string;
        cardsBackgroundColor: string;
        primaryTextColor: string;
        secondaryTextColor: string;
        green: string;
      };
      passwordStrengthColor: {
        tooWeak: string;
        weak: string;
        medium: string;
        strong: string;
      };
      button: {
        hoverBackgroundColor: string;
        hoverBorderColor: string;
        buttonBackgroundColor: string;
        hoverColor: string;
      };
    };
    typography: {
      fontSize: { small: string; medium: string; large: string };
      fontWeight: number;
    };
  }
}
