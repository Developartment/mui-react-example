import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export const restClient = (apiConfig?: ApiConfig): AxiosInstance => {
    const config: AxiosRequestConfig = {
        baseURL: `${import.meta.env.VITE_API_URL}`,
        headers: {
            'Content-type': apiConfig?.contentType || 'application/json',
        },
    }

    return axios.create(config)
}

interface ApiConfig {
    contentType?: 'application/json' | 'multipart/form-data'
}
