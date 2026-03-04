import { defineConfig, mergeConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default mergeConfig(
  defineConfig({ plugins: [react()] }),
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./test-setup.ts'],
      include: ['src/**/*.{test,spec}.{ts,tsx}'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/main.tsx', 'src/**/*.test.tsx', 'src/test/**'],
      },
    },
  }),
)
