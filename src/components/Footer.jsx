import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ display: 'inline-flex' }}>
              <div className="logo-icon">⚡</div>
              Zaku<span>Verse</span>
            </Link>
            <p>Building the future of AI-powered tech. From web to bio — we create solutions that scale.</p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#web">Web Development</Link></li>
              <li><Link to="/services#ai">AI Automation</Link></li>
              <li><Link to="/services#bio">Bioinformatics</Link></li>
              <li><Link to="/services#seo">SEO & Growth</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/tools">Platform</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@zakuverse.com">hello@zakuverse.com</a></li>
              <li><a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">WhatsApp Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 ZakuVerse. All rights reserved.</p>
          <p>Built with ⚡ for the future.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
