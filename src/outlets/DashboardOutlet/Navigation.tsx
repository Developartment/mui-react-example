import ExitToAppOutlined from "@mui/icons-material/ExitToAppOutlined";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as _ from "lodash";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useCurrentUser } from "@/api/users/findCurrentUser";
import { paths } from "@/routing/paths";
import { SIDEBAR_WIDTH } from "@/settings/ui";
import { LanguagesEnum } from "@/types/i18n";

const Navigation = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const { data: currentUser } = useCurrentUser();

    const profileRef = useRef<HTMLButtonElement | null>(null);
    const languageRef = useRef<HTMLButtonElement | null>(null);

    const [menu, setMenu] = useState({
        profile: false,
        language: false,
    });

    const openMenu = (target: keyof typeof menu) => {
        setMenu((p) => {
            return { ...p, [target]: true };
        });
    };

    const closeMenu = (target: keyof typeof menu) => {
        setMenu((p) => {
            return { ...p, [target]: false };
        });
    };

    const onLanguage = async (language: string) => {
        await i18n.changeLanguage(language);
        closeMenu("language");
    };

    const onLogout = () => {
        return navigate(paths.auth.login);
    };

    const languages = _.entries(LanguagesEnum);

    return (
        <AppBar
            sx={{
                ml: `${SIDEBAR_WIDTH}px`,
                width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
            }}
        >
            <Toolbar>
                <Tooltip title={t("labels.language")} sx={{ ml: "auto" }}>
                    <IconButton
                        ref={languageRef}
                        onClick={() => openMenu("language")}
                    >
                        <Box
                            width={25}
                            height={25}
                            component="img"
                            alt={t("language")}
                            src={`/images/flags/${i18n.language}.png`}
                            sx={{
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                        />
                    </IconButton>
                </Tooltip>

                <Tooltip title={t("labels.profile")}>
                    <IconButton
                        ref={profileRef}
                        onClick={() => openMenu("profile")}
                    >
                        <Avatar sx={{ width: 35, height: 35, mr: 0.5 }} />
                    </IconButton>
                </Tooltip>
            </Toolbar>

            <Menu
                open={menu.profile}
                anchorEl={profileRef.current}
                onClose={() => closeMenu("profile")}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                {currentUser && (
                    <Typography px={2} py={1} variant="body2" maxWidth={150}>
                        {currentUser.username}
                    </Typography>
                )}

                <Divider sx={{ my: 1 }} />

                <MenuItem onClick={onLogout}>
                    <ListItemIcon>
                        <ExitToAppOutlined />
                    </ListItemIcon>

                    <ListItemText primary={t("actions.logout")} />
                </MenuItem>
            </Menu>

            <Menu
                open={menu.language}
                anchorEl={languageRef.current}
                onClose={() => closeMenu("language")}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                {_.map(languages, ([language, code]) => (
                    <MenuItem
                        key={code}
                        value={code}
                        onClick={() => onLanguage(code)}
                        selected={code === i18n.language}
                    >
                        <ListItemIcon>
                            <Box
                                width={22}
                                height={22}
                                component="img"
                                alt={t("labels.language")}
                                src={`/images/flags/${code}.png`}
                                sx={{
                                    objectFit: "cover",
                                }}
                            />
                        </ListItemIcon>

                        <ListItemText primary={language} />
                    </MenuItem>
                ))}
            </Menu>
        </AppBar>
    );
};

export default Navigation;
