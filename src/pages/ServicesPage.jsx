import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import useMeta from '../hooks/useMeta'

const services = [
  {
    id: 'web',
    badge: '🌐 Web Development',
    title: 'Websites & Web Apps That Convert',
    problem: 'Outdated, slow websites fail to convert traffic into customers.',
    solution: 'We build high-performance, conversion-focused digital products with modern architecture.',
    benefits: ['Custom UI/UX', 'Mobile-first responsiveness', 'SEO-ready architecture', 'Secure integrations'],
  },
  {
    id: 'ai',
    badge: '🤖 AI Automation',
    title: 'Automate Repetitive Work, Scale Faster',
    problem: 'Manual operations consume time and increase operational costs.',
    solution: 'We design AI-driven automations and assistants that run 24/7.',
    benefits: ['LLM chatbots', 'Workflow automation', 'ETL and data pipelines', 'API integrations'],
  },
  {
    id: 'tools',
    badge: '⚙️ Custom Tools',
    title: 'Bespoke Software Built for Your Process',
    problem: 'Off-the-shelf software rarely fits unique workflows.',
    solution: 'We build custom internal tools, admin dashboards, and SaaS products.',
    benefits: ['Admin dashboards', 'Custom APIs', 'SaaS MVP builds', 'Legacy modernization'],
  },
  {
    id: 'bio',
    badge: '🧬 Bioinformatics',
    title: 'Research-Grade Biological Computing',
    problem: 'Biological datasets are complex and difficult to process reproducibly.',
    solution: 'We deliver robust bioinformatics pipelines and analysis platforms.',
    benefits: ['DNA/RNA analysis', 'Variant workflows', 'Protein data tooling', 'Pipeline automation'],
  },
  {
    id: 'seo',
    badge: '📈 SEO & Growth',
    title: 'Grow Visibility, Traffic, and Revenue',
    problem: 'Strong products fail when discoverability is weak.',
    solution: 'We execute measurable SEO and growth strategies focused on ROI.',
    benefits: ['Technical audits', 'Keyword/content strategy', 'CWV optimization', 'Reporting dashboards'],
  },
]

function ServicesPage() {
  useMeta({
    title: 'Services | ZakuVerse — AI, Web & Bioinformatics',
    description: 'Explore ZakuVerse services: web development, AI automation, custom tools, bioinformatics, and SEO growth.',
  })

  return (
    <>
      <PageHeader
        badge="🛠️ What We Offer"
        title={<><span className="gradient-text">Services</span> that Scale</>}
        subtitle="Comprehensive technology solutions tailored to your exact needs."
        current="Services"
      />

      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`service-detail ${index % 2 === 1 ? 'reverse' : ''} reveal`}>
              <div className="service-visual">
                <div className="visual-icon">{service.badge.split(' ')[0]}</div>
                <div className="visual-label">{service.badge.replace(/^\S+\s/, '')}</div>
              </div>
              <div className="service-info">
                <div className="badge">{service.badge}</div>
                <h2>{service.title}</h2>
                <p><strong>The Problem:</strong> {service.problem}</p>
                <p><strong>Our Solution:</strong> {service.solution}</p>
                <div className="service-features">
                  {service.benefits.map((benefit) => <div key={benefit} className="feature-item">{benefit}</div>)}
                </div>
                <Link to="/contact" className="btn btn-primary">Start This Service →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
