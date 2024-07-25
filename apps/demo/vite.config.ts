/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    optimizeDeps: {
        include: ['@mui/material', '@emotion/react', '@emotion/styled'],
    },
    test: {
        environment: 'jsdom',
    },
})
