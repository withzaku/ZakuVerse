import { Link } from 'react-router-dom'
import useMeta from '../hooks/useMeta'
import Counter from '../components/Counter'
import { serviceOverview, techLogos, portfolio } from '../data/siteData'

function HomePage() {
  useMeta({
    title: 'ZakuVerse | AI, Web Development & Bioinformatics Solutions',
    description: 'Build. Automate. Scale with ZakuVerse — AI services, web development, automation, and bioinformatics solutions.',
  })

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="badge"><span className="dot"></span> Next-Gen Tech Platform</div>
            <h1>Build. Automate.<br />Scale with <span className="gradient-text">ZakuVerse</span></h1>
            <p className="hero-desc">
              Your AI-powered partner for web development, intelligent automation,
              bioinformatics research, and digital growth.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">🚀 Get Started</Link>
              <Link to="/services" className="btn btn-ghost">Explore Services →</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong><Counter target={50} suffix="+" /></strong><span>Projects Delivered</span></div>
              <div className="hero-stat"><strong><Counter target={100} suffix="%" /></strong><span>Client Satisfaction</span></div>
              <div className="hero-stat"><strong><Counter target={4} suffix="x" /></strong><span>Faster Delivery</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <p className="text-center" style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 24 }}>Technologies We Work With</p>
          <div className="tech-logos">{techLogos.map((item) => <span key={item} className="tech-logo-item">{item}</span>)}</div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="text-center">
            <div className="badge reveal">🛠️ What We Do</div>
            <h2 className="section-title reveal reveal-delay-1">Our Core Services</h2>
            <p className="section-subtitle reveal reveal-delay-2">End-to-end solutions that take your project from concept to production-ready reality.</p>
          </div>
          <div className="services-grid">
            {serviceOverview.map((service, idx) => (
              <div className={`service-card reveal reveal-delay-${idx}`} key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={service.link} className="btn btn-ghost" style={{ marginTop: 20, padding: '10px 20px', fontSize: '0.85rem' }}>Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="text-center">
            <div className="badge reveal">💼 Our Work</div>
            <h2 className="section-title reveal reveal-delay-1">Featured Projects</h2>
          </div>
          <div className="projects-preview">
            {portfolio.slice(0, 3).map((item, idx) => (
              <Link key={item.title} to="/portfolio" className={`project-preview-card reveal reveal-delay-${idx}`}>
                <div className="project-mockup"><div className="mockup-lines"></div><div className="mockup-icon">{item.icon}</div></div>
                <div className="project-preview-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="project-tech">{item.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 40 }}><Link to="/portfolio" className="btn btn-outline">View All Projects →</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="badge" style={{ justifyContent: 'center' }}>🚀 Ready to Start?</div>
            <h2>Start Your Project <span className="gradient-text">Today</span></h2>
            <p>Let’s build something extraordinary together.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">💬 Talk to Us</Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
