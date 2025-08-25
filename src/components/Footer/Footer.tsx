export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <small>© {new Date().getFullYear()} Oz. Made with React + Vite.</small>
      </div>
    </footer>
  );
}
