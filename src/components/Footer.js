export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Blush Consulting. All rights reserved.</p>
      <div className="footer-links">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:contact@blushconsulting.com">Email</a>
      </div>
    </footer>
  );
}
