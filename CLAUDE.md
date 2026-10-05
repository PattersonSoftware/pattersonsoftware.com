# CLAUDE.md

This file provides guidance for Claude Code when working on this project.

## Project Overview

Patterson Software, LLC business website — a React/TypeScript single-page application deployed to GitHub Pages.

## Tech Stack

- **React 19** with TypeScript (strict mode)
- **Vite 8** — build tool and dev server
- **Tailwind CSS 4** — all styling via utility classes
- **Radix UI Dialog** (`@radix-ui/react-dialog`) — accessible modal primitive (wrapped by `components/Modal.tsx`)
- **lucide-react** — icons

## Commands

```bash
npm run dev           # Start dev server with HMR
npm run build         # Type-check (tsc -b) then Vite production build
npm run lint          # Oxlint, including jsx-a11y and vitest rules (config in .oxlintrc.json)
npm run format        # Format with oxfmt (config in .oxfmtrc.json)
npm run format:check  # Check formatting without writing (runs in CI)
npm run preview       # Serve production build locally
npm run test          # Vitest in watch mode
npm run test:run      # Run all tests once (for CI)
npm run test:coverage # Run tests with V8 coverage report
```

Always run `npm run format`, `npm run build`, `npm run lint`, and `npm run test:run` before considering work complete. CI runs `format:check`, `lint`, `test:run`, and `build` and blocks deployment if any fail.

## Project Structure

```
index.html                  # Includes an inline script that applies the theme before first paint
vite.config.ts              # Vite + Vitest config (single file)
src/
  main.tsx                  # Entry point (React StrictMode)
  App.tsx                   # Root component: skip link, Header, <main> with sections, Footer
  siteConfig.ts             # Business facts (name, founded year, email, career start year)
  index.css                 # Global Tailwind imports
  assets/logo.png
  components/
    Header.tsx              # Main nav with mobile menu and theme toggle
    Footer.tsx              # Dynamic copyright year
    Logo.tsx                # Configurable logo image wrapper
    Section.tsx             # Standard section wrapper: id, labelled region, h2, spacing
    Service.tsx             # Service card rendered as a <li>
    Modal.tsx               # Shared Radix UI Dialog (trigger, title, description, Close)
    Contact.tsx             # Contact button + Modal with email link
    Product.tsx             # Product card rendered as a <li> (icon, name, status badge, action)
    EmailLink.tsx           # Mail icon + mailto link (optional prefilled subject)
    Waitlist.tsx            # "Join the List" button + Modal pointing to the inquiries email (placeholder)
  context/
    theme.ts                # Theme type, context object, safe localStorage helpers
    ThemeContext.tsx        # ThemeProvider: stored choice, else follows OS preference
    useTheme.ts             # Hook to read the theme context
  sections/
    HeroSection.tsx
    ServicesSection.tsx
    ProductsSection.tsx
    AboutSection.tsx
    ContactSection.tsx
  test/
    setup.ts                # Vitest setup: jest-dom, localStorage shim, matchMedia stub, cleanup
    matchMedia.ts           # Controllable matchMedia stub (setSystemPrefersDark)
```

Tests live next to the code they cover (`*.test.ts(x)`).

## Code Conventions

- **Components:** Functional components with explicit `React.FC<Props>` typing and prop interfaces
- **Styling:** Tailwind utility classes only — no custom CSS except global imports in `index.css`
- **Responsive:** Mobile-first using `md:` breakpoint prefix
- **Accessibility:** Use semantic elements (`<main>`, `<nav>`, `<section aria-labelledby>`, `<ul>`/`<li>`, `<h1>`–`<h3>`, `<button>`, `<a href>`) instead of ARIA roles. Don't add a `role` that repeats an element's built-in role, and never use widget roles like `grid` or `button` for non-interactive or navigational content. Interactive disclosure controls need `aria-expanded`/`aria-controls`. Keep one `<h1>` (the hero) and heading levels in order. Decorative lucide icons are `aria-hidden` by default.
- **Content:** Business facts (company name, founded year, contact email, years of experience) come from `src/siteConfig.ts`; don't hardcode them in components.
- **New sections:** Use `<Section id title>` and add the matching link to `navLinks` in `Header.tsx`.
- **Tests:** Query by role and accessible name. Don't assert on Tailwind class names or exact marketing copy.
- **State:** Local `useState` only — no global state library
- **TypeScript:** Strict mode is on; `noUnusedLocals` and `noUnusedParameters` are enforced

## Deployment

Pushes to `main` trigger GitHub Actions (`.github/workflows/deploy.yml`), which runs `npm ci`, then format check, lint, tests, and build, and deploys `/dist` to GitHub Pages only if all pass.
