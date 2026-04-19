# zakuverse.com Migration Runbook

Status: ready-to-execute
Current canonical host: https://zaku-verse.vercel.app
Target canonical host: https://zakuverse.com

## 1) next.config.ts changes (host-level 301 redirect)

Update redirects in next.config.ts so every request on the old host permanently redirects to the new host.

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "zaku-verse.vercel.app" }],
        destination: "https://zakuverse.com/:path*",
        permanent: true,
      },
      {
        source: "/methology",
        destination: "/methodology",
        permanent: true,
      },
      {
        source: "/methology/:path*",
        destination: "/methodology/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

## 2) metadataBase update in layout.tsx

No code rewrite is required if NEXT_PUBLIC_SITE_URL is updated, because layout.tsx already uses siteConfig.siteUrl:

```ts
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  // ...
};
```

Set this environment variable in Vercel Production:

```bash
NEXT_PUBLIC_SITE_URL=https://zakuverse.com
```

Optional hardening in src/lib/seo.ts:

```ts
const defaultSiteUrl = "https://zakuverse.com";
```

## 3) Canonical URL updates

No route-by-route edits required if NEXT_PUBLIC_SITE_URL is set correctly.
All canonical and alternates are generated from absoluteUrl(path) in src/lib/seo.ts.

Validation command after deployment:

```bash
curl -I https://zakuverse.com
curl -s https://zakuverse.com | grep -i canonical
```

Expected: canonical should point to https://zakuverse.com/* only.

## 4) Search Console domain change process (step-by-step)

1. Add and verify Domain property for zakuverse.com in Search Console.
2. Keep existing property for zaku-verse.vercel.app verified during transition.
3. In old-property settings, use Change of Address to zakuverse.com.
4. Submit sitemap from new host: https://zakuverse.com/sitemap.xml.
5. Resubmit priority URLs with URL Inspection request indexing.
6. Monitor Coverage + Pages + Enhancements for 14-30 days.
7. Keep 301 redirects active for at least 12 months.

## 5) 301 redirect setup from old Vercel domain

In Vercel project settings:

1. Add zakuverse.com and www.zakuverse.com as production domains.
2. Keep zaku-verse.vercel.app attached.
3. Set zakuverse.com as primary production domain.
4. Deploy with redirect rule from next.config.ts above.
5. Validate with curl:

```bash
curl -I https://zaku-verse.vercel.app/services
```

Expected:
- Status 308 or 301
- Location: https://zakuverse.com/services

## 6) Sitemap URL updates

No file rewrite required if NEXT_PUBLIC_SITE_URL is updated, because sitemap uses absoluteUrl().

Validation command:

```bash
curl -s https://zakuverse.com/sitemap.xml | head -n 40
```

Expected: all <loc> URLs use https://zakuverse.com/*

## 7) Schema @id updates

No manual @id edits required. src/lib/schema.ts builds IDs using absoluteUrl(), for example:

```ts
const organizationId = absoluteUrl("/#organization");
const personId = absoluteUrl("/#person");
const websiteId = absoluteUrl("/#website");
```

Once NEXT_PUBLIC_SITE_URL is switched, @id values move automatically to zakuverse.com.

Validation:

1. View page source on homepage.
2. Check JSON-LD @id values use https://zakuverse.com/#organization, #person, #website.

## Go-live checklist

1. Set NEXT_PUBLIC_SITE_URL=https://zakuverse.com in Vercel production env.
2. Add host redirect rule in next.config.ts.
3. Deploy.
4. Verify old-host to new-host 301/308 on 10 key URLs.
5. Verify canonical, sitemap, robots, and JSON-LD host values.
6. Submit new sitemap in Search Console.
7. Trigger Change of Address.
8. Monitor index and traffic signals daily for first 14 days.
