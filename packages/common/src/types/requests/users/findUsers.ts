import client from "../../config/client";
import getDemoData from "../../utils/get-demo-data";
import { UserResponse } from "../responses";

export const findUsersRequest = async () => {
    return getDemoData();

    const { data } = await client().get<UserResponse[]>(`/api/v1/users`);
    return data;
};
