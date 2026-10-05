import { inline } from '../markdown.js';

export default function CaseCard({ category, title, summary, highlights = [], link, featured }) {
  return (
    <article className={featured ? 'case-card featured' : 'case-card'}>
      <div className="case-meta">{category}</div>
      <h3 dangerouslySetInnerHTML={inline(title)} />
      <p dangerouslySetInnerHTML={inline(summary)} />
      <ul>
        {highlights.map((item) => (
          <li key={item} dangerouslySetInnerHTML={inline(item)} />
        ))}
      </ul>
      {link && (
        <a className="case-button" href={link}>
          View details
        </a>
      )}
    </article>
  );
}
