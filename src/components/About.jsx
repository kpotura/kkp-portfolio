import { inline, paragraphs } from '../markdown.js';

export default function About({ about }) {
  return (
    <section className="section about" id="about">
      <div className="about-card">
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 dangerouslySetInnerHTML={inline(about.heading)} />
        </div>
        <div className="about-copy">
          {paragraphs(about.body).map((text) => (
            <p key={text} dangerouslySetInnerHTML={inline(text)} />
          ))}
        </div>
      </div>
    </section>
  );
}
