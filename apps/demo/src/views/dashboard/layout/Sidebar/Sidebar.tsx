import PeopleAltRounded from '@mui/icons-material/PeopleAltRounded'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { routerPaths } from '@/config/router-paths'

const Sidebar = () => {
    const { t } = useTranslation()

    return (
        <Drawer
            variant='permanent'
            anchor='left'
            sx={{
                flexShrink: 0,
                width: 250,
                '& .MuiDrawer-paper': {
                    width: 250,
                },
            }}
        >
            <Toolbar>
                <Stack direction='row' alignItems='center' spacing={0.5}>
                    <Typography variant='h4'>
                        {t('labels.administration')}
                    </Typography>
                </Stack>
            </Toolbar>

            <Divider />

            <List dense>
                <SidebarItem
                    href={routerPaths.dashboard.users}
                    icon={<PeopleAltRounded />}
                    label={t('labels.users')}
                />
            </List>
        </Drawer>
    )
}

const SidebarItem = ({ icon, href, label }: SidebarItemProps) => {
    const navigate = useNavigate()

    return (
        <ListItemButton onClick={() => navigate(href)}>
            <ListItemIcon sx={{ minWidth: 40 }}>{icon}</ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}

interface SidebarItemProps {
    label: string
    href: string
    icon: ReactNode
}

export default Sidebar
