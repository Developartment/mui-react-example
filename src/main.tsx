import "./i18n";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Toaster from "./components/Toaster";
import queryClient from "./config/query-client";
import Router from "./Router";
import store from "./store/store";
import createMuiTheme from "./theme/theme";

if (import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
        dsn: import.meta.env.VITE_SENTRY_DSN,
        tracesSampleRate: 0.2,
        ignoreErrors: [],
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
        integrations: [new Integrations.BrowserTracing(), new Sentry.Replay()],
    });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProvider theme={createMuiTheme()}>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Router />
                <Toaster />
                <CssBaseline />
            </Provider>

            <ReactQueryDevtools />
        </QueryClientProvider>
    </ThemeProvider>
);
