# macOS Portfolio

This repository hosts a macOS-inspired portfolio built with React and Vite.

## GitHub Pages Deployment

The site is deployed with GitHub Pages via a GitHub Actions workflow.

1. Ensure GitHub Pages is enabled for the repository and set to **GitHub Actions** as the source.
2. Push to the `main` branch to trigger a deployment.
3. For local production builds with a custom base path, set `VITE_BASE=/your-repo/` before running `npm run build`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
