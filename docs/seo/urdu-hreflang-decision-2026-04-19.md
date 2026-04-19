# Urdu hreflang decision (2026-04-19)

Decision: do not publish a separate `ur` hreflang alternate yet.

## Rationale
- Current routes do not have dedicated Urdu-localized URL variants.
- Adding `hreflang=ur` to the same English URL can create language-intent ambiguity.
- Existing implementation already keeps canonical + `en` + `x-default` stable by default.

## Applied policy
- Keep alternates to `en` and `x-default` unless a true Urdu route exists.
- Only add `ur` alternate when both conditions are met:
  1. A dedicated Urdu URL path is shipped (for example `/ur/...`), and
  2. That route has language-consistent content and metadata.

## Future trigger
When Urdu route set is launched, update:
- page metadata alternates via `createPageMetadata(... alternatesLanguages ...)`
- sitemap language alternates for affected routes
- validation checks to enforce reciprocal hreflang relationships
