import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

const client = (clientConfig?: ClientConfig): AxiosInstance => {
    const config: AxiosRequestConfig = {
        baseURL: `${import.meta.env.VITE_API_URL}`,
        headers: {
            "Content-type": clientConfig?.contentType || "application/json",
        },
    };

    const instance = axios.create(config);

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error: AxiosError) => {
            // Handle catch exception
            return Promise.reject(error);
        }
    );

    return instance;
};

interface ClientConfig {
    contentType?: "application/json" | "multipart/form-data";
}

export default client;
