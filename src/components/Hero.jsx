import { inline } from '../markdown.js';
import Button from './Button.jsx';

export default function Hero({ hero }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 dangerouslySetInnerHTML={inline(hero.headline)} />
        <p className="lede" dangerouslySetInnerHTML={inline(hero.intro)} />
        <div className="hero-actions">
          {hero.buttons.map((button) => (
            <Button key={button.label} {...button} />
          ))}
        </div>
      </div>

      <aside className="manifesto" aria-label="Design and leadership principles">
        {hero.manifesto.map((line) => (
          <p key={line} dangerouslySetInnerHTML={inline(line)} />
        ))}
      </aside>
    </section>
  );
}
