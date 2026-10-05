import { inline } from '../markdown.js';
import SectionHeading from './SectionHeading.jsx';

export default function Capabilities({ capabilities }) {
  return (
    <section className="section capabilities">
      <SectionHeading eyebrow={capabilities.eyebrow} heading={capabilities.heading} />
      <div className="capability-grid">
        {capabilities.items.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p dangerouslySetInnerHTML={inline(item.text)} />
          </div>
        ))}
      </div>
    </section>
  );
}
