# Yelyn Yoo — Portfolio

A responsive, framework-free portfolio for GitHub Pages. It highlights cloud-service experience, backend automation, applied machine learning, measurable impact, and selected projects without exposing proprietary company code.

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
- Colors and responsive layout: `styles.css`
- Theme, navigation, reveal effects, and filters: `script.js`
- Downloadable résumé: `assets/Yelyn_Yoo_Resume.pdf`
- Browser icon: `assets/favicon.svg`

## Before publishing

- Confirm the résumé is the version you want publicly downloadable.
- Replace or remove any project links you do not want indexed.
- After the site URL is known, add an `og:url` meta tag and use the site URL in the JSON-LD `url` field.

No build command or external dependency is required.
