import { UserResponse } from '@/requests/responses'

const getDemoData = (): UserResponse[] => {
    return [
        {
            id: 'x',
            email: 'demo@gmail.com',
            username: 'filipkrivcik',
            created_at: new Date().toDateString(),
        },
        {
            id: 'xx',
            email: 'demo@gmail.com',
            username: 'filipkrivcik',
            created_at: new Date().toDateString(),
        },
    ]
}

export default getDemoData
