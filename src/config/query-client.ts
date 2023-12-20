import { QueryClient } from "@tanstack/react-query";

export const queryKeys = {
    users: {
        index: ["users"],
    },
    user: {
        current: ["user", "current"],
    },
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            retryOnMount: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        },
    },
});

export default queryClient;
