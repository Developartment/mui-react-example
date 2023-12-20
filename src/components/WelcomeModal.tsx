import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from "react-i18next";

import { closeWelcomeModal } from "../store/slices/modals-slice";
import { selectModals, useAppDispatch, useAppSelector } from "../store/store";

const WelcomeModal = () => {
    const { t } = useTranslation();
    const appDispatch = useAppDispatch();

    const { welcomeModal } = useAppSelector(selectModals);
    const { isOpen } = welcomeModal;

    const onClose = () => {
        appDispatch(closeWelcomeModal());
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            sx={{
                ".MuiPaper-root": {
                    width: "100%",
                    maxWidth: "700px",
                },
            }}
        >
            <DialogTitle>{t("labels.welcome-modal")}</DialogTitle>
            <DialogContent>
                {t("texts.welcome-modal-description")}
            </DialogContent>
        </Dialog>
    );
};

export default WelcomeModal;
