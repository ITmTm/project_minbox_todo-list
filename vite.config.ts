import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from "vitest/config";
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Todo List',
        },
      },
    }),
  ],

  test: {
    setupFiles: './vitest.setup.ts',
    environment: 'jsdom',
    globals: true,
    css: true,
    exclude: [...configDefaults.exclude, 'e2e/*'],
  },
});
