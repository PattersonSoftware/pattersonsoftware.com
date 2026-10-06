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
npm run lint          # Oxlint with jsx-a11y and vitest rules; warnings fail the run (config in .oxlintrc.json)
npm run format        # Format with oxfmt (config in .oxfmtrc.json)
npm run format:check  # Check formatting without writing (runs in CI)
npm run preview       # Serve production build locally
npm run test          # Vitest in watch mode
npm run test:run      # Run all tests once (for CI)
npm run test:coverage # Run tests with V8 coverage report
```

Always run `npm run format`, `npm run build`, `npm run lint`, and `npm run test:run` before considering work complete. CI runs `format:check`, `lint`, `test:run`, and `build` on every branch push, and only deploys from `main` when they pass.

## Project Structure

```
index.html                  # Includes an inline script that applies the theme before first paint
vite.config.ts              # Vite + Vitest config (single file)
src/
  main.tsx                  # Entry point (React StrictMode)
  App.tsx                   # Root component: skip link, Header, <main> with sections, Footer
  siteConfig.ts             # Business facts (name, founded year, email, career start year)
  pageSections.ts           # Section anchor IDs + nav labels (Header and sections both use it)
  zIndex.ts                 # Stacking order: header < modal < skip link
  layout.ts                 # Header height + matching anchor scroll margin
  index.css                 # Tailwind import, dark variant, color tokens, alternating-sections utility
  App.test.tsx              # Unmocked page-structure tests (landmarks, skip link, nav ↔ sections)
  assets/
    logo.png
    freelancer-mark.svg     # Copied verbatim from the Freelancer project's favicon.svg
  components/
    Header.tsx              # Main nav with mobile menu and theme toggle
    Footer.tsx              # Dynamic copyright year
    Logo.tsx                # Company logo image
    Section.tsx             # Standard section wrapper: id, labelled region, h2, spacing
    CardList.tsx            # <ul role="list"> grid for Service/Product cards
    PrimaryButton.tsx       # Blue call-to-action button (works as a Radix asChild trigger)
    Service.tsx             # Service card rendered as a <li>
    Modal.tsx               # Shared Radix UI Dialog (trigger, title, description, Close)
    Contact.tsx             # "Get in Touch" button + Modal with email link
    Product.tsx             # Product card rendered as a <li> (icon, name, status badge, action)
    EmailLink.tsx           # Mail icon + mailto link (optional prefilled subject)
    Waitlist.tsx            # "Join the List" button + Modal pointing to the inquiries email (placeholder)
  context/
    theme.ts                # Theme type, context object, safe localStorage helpers
    ThemeContext.tsx        # ThemeProvider: stored choice, else follows OS preference
    useTheme.ts             # Hook to read the theme context
  sections/
    HeroSection.tsx         # The one section not built on <Section> (see conventions)
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
- **Styling:** Tailwind utility classes only. `index.css` holds only the Tailwind import, the dark variant, semantic color tokens, and the `alternating-sections` utility.
- **Colors:** Use the semantic tokens from `index.css` for theme-dependent colors: `text-strong` (headings), `text-body` (default copy), `text-muted` (secondary copy), `bg-surface` (header and every second page section), `bg-card` (cards and dialogs; automatically lighter inside surface bands). Add a token instead of repeating a `light dark:dark` pair in more than one place.
- **Responsive:** Mobile-first using `md:` breakpoint prefix
- **Accessibility:** Use semantic elements (`<main>`, `<nav>`, `<section aria-labelledby>`, `<ul>`/`<li>`, `<h1>`–`<h3>`, `<button>`, `<a href>`) instead of ARIA roles. Don't add a `role` that repeats an element's built-in role, and never use widget roles like `grid` or `button` for non-interactive or navigational content. Interactive disclosure controls need `aria-expanded`/`aria-controls`. Keep one `<h1>` (the hero) and heading levels in order. Decorative lucide icons are `aria-hidden` by default.
- **Content:** Business facts (company name, founded year, contact email, years of experience) come from `src/siteConfig.ts`; don't hardcode them in components.
- **Section backgrounds:** `<main>` uses `alternating-sections`, so every second section gets the surface band automatically. Don't set backgrounds on individual sections, and keep `<main>`'s direct children as `<section>` elements.
- **New sections:** Add an entry to `src/pageSections.ts` (and to `navSections` if it belongs in the nav), then render `<Section id={pageSections.x.id} title>`. `App.test.tsx` fails if a nav link has no matching section or the nav order differs from the page order. The hero is the one exception: it holds the only `<h1>`, isn't a nav target, and keeps its own markup.
- **Shared UI:** Use `PrimaryButton` for call-to-action buttons, `CardList` for card grids, `Modal` for dialogs, and `EmailLink` for mailto links rather than copying their classes.
- **Z-index:** Take z-index classes from `src/zIndex.ts`; don't add ad hoc `z-*` values.
- **Header height:** Take the header height and section scroll margin from `src/layout.ts`; change them together.
- **Tailwind classes must be written out in full:** don't build class names at runtime (e.g. `` `focus:${x}` ``), because Tailwind only generates classes it finds as complete strings in source.
- **Theme bootstrap:** The inline script in `index.html` must pick the same theme as `ThemeProvider`; `themeBootstrap.test.tsx` runs both and fails if they diverge.
- **Mocks:** `restoreMocks` is on, so `vi.spyOn` replacements are undone automatically; don't call `mockRestore()` by hand.
- **Tests:** Query by role and accessible name; asserting headings, button labels, link text, and dialog titles is fine. Don't assert on paragraph or description copy (use a loose pattern if you must), and don't assert on Tailwind class names.
- **State:** Local `useState` only — no global state library
- **TypeScript:** Strict mode is on; `noUnusedLocals` and `noUnusedParameters` are enforced

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) runs format check, lint, tests, and build on every branch push. On `main`, a separate `deploy` job then publishes `/dist` to GitHub Pages, only if the checks passed.
