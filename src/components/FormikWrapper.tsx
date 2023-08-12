import { Form, Formik, FormikConfig } from "formik";
import { ReactNode } from "react";

const FormikWrapper = ({ children, ...props }: FormikWrapperProps) => {
    return (
        <Formik {...props}>
            <Form>{children}</Form>
        </Formik>
    );
};

interface FormikWrapperProps extends FormikConfig<any> {
    children: ReactNode;
}

export default FormikWrapper;
