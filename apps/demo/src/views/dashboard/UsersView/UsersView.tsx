import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'

import DashboardTitle from '../layout/DashboardTitle/DashboardTitle'
import UsersTable from './UsersTable/UsersTable'
import WelcomeModal from './WelcomeModal/WelcomeModal'

const UsersView = () => {
    const { t } = useTranslation()
    const [welcomeOpen, setWelcomeOpen] = React.useState(false)

    const actions = (
        <Button
            size='small'
            variant='contained'
            onClick={() => setWelcomeOpen(true)}
        >
            {t('actions.open-modal')}
        </Button>
    )

    return (
        <Box data-cy='users-view'>
            <DashboardTitle title={t('labels.users')} actions={actions} />
            <UsersTable />

            {welcomeOpen && (
                <WelcomeModal onClose={() => setWelcomeOpen(false)} />
            )}
        </Box>
    )
}

export default UsersView
