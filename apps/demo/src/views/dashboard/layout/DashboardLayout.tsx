import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { queryKeys } from '@/config/query-client/query-key'
import { getCurrentUserRequest } from '@/requests/users/get-current-user-request'

import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const DashboardLayout = () => {
    const { data: user } = useQuery({
        queryFn: () => getCurrentUserRequest(),
        queryKey: queryKeys.user.current,
    })

    return (
        <Box display='flex'>
            {user && <Navigation user={user} />}
            <Sidebar />

            <Box component='main' p={3} flexGrow={1}>
                <Toolbar />

                <Box>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </Box>
            </Box>
        </Box>
    )
}

export default DashboardLayout
