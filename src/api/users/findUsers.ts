import { useQuery } from "@tanstack/react-query";

import getDemoData from "@/utils/get-demo-data";

import api, { queryKeys } from "../";
import { UserResponse } from "../responses";

export const findUsersRequest = async () => {
    return getDemoData();

    const { data } = await api().get<UserResponse[]>(`/api/v1/users`);
    return data;
};

export const useUsers = () => {
    return useQuery({
        queryFn: () => findUsersRequest(),
        queryKey: queryKeys.users.index,
    });
};
