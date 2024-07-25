import { TextFieldProps } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Field, FieldProps } from 'formik'

/**
 * FormField is a wrapper around the MUI TextField component that hooks into Formik's Field component
 */
export const FormField = ({
    label,
    placeholder,
    name,
    ...rest
}: FormFieldProps) => {
    return (
        <Field name={name}>
            {({ field, meta: { touched, error } }: FieldProps) => (
                <TextField
                    fullWidth
                    label={label}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    name={field.name}
                    placeholder={placeholder}
                    helperText={touched && error}
                    error={touched && Boolean(error)}
                    {...rest}
                />
            )}
        </Field>
    )
}

export type FormFieldProps = TextFieldProps & {
    /**
     * The name of the field in the form
     */
    name: string
}
