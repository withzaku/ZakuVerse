import { Link } from 'react-router-dom'

function PageHeader({ title, subtitle, badge, current }) {
  return (
    <div className="page-header">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.2 }}></div>
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.15 }}></div>
      </div>
      <div className="container page-header-content">
        <div className="breadcrumb" style={{ justifyContent: 'center' }}>
          <Link to="/">Home</Link><span>›</span><span>{current}</span>
        </div>
        <div className="badge">{badge}</div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default PageHeader
