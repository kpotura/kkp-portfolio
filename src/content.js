// Loads the Markdown files in src/content/ for the components.
// Each file has settings between the --- lines and text below them;
// vite.config.js splits the two apart when the site is built.
const files = import.meta.glob('./content/**/*.md', { import: 'default', eager: true });

const read = (path) => {
  const { attributes, body } = files[path];
  return { ...attributes, body: body.trim() };
};

const section = (name) => read(`./content/${name}.md`);

const site = section('site');
const hero = section('hero');
const work = section('work');
const leadership = section('leadership');

const cases = Object.keys(files)
  .filter((path) => path.startsWith('./content/work/'))
  .sort()
  .map(read)
  .map(({ body, ...rest }) => ({ ...rest, summary: body }));

export default {
  site,
  hero: { ...hero, intro: hero.body },
  stats: section('stats').stats,
  showStats: section('stats').show_stats,
  work: { eyebrow: work.eyebrow, heading: work.heading, intro: work.body },
  cases,
  leadership: { ...leadership, details: leadership.body },
  capabilities: section('capabilities'),
  about: section('about'),
  contact: section('contact'),
};
