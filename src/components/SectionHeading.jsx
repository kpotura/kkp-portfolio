import { inline } from '../markdown.js';

export default function SectionHeading({ eyebrow, heading, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 dangerouslySetInnerHTML={inline(heading)} />
      {intro && <p dangerouslySetInnerHTML={inline(intro)} />}
    </div>
  );
}
