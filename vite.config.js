import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from "path";
import { fileURLToPath } from 'url';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1];
const pagesBasePath = process.env.VITE_BASE || (repoName ? `/${repoName}/` : '/');

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? pagesBasePath : '/',
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
