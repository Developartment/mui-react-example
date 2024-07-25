import { preloadErrorListener } from '@template/common'
import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { routerPaths } from '@/config/router-paths'
import { authRoutes } from '@/views/auth/auth-routes'
import { dashboardRoutes } from '@/views/dashboard/dashboard-routes'

const router = createBrowserRouter([
    ...dashboardRoutes,
    ...authRoutes,
    {
        path: '*',
        element: <Navigate to={routerPaths.dashboard.users} />,
    },
])

const App = () => {
    React.useEffect(() => {
        window.addEventListener('vite:preloadError', preloadErrorListener)

        return () => {
            window.removeEventListener(
                'vite:preloadError',
                preloadErrorListener,
            )
        }
    }, [])

    return <RouterProvider router={router} />
}

export default App
