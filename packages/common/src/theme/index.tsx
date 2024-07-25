import { createTheme, Theme } from '@mui/material'

import { components } from './components'
import { palette } from './palette'
import { typography } from './typography'

export const theme: Theme = createTheme({
    palette,
    components,
    typography,
})
