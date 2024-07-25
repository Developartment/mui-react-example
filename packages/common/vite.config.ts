/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: ['@mui/material', '@emotion/react', '@emotion/styled'],
    },
    test: {
        environment: 'jsdom',
    },
})
