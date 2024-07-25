import { restClient } from '@/config/rest-client'

export const loginRequest = async (loginBody: LoginBody) => {
    const { data } = await restClient().post<unknown>(
        `/api/v1/auth/login`,
        loginBody,
    )

    return data
}

export interface LoginBody {
    email: string
    password: string
}
