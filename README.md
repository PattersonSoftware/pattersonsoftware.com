# PattersonSoftware.com

This is the source code to the site located at pattersonsoftware.com.

## Tech Stack / System Requirements

- Node 26 (pinned in `.nvmrc`)
- React, TypeScript, Vite, and Tailwind CSS
- Oxlint and oxfmt for linting and formatting; Vitest and Testing Library for tests

See `package.json` for exact dependency versions.

## Running Locally

With Node 26 installed (`nvm use` picks it up from `.nvmrc`), run `npm install` in the root directory, then
`npm run dev` to start Vite with HMR.

## Checks

```bash
npm run format:check  # or `npm run format` to fix
npm run lint
npm run test:run
npm run build
```

CI runs all four on every branch push. Pushes to `main` then deploy to GitHub Pages, only if they pass.
