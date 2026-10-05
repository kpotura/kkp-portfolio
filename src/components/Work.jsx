import SectionHeading from './SectionHeading.jsx';
import CaseCard from './CaseCard.jsx';

export default function Work({ work, cases }) {
  return (
    <section className="section work" id="work">
      <SectionHeading {...work} />
      <div className="case-grid">
        {cases.map((item) => (
          <CaseCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
