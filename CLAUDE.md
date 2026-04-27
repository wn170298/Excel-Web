# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run Next.js ESLint
```

There is no test suite.

## Architecture

This is a **Next.js 14 App Router** site for Excel Consultancy, a digital marketing agency. Built with TypeScript and Tailwind CSS.

### Internationalization (i18n)

The site supports three locales — `en`, `it`, `de` — via `next-intl`.

- **Locale prefix**: `as-needed` — English URLs have no prefix (`/services`), Italian and German do (`/it/services`, `/de/services`).
- **Routing**: All pages live under `app/[locale]/`. The middleware in `middleware.ts` handles locale detection and redirects.
- **Translations**: Stored in `messages/{locale}.json`. Server components use `useTranslations()` from `next-intl`; the config entry point is `i18n.ts`.
- **Locale-aware links**: Both `components/navigation.tsx` and individual page files use a local `getLocalePath(path, locale)` helper that prepends the locale for non-English routes. There is also a `lib/navigation.ts` that exports locale-aware `Link`, `redirect`, `usePathname`, and `useRouter` from `next-intl/navigation` — prefer these when adding new links.

### Page layout

`app/layout.tsx` → `app/[locale]/layout.tsx` → page. The locale layout wraps everything in `NextIntlClientProvider` and adds the shared `Navigation` and `Footer` components. Pages are React Server Components by default; components that need interactivity are marked `'use client'`.

### Blog

Blog content lives entirely in `lib/blog-data.ts` as a static array — there is no CMS or database. Posts contain inline HTML in the `content` field. Helper functions `getBlogPost(slug)` and `getBlogPostsByCategory(categorySlug)` expose the data. Dynamic routes are at `app/[locale]/blog/[slug]/page.tsx`.

### Spline 3D scene

The interactive 3D hero section uses `@splinetool/react-spline`. It is lazy-loaded via a client-component wrapper (`SplineSceneWrapper`) defined inline in `app/[locale]/page.tsx` using a `require()` call to avoid server-side import issues.

### Styling conventions

Tailwind CSS with custom config. The design system uses two primary colors: `#171717` (near-black for text/CTAs) and `#0068d6` (blue for accents). Border colors are `#ebebeb`; muted text is `#666666` / `#808080`. No CSS modules or styled-components.
