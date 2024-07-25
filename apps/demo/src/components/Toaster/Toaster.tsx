import { alpha, useTheme } from '@mui/material/styles'
import { Toaster as Toast } from 'react-hot-toast'

const Toaster = () => {
    const { palette, shadows } = useTheme()

    return (
        <Toast
            position='top-right'
            toastOptions={{
                style: {
                    backdropFilter: 'blur(6px)',
                    boxShadow: shadows[16],
                    color: palette.common.white,
                    background: alpha(palette.grey[900], 0.8),
                },
            }}
        />
    )
}

export default Toaster
