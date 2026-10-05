export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kelley Poturalski home">KP</a>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#leadership">Leadership</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="mailto:hello@kelleyp.co">Let’s talk</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">UX + Product Design Leadership · Denver</p>
            <h1>I help teams turn <em>messy systems</em> into useful, human experiences.</h1>
            <p className="lede">
              I’m Kelley Poturalski, a UX and product design leader who combines
              creativity, logic, research, and systems thinking to help teams make
              better products—and better decisions.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">See selected work</a>
              <a className="button secondary" href="#leadership">How I lead</a>
            </div>
          </div>

          <aside className="manifesto" aria-label="Design and leadership principles">
            <p>Choose kindness.</p>
            <p>Stay curious.</p>
            <p>Do good work, together.</p>
            <p>Build with <span>creativity + logic.</span></p>
          </aside>
        </section>

        <section className="proof-bar" aria-label="Career highlights">
          <div><strong>15+ years</strong><span>designing products & services</span></div>
          <div><strong>10-person team</strong><span>led across multiple product lines</span></div>
          <div><strong>108 tests</strong><span>run in nine months</span></div>
          <div><strong>Enterprise scale</strong><span>systems, accessibility & AI</span></div>
        </section>

        <section className="section work" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Big problems. Practical progress.</h2>
            <p>
              I’m most useful when the problem crosses product, design, engineering,
              operations, and customer reality.
            </p>
          </div>

          <div className="case-grid">
            <article className="case-card featured">
              <div className="case-meta">Enterprise experience strategy</div>
              <h3>Unifying fragmented scheduling experiences</h3>
              <p>
                Mapped product differences across business lines to separate true
                customer needs from legacy implementation choices—giving teams a
                shared way to discuss where experiences could converge.
              </p>
              <ul>
                <li>Cross-product workflow mapping</li>
                <li>AI-assisted concept exploration</li>
                <li>Stakeholder alignment around user value</li>
              </ul>
              <a className="case-button" href="login.html">View details</a>
            </article>

            <article className="case-card">
              <div className="case-meta">Design systems</div>
              <h3>Building the system before the rebrand</h3>
              <p>
                Partnered with designers and engineers to publish shared tokens,
                patterns, and reusable components before dedicated funding existed,
                creating a practical foundation for modernization and a future rebrand.
              </p>
              <ul>
                <li>Shared design tokens</li>
                <li>Designer + engineer contribution model</li>
                <li>Faster front-end implementation</li>
              </ul>
              <a className="case-button" href="login.html">View details</a>
            </article>

            <article className="case-card">
              <div className="case-meta">Research operations</div>
              <h3>Making research part of delivery</h3>
              <p>
                Helped a product design team move from occasional validation to a
                repeatable testing habit—108 usability tests in nine months—so product
                tradeoffs were grounded in observed behavior instead of opinion.
              </p>
              <ul>
                <li>Unmoderated usability testing</li>
                <li>Research democratization</li>
                <li>Evidence-based prioritization</li>
              </ul>
              <a className="case-button" href="login.html">View details</a>
            </article>

            <article className="case-card">
              <div className="case-meta">Platform modernization</div>
              <h3>Modernizing without breaking what works</h3>
              <p>
                Led design through complex service experiences shaped by eligibility,
                scheduling, client-specific rules, accessibility, and older technology.
                The goal: modernize the experience without disrupting the people who
                rely on it every day.
              </p>
              <ul>
                <li>Legacy workflow redesign</li>
                <li>Accessibility & WCAG</li>
                <li>Cross-functional delivery</li>
              </ul>
              <a className="case-button" href="login.html">View details</a>
            </article>
          </div>
        </section>

        <section className="section leadership" id="leadership">
          <div className="section-heading">
            <p className="eyebrow">Leadership</p>
            <h2>Good design happens when people can do their best thinking.</h2>
          </div>

          <div className="principles">
            <article>
              <span>01</span>
              <h3>Choose kindness</h3>
              <p>
                Direct feedback and high standards work better when people know
                they’re respected. I try to make candor useful, not theatrical.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Stay curious</h3>
              <p>
                Ask what changed. Ask what we’re assuming. Ask what the customer is
                doing—not just what they say they want.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Do good work, together</h3>
              <p>
                I like player-coach leadership: setting direction, clearing obstacles,
                mentoring designers, and staying close enough to the work to help.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Creativity + logic</h3>
              <p>
                Great product work needs imagination and structure. I use systems,
                research, prototypes, and measurable outcomes to turn ideas into
                decisions teams can act on.
              </p>
            </article>
          </div>

          <div className="leadership-callout">
            <p className="quote">
              “Bring structure to messy problems, make the invisible visible,
              and help the team move.”
            </p>
            <div className="leadership-details">
              <p>
                I’ve led designers across enterprise products, consumer experiences,
                mobile, web, service design, design systems, accessibility, and
                AI-enabled product development.
              </p>
              <p>
                My sweet spot is the middle of strategy and execution: translating
                business goals into a product direction, creating enough structure to
                align people, and then helping the team ship.
              </p>
            </div>
          </div>
        </section>

        <section className="section capabilities">
          <div className="section-heading">
            <p className="eyebrow">What I bring</p>
            <h2>Strategy without losing the craft.</h2>
          </div>
          <div className="capability-grid">
            <div>
              <h3>Product & UX strategy</h3>
              <p>Vision, prioritization, experience strategy, complex workflow simplification.</p>
            </div>
            <div>
              <h3>Team leadership</h3>
              <p>Coaching, hiring, operating rhythms, critique, career growth, stakeholder trust.</p>
            </div>
            <div>
              <h3>Design systems</h3>
              <p>Tokens, components, governance, accessibility, design-to-code collaboration.</p>
            </div>
            <div>
              <h3>Research & experimentation</h3>
              <p>Usability testing, analytics, experiments, customer insight, evidence-based decisions.</p>
            </div>
            <div>
              <h3>AI-enabled design</h3>
              <p>Rapid concepting, workflow comparison, prototyping, system-aware generation.</p>
            </div>
            <div>
              <h3>Cross-functional delivery</h3>
              <p>Product, engineering, marketing, operations, executives, and distributed teams.</p>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-card">
            <div>
              <p className="eyebrow">About Kelley</p>
              <h2>I’m a designer who became a leader without wanting to stop designing.</h2>
            </div>
            <div className="about-copy">
              <p>
                I’ve spent my career helping teams make complex products easier to
                understand and use. Along the way I’ve moved between product design,
                design leadership, service design, systems work, and organizational
                problem-solving.
              </p>
              <p>
                I’m energized by smart, funny, generous people, ambiguous problems,
                and the moment a team suddenly sees a path forward. I believe the
                best leaders create clarity, make room for others to contribute, and
                keep learning themselves.
              </p>
              <p>
                Outside work, I’m usually making something, biking somewhere, reading
                with the Denver UX community, or turning a half-formed idea into a
                project before anyone has had the chance to stop me.
              </p>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">Let’s make something useful</p>
          <h2>Looking for a UX leader who can connect strategy, systems, and the actual work?</h2>
          <div className="contact-actions">
            <a className="button primary" href="mailto:hello@kelleyp.co">Email Kelley</a>
            <a className="button secondary" href="https://www.linkedin.com/in/kpotura">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Kelley Poturalski</p>
        <p>Choose kindness · Stay curious · Do good work, together</p>
      </footer>
    </>
  );
}
