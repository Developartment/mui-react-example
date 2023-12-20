import Box from "@mui/material/Box";
import { Form, Formik, FormikConfig, FormikProps } from "formik";
import { ReactNode } from "react";

const FormikWrapper = ({ children, ...props }: FormikWrapperProps) => {
    return (
        <Formik {...props}>
            {(renderProps) => {
                return (
                    <Box component={Form}>
                        <>
                            {typeof children === "function"
                                ? children(renderProps)
                                : children}
                        </>
                    </Box>
                );
            }}
        </Formik>
    );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormikWrapperProps<T = any> extends FormikConfig<T> {
    children: ((props: FormikProps<T>) => ReactNode) | ReactNode;
}

export default FormikWrapper;
