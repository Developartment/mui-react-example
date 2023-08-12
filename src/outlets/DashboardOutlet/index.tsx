import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import WelcomeModal from "@/modals/WelcomeModal";

import Breadcrumb from "./Breadcrumb";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

const DashboardOutlet = () => {
    return (
        <Box display="flex">
            <Navigation />
            <Sidebar />

            <Box component="main" p={3} flexGrow={1}>
                <Toolbar />
                <Breadcrumb />

                <Box>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </Box>
            </Box>

            <WelcomeModal />
        </Box>
    );
};

export default DashboardOutlet;
