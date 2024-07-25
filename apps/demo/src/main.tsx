import '@/config/dayjs'
import '@/config/i18n/i18n'

import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { LicenseInfo } from '@mui/x-license-pro'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { theme } from '@template/common'
import i18n from 'i18next'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import Toaster from '@/components/Toaster/Toaster'
import { queryClient } from '@/config/query-client/query-client'

import App from './App'
import store from './store'

LicenseInfo.setLicenseKey(import.meta.env.VITE_MUI_LICENSE)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={i18n.language}
            >
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Toaster />
                        <CssBaseline />
                        <App />
                    </ThemeProvider>
                </Provider>
            </LocalizationProvider>

            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>,
)
