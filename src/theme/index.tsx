import createTheme from "@mui/material/styles/createTheme";

import { createComponents } from "./create-components";
import { createPalette } from "./create-palette";
import { createTypography } from "./create-typography";

const createMuiTheme = () => {
    const palette = createPalette();
    const typography = createTypography();
    const components = createComponents();

    return createTheme({
        palette,
        components,
        typography,
    });
};

export default createMuiTheme;
