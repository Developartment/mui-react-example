import { useMutation } from "@tanstack/react-query";

import client from "../";

export const loginRequest = async (loginBody: LoginBody) => {
    const { data } = await client().post<unknown>(
        `/api/v1/auth/login`,
        loginBody
    );

    return data;
};

export const useLogin = () => {
    return useMutation((loginBody: LoginBody) => loginRequest(loginBody));
};

export interface LoginBody {
    email: string;
    password: string;
}
