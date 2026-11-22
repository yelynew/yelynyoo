# Yelyn Yoo — Portfolio

A responsive, framework-free portfolio for GitHub Pages, styled as a technical document: an impact table, case notes for production work, and short technical write-ups (architecture diagram, formulas, design decisions) for each project. No proprietary company code is shown.

## Preview locally

Open `index.html` directly, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish as a GitHub user site

1. Create a public repository named `<your-github-username>.github.io`.
2. Copy every file in this folder—including `.nojekyll`—to the repository root.
3. Commit and push the files to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
6. Visit `https://<your-github-username>.github.io` after GitHub finishes publishing.

GitHub may take several minutes to publish a new site. The official setup guide is available at [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Update content

- Main copy and project details: `index.html`
- Colors (CSS variables at the top), typography, and layout: `styles.css`
- Theme toggle and active-section nav: `script.js`
- CampusLoop retrieval diagram: inline SVG in `index.html` (colors come from CSS variables, so it works in both themes)
- Downloadable résumé: `assets/Yelyn_Yoo_Resume.pdf`
- Installable web app: `manifest.webmanifest`, app icons in `assets/`, offline cache in `sw.js` (after changing site files, bump the `?v=` on `styles.css` / `script.js` in `index.html` and `CACHE` in `sw.js`)
- Browser icon: `assets/favicon.svg`

## Before publishing

- Confirm the résumé is the version you want publicly downloadable.
- Replace or remove any project links you do not want indexed.
- After the site URL is known, add an `og:url` meta tag and use the site URL in the JSON-LD `url` field.

No build step. The only external request is IBM Plex from Google Fonts; system fonts are used if it fails to load.
