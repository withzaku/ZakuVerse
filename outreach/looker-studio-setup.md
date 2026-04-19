# Looker Studio Setup (GA4 + Search Console)

## 1) Data sources
- GA4 property: connect your site property used by NEXT_PUBLIC_GA_MEASUREMENT_ID.
- Search Console site: connect the URL-prefix property for the production domain.
- Optional blend key: use Date for trend views and Landing Page for page-level analysis.

## 2) Fields to include
- Date
- Landing page
- Session source/medium
- Sessions
- Engaged sessions
- Average engagement time
- Key events
- Event name
- Total users
- New users
- Search Console clicks
- Search Console impressions
- Search Console CTR
- Search Console average position

## 3) Calculated fields
- Engaged Session Rate:
  - Formula: Engaged sessions / Sessions
- Lead Conversion Rate:
  - Formula: Key events / Sessions
- Visibility Efficiency:
  - Formula: Search Console clicks / Search Console impressions
- AI Citation Proxy Score:
  - Formula: (Key events * 0.4) + (Search Console clicks * 0.3) + (Engaged sessions * 0.3)

## 4) Dashboard tabs
- Executive Overview:
  - KPIs: Sessions, Key events, Lead Conversion Rate, Search Console clicks, Search Console impressions.
- Landing Page Performance:
  - Table: Landing page, Sessions, Key events, Lead Conversion Rate, CTR, Position.
- Service Page Funnel:
  - Filter to /services/* and include route-level conversion and engagement.
- Blog to Service Assist:
  - Table showing blog landing pages and assisted paths to service/contact routes.
- Technical Visibility:
  - Trend chart: impressions, clicks, CTR, position over time.

## 5) Charts required
- Time-series: clicks, impressions, sessions.
- Scorecards: sessions, key events, conversion rate.
- Table: top landing pages by key events.
- Bar chart: service pages by conversion rate.
- Scatter chart: impressions vs conversions by landing page.

## 6) Filters and controls
- Date range control (last 28 days default).
- Channel/source medium filter.
- Landing page contains filter.
- Device category filter.

## 7) Governance
- Refresh cadence: daily.
- Data quality check: weekly verify GA4 vs Looker totals for sessions and key events.
- Annotation policy: mark deployments and major SEO updates in report notes.
