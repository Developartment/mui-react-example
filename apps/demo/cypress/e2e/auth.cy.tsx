import { routerPaths } from '../../src/config/router-paths'

describe('Auth', () => {
    it('Should redirect to users', () => {
        cy.visit(routerPaths.auth.login)

        cy.location('pathname').should('eq', routerPaths.auth.login)

        cy.getBySel('login-form').should('be.visible')

        cy.compareSnapshot('login-view')

        cy.get('button[type="submit"]').click()

        cy.location('pathname').should('eq', routerPaths.dashboard.users)

        cy.getBySel('users-view').should('be.visible')

        cy.compareSnapshot('users-view')
    })
})
