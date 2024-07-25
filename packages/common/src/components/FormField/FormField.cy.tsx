import { Form, Formik } from 'formik'

import { FormField } from './FormField'

const Component = () => {
    return (
        <Formik initialValues={{}} onSubmit={() => {}}>
            <Form>
                <FormField data-cy='form-field' name='name' label='Name' />
            </Form>
        </Formik>
    )
}

describe('<FormField />', () => {
    it('Should have defined structure', () => {
        cy.mount(<Component />)

        cy.getBySel('form-field', '.MuiFormLabel-root').should(
            'have.text',
            'Name',
        )

        cy.getBySel('form-field', 'input').focus()
        cy.realType('Hello')

        cy.getBySel('form-field', 'input').should('have.value', 'Hello')

        cy.compareSnapshot('default')
    })
})
