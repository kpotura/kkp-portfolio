# Kelley Portfolio Site

React + Vite one-page portfolio, deployed by Vercel from `main`.

- All copy lives in `src/content/*.md` (front matter + body). Components in
  `src/components/` take text as props and hold none of their own; change
  wording in the Markdown files, not in JSX.
- `src/content.js` maps the Markdown files to the props `App.jsx` passes down;
  `vite.config.js` parses them at build time.
- Styling is the single `public/styles.css`, shared with `public/login.html`.
  Keep existing class names; components use them as `className`.
- Check changes with `npm run build`. The page should match the live site
  unless a visual change was asked for.
