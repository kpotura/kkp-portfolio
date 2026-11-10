# Kelley Portfolio Site

Kelley Poturalski's UX leadership portfolio, built with React and Vite and
hosted on Vercel at [kelleypoturalski.com](https://www.kelleypoturalski.com).

## Editing the words on the site

Every word, link and list lives in Markdown files in `src/content/`. You never
need to open a component to change the text.

| File | What it controls |
| --- | --- |
| `site.md` | Name, email, LinkedIn, header links, footer motto |
| `hero.md` | Headline, intro, buttons and the tilted manifesto card |
| `stats.md` | The four highlights under the hero |
| `work.md` | Heading and intro for Selected work |
| `work/*.md` | One file per case study, shown in file-name order |
| `leadership.md` | Principles, the large quote and the paragraphs beside it |
| `capabilities.md` | The six "What I bring" boxes |
| `about.md` | The About section |
| `contact.md` | The closing call to action |
| `login.md` | The password page (`login.html`) |

Each file has settings between the `---` lines (titles, links, lists) and
plain paragraphs below them. A few tips:

- Words between `*asterisks*` show in italics or the accent color.
- Leave a blank line between paragraphs.
- If a setting's text contains a colon followed by a space, wrap the text in
  `"quotes"`.
- To add a case study, copy a file in `work/`, rename it (for example
  `05-new-project.md`) and edit it. `featured: true` makes a card full width.

Open a pull request with your change; Vercel posts a preview link so you can
check it before merging to `main`, which publishes the site.

## Run locally

Requires Node.js 20 or newer.

```
npm install
npm run dev       # preview at http://localhost:5173 with live reload
npm run build     # production build into dist/
```

## How it's put together

- `index.html` is the page shell: title, meta description and fonts.
- `src/App.jsx` stacks the header, the seven sections and the footer.
- `src/components/` holds one component per section, plus the shared
  `SectionHeading`, `Button` and `CaseCard`.
- `src/content.js` loads the Markdown files; `vite.config.js` reads them at
  build time.
- `login.html` is the password page, rendered by `src/login.jsx` and
  `src/components/LoginPage.jsx`. It is built with
  [shadcn/ui](https://ui.shadcn.com) components (`src/components/ui/`) on
  Tailwind CSS; `src/login.css` points the shadcn colours at the site's own
  tokens. Tailwind only loads on this page, so the portfolio is untouched.
  Add more shadcn components with `npx shadcn@latest add <name>`.
- `public/` is served as-is: `styles.css` (shared by every page) and photos.

## Still to do

1. The contact email is kkpdenver@gmail.com (set in `src/content/site.md`).
2. Connect the login form to real authentication before protecting
   confidential case-study content.
3. Add project imagery.
4. Page views are counted with Vercel Web Analytics (enable it in the
   Vercel project's Analytics tab). Click tracking needs Vercel Pro or
   another tool such as Umami.

## Design direction

Warm editorial / modern craft:
- Soft warm neutral background
- Serif display type + clean sans-serif body
- Terracotta accent
- Light sage supporting tone
- Strong content hierarchy
- Motto used as a brand/leadership framework rather than decoration
