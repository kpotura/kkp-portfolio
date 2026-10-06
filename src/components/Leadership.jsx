import { inline, paragraphs } from '../markdown.js';
import SectionHeading from './SectionHeading.jsx';

export default function Leadership({ leadership }) {
  return (
    <section className="section leadership" id="leadership">
      <SectionHeading eyebrow={leadership.eyebrow} heading={leadership.heading} />

      <div className="principles">
        {leadership.principles.map((principle, i) => (
          <article key={principle.title}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <h3>{principle.title}</h3>
            <p dangerouslySetInnerHTML={inline(principle.text)} />
          </article>
        ))}
      </div>

      {leadership.show_callout && (
        <div className="leadership-callout">
          <p className="quote">{`“${leadership.quote}”`}</p>
          <div className="leadership-details">
            {paragraphs(leadership.details).map((text) => (
              <p key={text} dangerouslySetInnerHTML={inline(text)} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
