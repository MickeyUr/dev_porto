import react from '@vitejs/plugin-react'
import { defineConfig, transformWithEsbuild } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/dev_porto/',
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform ( code, id ) {
        if ( !id.match( /src\/.*\.js$/ ) ) return null;           // include ts or tsx for TypeScript support

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild( code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        } );
      },
    },
    react()
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  // root: '',
  // base: 'raw.githubusercontent.com/MickeyUr/dev_porto/gh-pages/',
  build: {
    outDir: 'build'
  }
})
