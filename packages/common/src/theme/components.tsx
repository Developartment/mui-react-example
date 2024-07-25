import { Theme } from '@mui/material/styles'
import type { Components } from '@mui/material/styles/components'

export const components: Components<Theme> = {
    MuiCssBaseline: {
        styleOverrides: (theme) => ({
            body: {
                background: theme.palette.grey['100'],
            },
        }),
    },
    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },
    },
}
