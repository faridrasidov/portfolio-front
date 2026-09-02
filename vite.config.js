import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';

const projects = JSON.parse(
  readFileSync(new URL('./src/projects.json', import.meta.url), 'utf8'),
);

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
    includedRoutes(paths) {
      const staticPaths = paths.filter((path) => (
        !path.includes(':') && path !== '/about' && path !== '/projects'
      ));

      return [
        ...staticPaths,
        ...projects.map((project) => `/projects/${project.id}`),
      ];
    },
  },
})
