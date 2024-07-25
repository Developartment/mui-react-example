/// <reference types="cypress" />

import 'cypress-real-events'

import compareSnapshotCommand from 'cypress-image-diff-js/command'

compareSnapshotCommand()

Cypress.Commands.add('getBySel', (selector, child, ...args) => {
    return cy.get(`[data-cy=${selector}]${child ? ' ' + child : ''}`, ...args)
})
