import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const createTypography = (): TypographyOptions => {
    return {
        fontFamily:
            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
            fontSize: "16px",
            fontWeight: 500,
        },
        body2: {
            fontSize: "14px",
            fontWeight: 500,
        },
        button: {
            fontWeight: 600,
        },
        caption: {
            fontSize: "12px",
        },
        h1: {
            fontSize: "64px",
            fontWeight: 700,
        },
        h2: {
            fontSize: "48px",
            fontWeight: 700,
        },
        h3: {
            fontSize: "32px",
            fontWeight: 700,
        },
        h4: {
            fontSize: "24px",
            fontWeight: 700,
        },
        h5: {
            fontSize: "20px",
            fontWeight: 700,
        },
        h6: {
            fontSize: "18px",
            fontWeight: 700,
        },
    };
};
