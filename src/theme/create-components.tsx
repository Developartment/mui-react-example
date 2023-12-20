import "@mui/x-data-grid/themeAugmentation";

import { LinkBaseProps } from "@mui/material/Link";
import { Theme } from "@mui/material/styles";
import type { Components } from "@mui/material/styles/components";

import LinkWrapper from "../components/LinkWrapper";

export const createComponents = (): Components<Theme> => {
    return {
        MuiCssBaseline: {
            styleOverrides: (theme) => ({
                body: {
                    background: theme.palette.grey["100"],
                },
            }),
        },
        MuiLink: {
            defaultProps: {
                component: LinkWrapper,
            } as LinkBaseProps,
        },
        MuiButtonBase: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: theme.spacing(1),
                }),
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                },
            },
        },
    };
};
