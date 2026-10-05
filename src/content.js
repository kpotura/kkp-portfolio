// Every word, link and list on the page.
export default {
  site: {
    name: 'Kelley Poturalski',
    initials: 'KP',
    email: 'hello@kelleyp.co',
    linkedin: 'https://www.linkedin.com/in/kpotura',
    cta: 'Let’s talk',
    motto: ['Choose kindness', 'Stay curious', 'Do good work, together'],
    nav: [
      { label: 'Work', link: '#work' },
      { label: 'Leadership', link: '#leadership' },
      { label: 'About', link: '#about' },
    ],
  },

  hero: {
    eyebrow: 'UX + Product Design Leadership · Denver',
    headline: 'I help teams turn *messy systems* into useful, human experiences.',
    intro:
      'I’m Kelley Poturalski, a UX and product design leader who combines creativity, logic, research, and systems thinking to help teams make better products—and better decisions.',
    buttons: [
      { label: 'See selected work', link: '#work', style: 'primary' },
      { label: 'How I lead', link: '#leadership', style: 'secondary' },
    ],
    manifesto: ['Choose kindness.', 'Stay curious.', 'Do good work, together.', 'Build with *creativity + logic.*'],
  },

  stats: [
    { figure: '15+ years', label: 'designing products & services' },
    { figure: '10-person team', label: 'led across multiple product lines' },
    { figure: '108 tests', label: 'run in nine months' },
    { figure: 'Enterprise scale', label: 'systems, accessibility & AI' },
  ],

  work: {
    eyebrow: 'Selected work',
    heading: 'Big problems. Practical progress.',
    intro:
      'I’m most useful when the problem crosses product, design, engineering, operations, and customer reality.',
  },

  cases: [
    {
      featured: true,
      category: 'Enterprise experience strategy',
      title: 'Unifying fragmented scheduling experiences',
      summary:
        'Mapped product differences across business lines to separate true customer needs from legacy implementation choices—giving teams a shared way to discuss where experiences could converge.',
      highlights: ['Cross-product workflow mapping', 'AI-assisted concept exploration', 'Stakeholder alignment around user value'],
      link: 'login.html',
    },
    {
      category: 'Design systems',
      title: 'Building the system before the rebrand',
      summary:
        'Partnered with designers and engineers to publish shared tokens, patterns, and reusable components before dedicated funding existed, creating a practical foundation for modernization and a future rebrand.',
      highlights: ['Shared design tokens', 'Designer + engineer contribution model', 'Faster front-end implementation'],
      link: 'login.html',
    },
    {
      category: 'Research operations',
      title: 'Making research part of delivery',
      summary:
        'Helped a product design team move from occasional validation to a repeatable testing habit—108 usability tests in nine months—so product tradeoffs were grounded in observed behavior instead of opinion.',
      highlights: ['Unmoderated usability testing', 'Research democratization', 'Evidence-based prioritization'],
      link: 'login.html',
    },
    {
      category: 'Platform modernization',
      title: 'Modernizing without breaking what works',
      summary:
        'Led design through complex service experiences shaped by eligibility, scheduling, client-specific rules, accessibility, and older technology. The goal: modernize the experience without disrupting the people who rely on it every day.',
      highlights: ['Legacy workflow redesign', 'Accessibility & WCAG', 'Cross-functional delivery'],
      link: 'login.html',
    },
  ],

  leadership: {
    eyebrow: 'Leadership',
    heading: 'Good design happens when people can do their best thinking.',
    principles: [
      {
        title: 'Choose kindness',
        text: 'Direct feedback and high standards work better when people know they’re respected. I try to make candor useful, not theatrical.',
      },
      {
        title: 'Stay curious',
        text: 'Ask what changed. Ask what we’re assuming. Ask what the customer is doing—not just what they say they want.',
      },
      {
        title: 'Do good work, together',
        text: 'I like player-coach leadership: setting direction, clearing obstacles, mentoring designers, and staying close enough to the work to help.',
      },
      {
        title: 'Creativity + logic',
        text: 'Great product work needs imagination and structure. I use systems, research, prototypes, and measurable outcomes to turn ideas into decisions teams can act on.',
      },
    ],
    quote: 'Bring structure to messy problems, make the invisible visible, and help the team move.',
    details: `I’ve led designers across enterprise products, consumer experiences, mobile, web, service design, design systems, accessibility, and AI-enabled product development.

My sweet spot is the middle of strategy and execution: translating business goals into a product direction, creating enough structure to align people, and then helping the team ship.`,
  },

  capabilities: {
    eyebrow: 'What I bring',
    heading: 'Strategy without losing the craft.',
    items: [
      { title: 'Product & UX strategy', text: 'Vision, prioritization, experience strategy, complex workflow simplification.' },
      { title: 'Team leadership', text: 'Coaching, hiring, operating rhythms, critique, career growth, stakeholder trust.' },
      { title: 'Design systems', text: 'Tokens, components, governance, accessibility, design-to-code collaboration.' },
      { title: 'Research & experimentation', text: 'Usability testing, analytics, experiments, customer insight, evidence-based decisions.' },
      { title: 'AI-enabled design', text: 'Rapid concepting, workflow comparison, prototyping, system-aware generation.' },
      { title: 'Cross-functional delivery', text: 'Product, engineering, marketing, operations, executives, and distributed teams.' },
    ],
  },

  about: {
    eyebrow: 'About Kelley',
    heading: 'I’m a designer who became a leader without wanting to stop designing.',
    body: `I’ve spent my career helping teams make complex products easier to understand and use. Along the way I’ve moved between product design, design leadership, service design, systems work, and organizational problem-solving.

I’m energized by smart, funny, generous people, ambiguous problems, and the moment a team suddenly sees a path forward. I believe the best leaders create clarity, make room for others to contribute, and keep learning themselves.

Outside work, I’m usually making something, biking somewhere, reading with the Denver UX community, or turning a half-formed idea into a project before anyone has had the chance to stop me.`,
  },

  contact: {
    eyebrow: 'Let’s make something useful',
    heading: 'Looking for a UX leader who can connect strategy, systems, and the actual work?',
    emailButton: 'Email Kelley',
    linkedinButton: 'LinkedIn',
  },
};
