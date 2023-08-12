import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

import DashboardTitle from "@/components/DashboardTitle";
import { openWelcomeModal, useAppDispatch } from "@/store";

import UsersTable from "./UsersTable";

const UsersView = () => {
    const { t } = useTranslation();
    const appDispatch = useAppDispatch();

    const actions = (
        <Button
            size="small"
            variant="contained"
            onClick={() => appDispatch(openWelcomeModal())}
        >
            {t("actions.open-modal")}
        </Button>
    );

    return (
        <>
            <DashboardTitle title={t("labels.users")} actions={actions} />
            <UsersTable />
        </>
    );
};

export default UsersView;
