import type { PaletteOptions } from "@mui/material/styles/createPalette";

export const createPalette = (): PaletteOptions => {
    return {
        primary: {
            main: "#006AFF",
        },
        secondary: {
            main: "#009688",
        },
        success: {
            main: "#42BD53",
        },
        warning: {
            main: "#FFCC00",
        },
        error: {
            main: "#FF6666",
        },
    };
};
