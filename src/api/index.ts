import { QueryClient } from "@tanstack/react-query";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const api = (apiConfig?: ApiConfig): AxiosInstance => {
    const config: AxiosRequestConfig = {
        baseURL: `${import.meta.env.VITE_API_URL}`,
        headers: {
            "Content-type": apiConfig?.contentType || "application/json",
        },
    };

    return axios.create(config);
};

interface ApiConfig {
    contentType?: "application/json" | "multipart/form-data";
}

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

export default api;
