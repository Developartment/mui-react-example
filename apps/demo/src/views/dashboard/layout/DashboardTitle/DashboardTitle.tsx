import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'

interface DashboardTitleProps {
    title: string
    actions?: ReactNode
}

const DashboardTitle = ({ title, actions }: DashboardTitleProps) => {
    return (
        <Stack spacing={1} direction='row' alignItems='center' mb={4}>
            <Typography variant='h3' component='h1' pr={1}>
                {title}
            </Typography>

            {actions}
        </Stack>
    )
}

export default DashboardTitle
