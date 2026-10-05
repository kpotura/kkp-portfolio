export default function Button({ label, link, style = 'primary' }) {
  return (
    <a className={`button ${style}`} href={link}>
      {label}
    </a>
  );
}
