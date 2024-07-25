import toast from 'react-hot-toast'

import Toaster from './Toaster'

describe('<Toaster />', () => {
    it('Should have defined structure', () => {
        cy.mount(<Toaster />)

        toast.success('Hello world!')
        cy.compareSnapshot('default')
    })
})
