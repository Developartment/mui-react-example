import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import modalsSlice from "./slices/modals-slice";
import uiSlice from "./slices/ui-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        modals: modalsSlice.reducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const selectModals = (appState: AppState) => appState.modals;
export const selectUI = (appState: AppState) => appState.ui;

export default store;
