import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

const theme = createTheme({
  palette: {
    primary: {
      main: tokens.colors.primary.main,
    },

    background: {
      default: tokens.colors.background.default,
    },

    sidebar: tokens.colors.sidebar,
  },

  shape: {
    borderRadius: tokens.radius.md,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: tokens.colors.background.default,
        },
        "#root": {
          height: "100%",
        },
      },
    },
  },

  tokens,
});

export default theme;
