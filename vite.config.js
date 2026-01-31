import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from "path";
import { fileURLToPath } from 'url';

const EXPECTED_REPOSITORY_PARTS = 2;
const repository = process.env.GITHUB_REPOSITORY || '';
const repositoryParts = repository.split('/').filter((part) => part.trim() !== '');
const repoName = repositoryParts.length === EXPECTED_REPOSITORY_PARTS ? repositoryParts[1] : '';
const pagesBasePath = process.env.VITE_BASE || (repoName ? `/${repoName}/` : '/');
const shouldUsePagesBase = pagesBasePath !== '/';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use the repository base only for production builds targeting GitHub Pages.
  base: command === 'build' && shouldUsePagesBase ? pagesBasePath : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve : {
    alias : {
      '#components' : resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '#constants' : resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      '#store' : resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '#hoc' : resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '#windows' : resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
    }
  }
}))
