import "@mui/material/styles";
import type { Tokens } from "./tokens";

declare module "@mui/material/styles" {
  interface Palette {
    sidebar: {
      bg: string;
      text: string;
      textActive: string;
      hover: string;
      activeBg: string;
    };
  }

  interface PaletteOptions {
    sidebar?: {
      bg?: string;
      text?: string;
      textActive?: string;
      hover?: string;
      activeBg?: string;
    };
  }

  interface Theme {
    tokens: Tokens;
  }

  interface ThemeOptions {
    tokens?: Tokens;
  }
}
