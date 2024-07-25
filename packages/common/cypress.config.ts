import { defineConfig } from 'cypress'
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin'

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
        setupNodeEvents(on, config) {
            getCompareSnapshotsPlugin(on, config)
        },
        viewportWidth: 1200,
        viewportHeight: 600,
    },
})
