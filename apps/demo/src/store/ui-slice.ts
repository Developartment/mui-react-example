import { createSlice } from '@reduxjs/toolkit'

interface State {
    sidebar: {
        width: number
    }
}

const initialState: State = {
    sidebar: {
        width: 200,
    },
}

const slice = createSlice({
    name: 'ui',
    initialState,
    reducers: {},
})

export default slice
