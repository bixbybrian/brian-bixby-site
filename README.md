# brian-bixby-site

Source repo for **brianbixby.com** — the portfolio and artistic biography of
Brian Bixby.

## Structure

This repo separates *project meta* (kept in the repo, never shipped) from the
*deployed site* (everything in `site/`):

| Path           | Deployed? | Purpose                                              |
|----------------|-----------|------------------------------------------------------|
| `site/`        | yes       | The live website. Netlify publishes this directory.  |
| `CLAUDE.md`    | no        | Conventions + rules for editing the site.            |
| `netlify.toml` | no        | Build config (`publish = "site"`).                   |
| `docs/`        | no        | Style notes, references, planning.                   |
| `tod/`         | no        | Scratch / prototype area for experiments.            |

## Deploy

Push to `main` → GitHub (`bixbybrian/brian-bixby-site`) → Netlify builds and
publishes `site/`. No build step; it's static HTML.

## Editing

Read `CLAUDE.md` first — it documents the design tokens, path rules, project
system, and headers the site depends on.
