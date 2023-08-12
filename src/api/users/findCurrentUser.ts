import { useQuery } from "@tanstack/react-query";

import getDemoData from "@/utils/get-demo-data";

import api, { queryKeys } from "../";
import { UserResponse } from "../responses";

export const findCurrentUserRequest = async () => {
    return getDemoData()[0];

    const { data } = await api().get<UserResponse>(`/api/v1/users/current`);
    return data;
};

export const useCurrentUser = () => {
    return useQuery({
        queryFn: () => findCurrentUserRequest(),
        queryKey: queryKeys.user.current,
    });
};
