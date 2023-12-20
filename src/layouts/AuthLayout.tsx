import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: "0 !important" }}>
            <Box
                height="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Suspense>
                    <Outlet />
                </Suspense>
            </Box>
        </Container>
    );
};
export default AuthLayout;
