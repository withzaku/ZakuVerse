import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import useMeta from '../hooks/useMeta'
import { contactMethods, faqs } from '../data/siteData'

function ContactPage() {
  const [open, setOpen] = useState(0)
  const [sent, setSent] = useState(false)

  useMeta({
    title: 'Contact | ZakuVerse',
    description: 'Start your project with ZakuVerse via contact form, email, or WhatsApp.',
  })

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const service = form.get('service')
    const message = form.get('message')
    const subject = encodeURIComponent(`Project Inquiry - ${service}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`)
    window.location.href = `mailto:hello@zakuverse.com?subject=${subject}&body=${body}`
    e.currentTarget.reset()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        badge="💬 Let’s Talk"
        title={<>Start Your <span className="gradient-text">Project Today</span></>}
        subtitle="Tell us your vision. We’ll respond with a clear plan and execution path."
        current="Contact"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <div className="badge" style={{ marginBottom: 16 }}>📬 Reach Us</div>
              <h2>Let’s Build Something <span className="gradient-text">Great</span></h2>
              <p>Whether you have a detailed brief or just an idea — we’d love to hear it.</p>

              <div className="contact-methods">
                {contactMethods.map((method) => (
                  <div className="contact-method" key={method.type}>
                    <div className="method-icon">{method.icon}</div>
                    <div className="method-info">
                      <span>{method.type}</span>
                      {method.href ? <a href={method.href}>{method.value}</a> : <p>{method.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form-wrap reveal reveal-delay-1">
              <h3 className="form-title">📋 Tell Us About Your Project</h3>
              <form id="contactForm" onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input id="contact-name" name="name" type="text" required placeholder="John Smith" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input id="contact-email" name="email" type="email" required placeholder="john@example.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-service">Service *</label>
                  <select id="contact-service" name="service" required defaultValue="">
                    <option value="" disabled>Select a service…</option>
                    <option value="Web Development">Web Development</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Bioinformatics">Bioinformatics</option>
                    <option value="SEO & Growth">SEO & Growth</option>
                    <option value="Custom Tools">Custom Tools</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Project Details *</label>
                  <textarea id="contact-message" name="message" required placeholder="Describe your project goals and requirements…"></textarea>
                </div>
                <div className="form-submit">
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>🔒 Your information stays private.</p>
                  <button className="btn btn-primary" type="submit">Send Message →</button>
                </div>
              </form>
              {sent && <p style={{ marginTop: 14, color: 'var(--color-primary)' }}>Message drafted in your email app. We’ll respond quickly.</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center">
            <div className="badge reveal">❓ FAQ</div>
            <h2 className="section-title reveal reveal-delay-1">Frequently Asked Questions</h2>
          </div>
          {faqs.map((faq, index) => (
            <div className="card reveal" key={faq.q} style={{ marginBottom: 12, padding: 0 }}>
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                style={{ width: '100%', background: 'none', color: 'inherit', border: 'none', textAlign: 'left', padding: '18px 22px', cursor: 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}
              >
                {faq.q}
                <span>{open === index ? '−' : '+'}</span>
              </button>
              {open === index && <p style={{ color: 'var(--color-text-muted)', padding: '0 22px 18px' }}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ContactPage
