import { mount } from 'cypress/react'

declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount
            getBySel: (
                selector: string,
                child?: string,
                options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
            ) => Chainable<JQuery<E>>
        }
    }
}
