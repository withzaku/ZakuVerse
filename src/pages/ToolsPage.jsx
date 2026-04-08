import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import useMeta from '../hooks/useMeta'
import { tools } from '../data/siteData'

function ToolsPage() {
  const [submitted, setSubmitted] = useState(false)

  useMeta({
    title: 'Platform & Tools | ZakuVerse',
    description: 'Explore ZakuVerse coming-soon tools including DNA Analysis, SEO Analyzer, and automation scripts.',
  })

  return (
    <>
      <PageHeader
        badge="🚀 Ecosystem"
        title={<>The ZakuVerse <span className="gradient-text">Platform</span></>}
        subtitle="We are building a suite of AI-powered tools for web, automation, and bioinformatics."
        current="Platform"
      />

      <section className="section-sm" style={{ background: 'rgba(0,212,255,0.04)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container text-center">
          <h3 style={{ marginBottom: 8 }}>🔔 Get Early Access</h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 24, fontSize: '0.95rem' }}>Join the waitlist and get notified when tools launch.</p>
          <form
            className="early-access-form"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
              e.currentTarget.reset()
            }}
            style={{ maxWidth: 480, margin: '0 auto', display: 'flex', gap: 12, flexWrap: 'wrap' }}
          >
            <input type="email" placeholder="Enter your email" required style={{ flex: 1, minWidth: 220 }} />
            <button className="btn btn-primary" type="submit">Join Waitlist →</button>
          </form>
          {submitted && <p style={{ marginTop: 12, color: 'var(--color-primary)', fontSize: '0.9rem' }}>You’re on the list. We’ll notify you soon.</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className="badge reveal">🛠️ Tool Suite</div>
            <h2 className="section-title reveal reveal-delay-1">Coming Soon Tools</h2>
            <p className="section-subtitle reveal reveal-delay-2">Future-ready products at the core of the ZakuVerse ecosystem.</p>
          </div>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div className={`tool-card reveal reveal-delay-${index}`} key={tool.title}>
                <div className="coming-soon-tag">{tool.category}</div>
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Development progress</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-secondary)', fontWeight: 600 }}>{tool.progress}%</span>
                </div>
                <div className="tool-progress">
                  <div className="tool-progress-bar" style={{ width: `${tool.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <div className="badge" style={{ justifyContent: 'center' }}>💡 Shape the Roadmap</div>
            <h2>Have a tool idea? <span className="gradient-text">Tell us.</span></h2>
            <p>We build tools based on real user needs.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Suggest a Tool</Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ToolsPage
