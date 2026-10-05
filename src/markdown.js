import { marked } from 'marked';

// One line of Markdown (for example *italic* or a [link](url)) as HTML.
export const inline = (text = '') => ({ __html: marked.parseInline(text.trim()) });

// Text separated by blank lines, as a list of paragraphs.
export const paragraphs = (text = '') =>
  text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
