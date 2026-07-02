import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./app/theme/index.ts";
import QueryProvider from "./app/providers/react-query/index.tsx";
import { Provider } from "react-redux";
import store from "./app/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <QueryProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryProvider>
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
);
