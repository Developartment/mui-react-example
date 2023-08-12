import "./i18n";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { queryClient } from "@/api";
import Toaster from "@/components/Toaster";
import Router from "@/routing/Router";
import store from "@/store";
import createMuiTheme from "@/theme";

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
