import * as _ from 'lodash'
import { expect, test, vi } from 'vitest'

import { preloadErrorListener } from './preload-error-listener'

test('Should reload window', () => {
    _.set(window, 'location', { reload: vi.fn() })
    preloadErrorListener()

    expect(window.location.reload).toHaveBeenCalledOnce()
})
