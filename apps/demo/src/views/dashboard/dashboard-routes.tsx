import React from 'react'

import { routerPaths } from '@/config/router-paths'

import DashboardLayout from './layout/DashboardLayout'

const UsersView = React.lazy(() => import('./UsersView/UsersView'))

export const dashboardRoutes = [
    {
        element: <DashboardLayout />,
        children: [
            {
                path: routerPaths.dashboard.users,
                element: <UsersView />,
            },
        ],
    },
]
