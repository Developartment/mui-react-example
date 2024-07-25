import React from "react";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import { paths } from "./config/paths";
import AuthLayout from "./layouts/AuthLayout";
import DashboardOutlet from "./layouts/DashboardLayout/DashboardLayout";

const LoginView = React.lazy(() => import("./views/LoginView/LoginView"));
const UsersView = React.lazy(() => import("./views/UsersView/UsersView"));

const Router = () => {
    return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
    {
        element: <DashboardOutlet />,
        children: [
            {
                path: paths.users.index,
                element: <UsersView />,
            },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: paths.auth.login,
                element: <LoginView />,
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to={paths.auth.login} />,
    },
]);

export default Router;
