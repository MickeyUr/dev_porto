import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/dev_porto',
  plugins: [react()],
  // root: '',
  // base: 'raw.githubusercontent.com/MickeyUr/dev_porto/gh-pages/',
  build: {
    outDir: 'build'
  }
})
