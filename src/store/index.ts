import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import slice from "./modals-slice";

const store = configureStore({
    reducer: {
        ui: slice.reducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const { openWelcomeModal, closeWelcomeModal } = slice.actions;

export const selectModals = (appState: AppState) => appState.ui;

export default store;
