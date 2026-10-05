import content from './content.js';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import Hero from './components/Hero.jsx';
import ProofBar from './components/ProofBar.jsx';
import Work from './components/Work.jsx';
import Leadership from './components/Leadership.jsx';
import Capabilities from './components/Capabilities.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const { site } = content;
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader site={site} />
      <main id="main">
        <Hero hero={content.hero} />
        <ProofBar stats={content.stats} />
        <Work work={content.work} cases={content.cases} />
        <Leadership leadership={content.leadership} />
        <Capabilities capabilities={content.capabilities} />
        <About about={content.about} />
        <Contact contact={content.contact} site={site} />
      </main>
      <SiteFooter site={site} />
    </>
  );
}
