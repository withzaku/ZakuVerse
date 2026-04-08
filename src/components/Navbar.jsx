import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-container">
          <Link to="/" className="nav-logo" aria-label="ZakuVerse Home">
            <div className="logo-icon" aria-hidden="true">⚡</div>
            Zaku<span>Verse</span>
          </Link>

          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn btn-primary nav-cta">Get Started →</Link>

          <button className={`nav-toggle ${open ? 'open' : ''}`} aria-label="Toggle mobile menu" onClick={() => setOpen((s) => !s)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-mobile ${open ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <ul role="list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '16px' }} onClick={() => setOpen(false)}>Get Started →</Link>
      </div>
    </>
  )
}

export default Navbar
