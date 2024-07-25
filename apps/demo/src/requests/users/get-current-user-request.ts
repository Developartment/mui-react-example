import { restClient } from '@/config/rest-client'
import getDemoData from '@/utils/get-demo-data'

import { UserResponse } from '../responses'

export const getCurrentUserRequest = async () => {
    return getDemoData()[0]

    const { data } = await restClient().get<UserResponse>(
        `/api/v1/users/current`,
    )
    return data
}
