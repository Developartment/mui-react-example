import client from "../../config/client";
import getDemoData from "../../utils/get-demo-data";
import { UserResponse } from "../responses";

export const findCurrentUserRequest = async () => {
    return getDemoData()[0];

    const { data } = await client().get<UserResponse>(`/api/v1/users/current`);
    return data;
};
