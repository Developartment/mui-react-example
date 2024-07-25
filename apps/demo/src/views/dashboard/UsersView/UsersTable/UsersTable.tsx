import Paper from '@mui/material/Paper'
import { DataGrid } from '@mui/x-data-grid'
import { GridColDef } from '@mui/x-data-grid'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

import { UserResponse } from '@/requests/responses'
import { getUsersRequest } from '@/requests/users/get-users-request'

import { queryKeys } from '../../../../config/query-client/query-key'

const UsersTable = () => {
    const { t } = useTranslation()

    const { data: users } = useQuery({
        queryFn: () => getUsersRequest(),
        queryKey: queryKeys.users.index,
    })

    const columns: GridColDef<UserResponse>[] = [
        {
            headerName: t('labels.username'),
            field: 'username',
            width: 200,
        },
        {
            headerName: t('labels.email'),
            width: 400,
            field: 'email',
        },
        {
            headerName: t('labels.created-at'),
            width: 250,
            field: 'created_at',
            type: 'date',
            valueGetter: (params) => new Date(params.value),
        },
    ]

    return (
        <Paper elevation={0} sx={{ height: 600 }}>
            <DataGrid
                hideFooter
                rows={users || []}
                columns={columns}
                disableRowSelectionOnClick
            />
        </Paper>
    )
}

export default UsersTable
