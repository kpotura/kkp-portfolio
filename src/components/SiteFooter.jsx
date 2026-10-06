export default function SiteFooter({ site }) {
  return (
    <footer>
      <p>{`© ${new Date().getFullYear()} ${site.name}`}</p>
      {site.show_motto && <p>{site.motto.join(' · ')}</p>}
    </footer>
  );
}
