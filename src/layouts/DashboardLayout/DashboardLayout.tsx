import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import WelcomeModal from "../../components/WelcomeModal";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

const DashboardOutlet = () => {
    return (
        <Box display="flex">
            <Navigation />
            <Sidebar />

            <Box component="main" p={3} flexGrow={1}>
                <Toolbar />

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
