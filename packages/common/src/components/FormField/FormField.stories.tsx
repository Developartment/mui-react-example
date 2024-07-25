import { Meta, StoryObj } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from './FormField'

const meta: Meta<typeof FormField> = {
    component: FormField,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Formik initialValues={{}} onSubmit={() => {}}>
                <Form noValidate>
                    <Story />
                </Form>
            </Formik>
        ),
    ],
}

export const Default: StoryObj<typeof meta> = {
    args: {
        name: 'name',
        label: 'Name',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any

export default meta
