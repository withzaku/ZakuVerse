# Microsoft Clarity Setup

## 1) Create project
- Go to https://clarity.microsoft.com/
- Create new project for production domain.
- Copy the Clarity Project ID.

## 2) Environment variable
- Add to environment files:
  - NEXT_PUBLIC_CLARITY_ID=your_project_id
- Ensure it is set in deployment platform environment variables.

## 3) Verify integration
- Confirm `src/components/Clarity.tsx` exists and injects Clarity script after interactive.
- Confirm `src/app/layout.tsx` renders `<Clarity />` inside body.

## 4) Basic filters
- Exclude internal traffic (office/IP patterns where possible).
- Segment by device, country, and referral channel.
- Save custom filter for /services/* and /contact routes.

## 5) Core dashboards to monitor weekly
- Rage clicks and dead clicks.
- JavaScript errors.
- Scroll depth on service pages.
- Session recordings with contact form interactions.

## 6) Behavioral goals
- Session reaches /contact.
- Session clicks a primary CTA.
- Session scrolls >= 75% on service pages.

## 7) Privacy and compliance
- Review Clarity masking defaults.
- Confirm no sensitive PII is intentionally captured.
- Keep form fields masked where required.
