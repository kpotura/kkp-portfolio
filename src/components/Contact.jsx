import { inline } from '../markdown.js';
import Button from './Button.jsx';

export default function Contact({ contact, site }) {
  return (
    <section className="section contact" id="contact">
      <p className="eyebrow">{contact.eyebrow}</p>
      <h2 dangerouslySetInnerHTML={inline(contact.heading)} />
      <div className="contact-actions">
        <Button label={contact.emailButton} link={`mailto:${site.email}`} />
        <Button label={contact.linkedinButton} link={site.linkedin} style="secondary" />
      </div>
    </section>
  );
}
