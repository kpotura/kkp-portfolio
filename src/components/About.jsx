import { inline, paragraphs } from '../markdown.js';

export default function About({ about }) {
  const photos = about.photos || [];
  return (
    <section className="section about" id="about">
      <div className={photos.length ? 'about-card about-card-photos' : 'about-card'}>
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          {!photos.length && <h2 dangerouslySetInnerHTML={inline(about.heading)} />}
        </div>
        {photos.length > 0 && (
          <div className="photo-grid">
            {photos.map((photo, i) => (
              <figure key={photo.src || i} className="photo-tile">
                {photo.src
                  ? <img src={photo.src} alt={photo.alt || ''} loading="lazy" style={photo.position ? { objectPosition: photo.position } : undefined} />
                  : <div className="photo-placeholder">Photo {i + 1}</div>}
                {photo.caption && <figcaption>{photo.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}
        <div className="about-copy">
          {paragraphs(about.body).map((text) => (
            <p key={text} dangerouslySetInnerHTML={inline(text)} />
          ))}
        </div>
      </div>
    </section>
  );
}
