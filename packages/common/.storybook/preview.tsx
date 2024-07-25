import { CssBaseline, ThemeProvider } from '@mui/material'
import { Preview } from '@storybook/react'
import { StrictMode } from 'react'
import { theme } from '../src/theme'

const preview: Preview = {
    decorators: [
        (Story) => (
            <StrictMode>
                <ThemeProvider theme={theme}>
                    <Story />
                    <CssBaseline />
                </ThemeProvider>
            </StrictMode>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
