# CLAUDE.md — brian-bixby-site

Project rules and conventions for the Brian Bixby artist portfolio (brianbixby.com).
Read this before editing. Mirror it when adding pages so the site stays consistent.

## What this is

The official portfolio for the artwork and artistic biography of Brian Bixby —
artist and curator working across photography, installation, painting, video, and
constructed objects, based in Santa Fe, New Mexico.

Plain hand-authored **static HTML**. No framework, no bundler, no build step.
Edits go live by pushing to `main` → GitHub (`bixbybrian/brian-bixby-site`) → Netlify.

## Folder layout

```
brian-bixby-site/          ← repo root — NOT deployed
├── CLAUDE.md              ← this file
├── netlify.toml           ← publish = "site"
├── docs/                  ← style notes, references, anything non-deployed
├── tod/                   ← scratch / prototype area (never deploys)
└── site/                  ← the ONLY thing Netlify publishes
    ├── index.html         ← home
    ├── projects.html      ← project index (grid)
    ├── info.html          ← bio / info
    ├── contact.html       ← contact
    ├── project-relations.js   ← single source of truth for project data
    ├── _headers           ← security + cache headers (read by Netlify)
    ├── robots.txt, sitemap.xml, favicon.*, apple-touch-icon.png
    ├── fonts/             ← self-hosted EB Garamond + Outfit (woff2) + fonts.css
    ├── images/            ← all site imagery
    ├── projects/          ← one .html per project
    ├── media/             ← misc media
    └── videos/            ← .mp4 + poster .jpg (e.g. Lightvessel)
```

## Path rules (important)

- Pages reference shared assets with **root-absolute** paths: `/fonts/fonts.css`,
  `/favicon.ico`, `/images/...`. These stay valid because `site/` is the web root.
- Project pages in `site/projects/` reach shared files with `../`:
  `<script src="../project-relations.js"></script>`, `../images/...`.
- Clean (extensionless) URLs are canonical: `/projects/forbidden-colours`, not
  `.html`. Netlify serves `foo.html` at `/foo`. Keep `sitemap.xml` and all
  `<link rel="canonical">` extensionless to match.

## Design tokens (keep identical across pages)

Defined in each page's inline `<style>` `:root`:

```css
--black: #111111;  --mid: #555555;  --light: #aaaaaa;  --rule: #dddddd;
--bg: #ffffff;     --accent: #03a9f4;
--font-serif: 'EB Garamond', Georgia, serif;
--font-sans:  'Outfit', Helvetica, sans-serif;
--nav-h: 52px;
--max-w: 1100px;   /* home; project pages use 820px */
```

- Body: Outfit sans, 15px, line-height 1.65, `-webkit-font-smoothing: antialiased`.
- Universal reset: `*,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }`
  and `img { height:auto; }`.
- Nav height 52px. Home nav is `position: fixed` + transparent→solid on scroll;
  project pages use a simpler `position: sticky` solid nav with a bottom rule.

## Per-page conventions

Every page includes, in `<head>`: charset, viewport, title in the form
`Brian Bixby — <Page>`, `/fonts/fonts.css`, the three favicons, a `meta description`,
`<link rel="canonical">`, full Open Graph tags (`og:type` = `website` for core pages,
`article` for project pages), and Twitter card tags. All URLs use
`https://brianbixby.com/`. Styles are inline per page (no shared external stylesheet
besides fonts.css) — keep tokens in sync when editing one page.

## Projects system

`site/project-relations.js` is the single source of truth for project metadata
(title, year, medium, image, url) and related-work relationships. To wire a project
page, before `</body>`:

```html
<script>const PROJECT_SLUG = 'your-slug';</script>
<script src="../project-relations.js"></script>
```

When adding a project: create `site/projects/<slug>.html`, add its entry to
`project-relations.js`, add a tile to `projects.html`, and add a `<url>` to
`sitemap.xml` (extensionless).

## Image naming convention

All images in `site/images/` follow one scheme. The guiding principle: **name an
image by the job it does in the page layout — never by its origin (which app/social
platform it came from) or its zoom level.**

Format: `{project-slug}-{role?}-{NN}.{ext}`

- `{project-slug}` matches the project's page slug (e.g. `lightvessel`,
  `forbidden-colours`, `i-want-to-believe`), so files sort next to their project.
- All lowercase, hyphens only — no spaces, underscores, or capitals.
- Sequence numbers are **two digits** (`01`, `02` …) so they sort past nine.
- **Do not** encode pixel dimensions in the filename. (Only add a `-wNNNN` token if
  the project ever serves multiple fixed widths as separate files.)
- Numbers count **within a role group, in page order**, and reset per group — they
  are not one running tally down the whole page.

Roles (the only standing vocabulary — add a new role word only when a real page has
a distinct recurring section for it):

```
{slug}-NN          images of the work itself — the DEFAULT, no role word
{slug}-hero-N      page lead image(s); hero-1, hero-2 … (slideshow / random-load ready)
{slug}-process-NN  in-progress / making-of / installation process
{slug}-view-NN     the work shown in place — installed, on-site, in context
{slug}-{state}     a descriptive token replaces the number for distinct named states
                   (e.g. lightvessel-lights-on / lightvessel-lights-off)
```

Distinct titled works inside one project carry their number as part of identity,
right after the slug: `lightvessel-1-NN`, `lightvessel-2-NN`.

Deliberately **not** roles: `detail` (a close-up belongs to whatever section it
appears in — usually `process` or `view`) and `social` (origin is invisible to the
visitor; a reused Instagram image is still a `view` or `process` shot).

Renaming an image means updating every reference in the project's HTML **and** in
`project-relations.js` in the same commit, or images break. Do renames as a scripted
pass (build an old→new map, `git mv`, then rewrite references), one project at a time.

## Headers / security

`site/_headers` sets a strict CSP (allows Vimeo + YouTube embeds for video),
`X-Frame-Options: DENY`, `nosniff`, referrer + permissions policy, and long-lived
immutable caching for `/images`, `/fonts`, `*.css`, `*.js`, while HTML revalidates
every request. Update the CSP if you add a new embed/CDN source.

## Don'ts

- No build tooling, no external CSS frameworks, no JS dependencies/CDNs beyond the
  embed players already allowed in the CSP.
- Don't put deployable files at the repo root — they belong in `site/`.
- Don't introduce `.html` URLs in links, canonicals, or the sitemap.
