import { createSlice } from "@reduxjs/toolkit";

interface State {
    welcomeModal: {
        isOpen: boolean;
    };
}

const initialState: State = {
    welcomeModal: {
        isOpen: false,
    },
};

const slice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        openWelcomeModal: (state) => {
            state.welcomeModal.isOpen = true;
        },
        closeWelcomeModal: (state) => {
            state.welcomeModal.isOpen = false;
        },
    },
});

export default slice;
