export default function ProofBar({ stats }) {
  return (
    <section className="proof-bar" aria-label="Career highlights">
      {stats.map((stat) => (
        <div key={stat.figure}>
          <strong>{stat.figure}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
