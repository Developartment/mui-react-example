import client from "../../config/client";

export const loginRequest = async (loginBody: LoginBody) => {
    const { data } = await client().post<unknown>(
        `/api/v1/auth/login`,
        loginBody
    );

    return data;
};

export interface LoginBody {
    email: string;
    password: string;
}
