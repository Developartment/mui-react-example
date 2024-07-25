import { expect, test } from 'vitest'

import { createHrefWithParams } from './create-href-with-params'

test('Should create href', () => {
    expect(
        createHrefWithParams('/users/:userId/settings/:settingsId', {
            userId: 1,
            settingsId: 1,
        }),
    ).toBe('/users/1/settings/1')
})
