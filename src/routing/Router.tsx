import { lazy } from "react";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import AuthOutlet from "@/outlets/AuthOutlet";
import DashboardOutlet from "@/outlets/DashboardOutlet";

import { paths } from "./paths";

const LoginView = lazy(() => import("@/views/LoginView"));
const UsersView = lazy(() => import("@/views/UsersView"));

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
        element: <AuthOutlet />,
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
