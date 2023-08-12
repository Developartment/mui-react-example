import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useField } from "formik";
import { ChangeEvent } from "react";

const FormTextField = ({ name, helperText, ...props }: FormTextFieldProps) => {
    const [field, meta, helpers] = useField<unknown>(name);

    const onChange = (value: ChangeEvent<HTMLInputElement>) => {
        helpers.setValue(value.target.value);
    };

    return (
        <TextField
            {...props}
            value={field.value}
            onChange={onChange}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error ? meta.error : helperText}
        />
    );
};

type FormTextFieldProps = Omit<TextFieldProps, "error" | "name"> & {
    name: string;
};

export default FormTextField;
