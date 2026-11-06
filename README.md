# presume-template

A minimal personal résumé site template built with [Eleventy](https://www.11ty.dev/).

## Quick start

Requires Node.js 18+.

```bash
npm install
npm start
```

Local preview: http://localhost:8080

Build the static site:

```bash
npm run build
```

Output is written to `_site/`.

## Content

| Purpose | File |
|---------|------|
| Name, bio, avatar, social links, footer | `src/_data/site.json` |
| Body copy (experience, projects, etc.) | `src/index.md` |
| Styles | `src/css/style.css` |
| Local static assets | `src/assets/` |

For a local avatar, place the image under `src/assets/` and set `avatar` in `site.json` to `/assets/<filename>`.

Example `site.json`:

```json
{
  "name": "Your Name",
  "about": "A short bio.",
  "avatar": "/assets/avatar.jpg",
  "lang": "en",
  "social": [
    {
      "label": "GitHub",
      "url": "https://github.com/you"
    },
    {
      "label": "Email",
      "url": "mailto:you@example.com"
    }
  ],
  "footer": [
    {
      "text": "© 2026 Your Name",
      "url": "https://github.com/you"
    },
    {
      "text": "Built with Eleventy",
      "url": "https://www.11ty.dev/"
    }
  ]
}
```

Notes:

- Add or remove `social` entries as needed. Items missing `label` or `url` are skipped. Links are separated by `·`.
- `footer` supports at most two lines. Each line may be a plain string, or an object `{ "text": "...", "url": "..." }`. When `url` is set, the text is clickable; otherwise it renders as plain text.

## Deploy to GitHub Pages

Name the repository `cv`. The published URL will be:

`https://<username>.github.io/cv/`

Example: https://lxien.github.io/cv/

Steps:

1. If the repository is not already named `cv`, rename it under Settings → General → Repository name.
2. Under Settings → Pages → Build and deployment, set Source to **GitHub Actions** (not “Deploy from a branch”). Branch/Jekyll builds will ignore the Eleventy layout and publish a broken page from `src/index.md`.
3. Push to `main`. `.github/workflows/deploy.yml` builds and deploys automatically.

The workflow sets the path prefix from the repository name. With a repo named `cv`, the prefix is `/cv/` and no further config is required. For a `username.github.io` user site or a custom domain, set `ELEVENTY_PATH_PREFIX` to `/`, or remove the environment variable.

## Layout

```
src/
  _data/site.json     # Site metadata
  _includes/base.njk  # Page layout
  css/style.css       # Styles
  assets/             # Static assets (optional)
  index.md            # Page body
prototypes/           # Early HTML prototypes (reference only)
```
