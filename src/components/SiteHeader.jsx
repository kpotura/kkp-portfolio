export default function SiteHeader({ site }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${site.name} home`}>
        {site.initials}
      </a>
      <nav aria-label="Primary">
        {site.nav.map((item) => (
          <a key={item.link} href={item.link}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href={`mailto:${site.email}`}>
          {site.cta}
        </a>
      </nav>
    </header>
  );
}
