# ZakuVerse Production Environment Variables (Vercel)

| Variable name | Description | Where to get it | Required? |
| --- | --- | --- | --- |
| NEXT_PUBLIC_SITE_URL | Canonical base URL used for metadata, canonical links, sitemap absolute URLs, and JSON-LD IDs. | Production domain value you control, e.g. https://zakuverse.com after go-live. | Yes |
| NEXT_PUBLIC_GA_MEASUREMENT_ID | GA4 Measurement ID for analytics event tracking via gtag (`G-XXXXXXXXXX`). | Google Analytics 4 Admin -> Data Streams -> Web stream -> Measurement ID. | Yes |
| NEXT_PUBLIC_CLARITY_ID | Microsoft Clarity project ID used by the Clarity script injector. | Microsoft Clarity -> Project settings -> Tracking code/project ID. | Yes |
| NEXT_PUBLIC_CONTACT_EMAIL | Public contact email used in schema/contact constants and UI fallbacks. | Business inbox chosen for site contact (e.g. hello@zakuverse.com). | Recommended |
| NEXT_PUBLIC_CONTACT_PHONE | Public contact phone number used in schema/contact constants and UI fallbacks. | Official business phone number in E.164-friendly format. | Recommended |
| NEXT_PUBLIC_WHATSAPP_NUMBER | WhatsApp destination number used to build `wa.me` URL CTA links. | WhatsApp Business number (digits only recommended). | Recommended |

## Notes
- All listed variables are read on the client side or injected into public metadata/schema pathways, so use only non-secret values.
- Set these in Vercel for `Production` and `Preview` environments to avoid schema/analytics drift.
- If `NEXT_PUBLIC_SITE_URL` is not set, code falls back to `https://zaku-verse.vercel.app`.
