import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import useMeta from '../hooks/useMeta'
import { portfolio } from '../data/siteData'

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Dev' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'bio', label: 'Bioinformatics' },
  { id: 'seo', label: 'SEO & Growth' },
]

function PortfolioPage() {
  const [active, setActive] = useState('all')

  useMeta({
    title: 'Portfolio | ZakuVerse',
    description: 'See ZakuVerse projects across web development, AI automation, bioinformatics, and SEO growth.',
  })

  const filtered = useMemo(() => active === 'all' ? portfolio : portfolio.filter((p) => p.category === active), [active])

  return (
    <>
      <PageHeader
        badge="💼 Our Work"
        title={<>Projects that <span className="gradient-text">Deliver Results</span></>}
        subtitle="Real solutions for real businesses and research teams."
        current="Portfolio"
      />

      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className="badge reveal">📁 Case Studies</div>
            <h2 className="section-title reveal reveal-delay-1">Featured Work</h2>
          </div>

          <div className="filter-tabs reveal" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
            {filters.map((filter) => (
              <button key={filter.id} className={`filter-tab ${active === filter.id ? 'active' : ''}`} style={{ padding: '9px 22px', borderRadius: 100, cursor: 'pointer' }} onClick={() => setActive(filter.id)}>
                {filter.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid" id="portfolioGrid">
            {filtered.map((item, idx) => (
              <div className={`portfolio-card reveal reveal-delay-${idx % 3}`} key={item.title}>
                <div className="portfolio-thumbnail-inner">
                  <div className="thumb-icon">{item.icon}</div>
                  <div className="thumb-tag">{item.category.toUpperCase()}</div>
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="portfolio-tags">{item.tags.map((tag) => <span className="ptag" key={tag}>{tag}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <div className="badge" style={{ justifyContent: 'center' }}>🚀 Your Project Next</div>
            <h2>Ready to build something <span className="gradient-text">great?</span></h2>
            <p>Let’s turn your idea into a high-performing digital product.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Start Your Project →</Link>
              <Link to="/services" className="btn btn-outline">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioPage
