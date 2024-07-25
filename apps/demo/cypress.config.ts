import 'dotenv/config'

import { defineConfig } from 'cypress'
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
        setupNodeEvents(on, config) {
            return getCompareSnapshotsPlugin(on, config)
        },
        viewportWidth: 1200,
        viewportHeight: 600,
    },
    e2e: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
        setupNodeEvents(on, config) {
            on('file:preprocessor', vitePreprocessor())

            on('before:browser:launch', (browser, launchOptions) => {
                if (
                    browser.family === 'chromium' &&
                    browser.name !== 'electron'
                ) {
                    launchOptions.args.push('--force-device-scale-factor=1')
                    launchOptions.args.push('--force-color-profile=sRGB')
                    launchOptions.args.push('--disable-gpu')
                }
            })

            return getCompareSnapshotsPlugin(on, config)
        },
        viewportWidth: 1200,
        viewportHeight: 600,
    },
})
