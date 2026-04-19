# Pre-Deploy Checklist (SEO + Analytics)

## Release readiness
- Confirm production environment variables are set:
  - NEXT_PUBLIC_GA_MEASUREMENT_ID
  - NEXT_PUBLIC_CLARITY_ID
- Confirm no debug scripts are left in production templates.
- Confirm robots and sitemap routes resolve without error.

## Analytics validation
- Verify GA4 script initializes on first page load.
- Verify Clarity script initializes after interactive.
- Verify key events fire:
  - `cta_click`
  - `service_page_view`
  - `blog_read_depth`
  - `tool_usage`
  - `contact_form_submit`

## Technical SEO checks
- Run `scripts/seo-health-check.ts` and ensure no failed checks.
- Validate canonical paths on major templates.
- Validate structured data on homepage, service pages, and blog detail pages.
- Ensure sitemap includes newly added high-value routes.

## Content and links
- Check internal links from homepage and nav to priority routes.
- Check service pages include contact CTA and related proof links.
- Check resource pages include clear conversion path.

## Post-deploy smoke test
- Open homepage, one service page, one blog page, one resource page, and /contact.
- Confirm no runtime errors in browser console.
- Confirm page titles and meta descriptions render correctly.
- Confirm sitemap.xml returns 200.

## Go-live signoff
- Engineering signoff
- SEO signoff
- Analytics signoff
- Publish release notes with deployment timestamp
