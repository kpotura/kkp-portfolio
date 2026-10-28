import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
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

const page = (file) => fileURLToPath(new URL(file, import.meta.url));

export default defineConfig({
  plugins: [markdownContent(), react(), tailwindcss()],
  resolve: {
    alias: { '@': page('./src') },
  },
  build: {
    // Two pages: the portfolio and the password page (built with shadcn/ui).
    rollupOptions: {
      input: { index: page('./index.html'), login: page('./login.html') },
    },
  },
});
