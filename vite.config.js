import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import frontMatter from 'front-matter';

// Turns each .md file in src/content/ into { attributes, body } when the
// site is built, so visitors' browsers never have to parse Markdown files.
const markdownContent = () => ({
  name: 'markdown-content',
  transform(code, id) {
    if (!id.endsWith('.md')) return null;
    return { code: `export default ${JSON.stringify(frontMatter(code))};`, map: null };
  },
});

export default defineConfig({
  plugins: [markdownContent(), react()],
});
