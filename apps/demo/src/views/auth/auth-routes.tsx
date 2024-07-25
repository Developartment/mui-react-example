import React from 'react'

import { routerPaths } from '@/config/router-paths'

import AuthLayout from './layout/AuthLayout'

const LoginView = React.lazy(() => import('./LoginView/LoginView'))

export const authRoutes = [
    {
        element: <AuthLayout />,
        children: [
            {
                path: routerPaths.auth.login,
                element: <LoginView />,
            },
        ],
    },
]
