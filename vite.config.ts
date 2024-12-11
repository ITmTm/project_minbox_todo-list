import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
    css: true,
    exclude: [...configDefaults.exclude, 'e2e/*'],
  },
});
