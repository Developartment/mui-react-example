import { createSlice } from "@reduxjs/toolkit";

interface State {
    sidebar: {
        width: 250;
    };
}

const initialState: State = {
    sidebar: {
        width: 250,
    },
};

const slice = createSlice({
    name: "ui",
    initialState,
    reducers: {},
});

export default slice;
