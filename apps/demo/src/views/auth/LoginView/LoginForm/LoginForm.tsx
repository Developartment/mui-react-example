import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import { FormField } from '@template/common'
import { Form, Formik } from 'formik'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import { routerPaths } from '@/config/router-paths'
import { LoginBody } from '@/requests/auth/login-request'

const LoginForm = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const initialValues: LoginBody = {
        email: 'demo@gmail.com',
        password: 'demo',
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(t('errors.required-field')),
        password: Yup.string().required(t('errors.required-field')),
    })

    const onSubmit = () => {
        toast.success(t('texts.login-successful'))
        return navigate(routerPaths.dashboard.users)
    }

    return (
        <Card data-cy='login-form'>
            <CardHeader title={t('labels.login')} />

            <CardContent>
                <Formik
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <Grid container spacing={2} mb={3}>
                            <Grid item xs={12}>
                                <FormField
                                    fullWidth
                                    name='email'
                                    daty-cy='email-field'
                                    label={t('labels.email')}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormField
                                    fullWidth
                                    name='password'
                                    daty-cy='email-field'
                                    label={t('labels.password')}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type='submit'
                            variant='contained'
                            daty-cy='login-submit'
                        >
                            {t('actions.login')}
                        </Button>
                    </Form>
                </Formik>
            </CardContent>
        </Card>
    )
}

export default LoginForm
