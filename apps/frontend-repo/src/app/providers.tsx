"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import theme from "@/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <InitColorSchemeScript attribute="class" />
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </Provider>
  );
}
