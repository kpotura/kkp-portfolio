export default function SiteFooter({ site }) {
  return (
    <footer>
      <p>{`© ${new Date().getFullYear()} ${site.name}`}</p>
      <p>{site.motto.join(' · ')}</p>
    </footer>
  );
}
