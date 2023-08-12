import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { LoginBody } from "@/api/auth/login";
import FormikWrapper from "@/components/FormikWrapper";
import FormTextField from "@/components/FormTextField";
import { paths } from "@/routing/paths";

const LoginForm = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const initialValues: LoginBody = {
        email: "demo@gmail.com",
        password: "demo",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(t("errors.required-field")),
        password: Yup.string().required(t("errors.required-field")),
    });

    const onSubmit = () => {
        toast.success(t("texts.login-successful"));
        return navigate(paths.users.index);
    };

    return (
        <Card>
            <CardHeader title={t("labels.login")} />

            <CardContent>
                <FormikWrapper
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    <Grid container spacing={2} mb={3}>
                        <Grid item xs={12}>
                            <FormTextField
                                fullWidth
                                name="email"
                                label={t("labels.email")}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormTextField
                                fullWidth
                                name="password"
                                label={t("labels.password")}
                            />
                        </Grid>
                    </Grid>

                    <Button type="submit" variant="contained">
                        {t("actions.login")}
                    </Button>
                </FormikWrapper>
            </CardContent>
        </Card>
    );
};

export default LoginForm;
