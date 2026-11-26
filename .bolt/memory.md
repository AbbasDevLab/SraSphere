# Project memory

## Product intent & audience

- SraSphere is a technology solutions company website (international positioning: Pakistan, UK, UAE).
- Audience: businesses seeking digital transformation — web development, e-commerce, ERP/CRM/POS, custom software, automation/AI.
- Goal: credible, premium marketing site that generates real business enquiries.

## Brand personality & voice

- Business-first, practical, professional. "More than technology. A better way forward."
- Educational and conversion-oriented copy; no fabricated testimonials, client names, metrics, or credentials.
- Honest labelling: academic/internal/concept work clearly identified.

## Visual design & UX direction

- Logo: geometric orbit-sphere (light/dark variants + favicon).
- Palette: Midnight Navy / Electric Cyan.
- Typography: Manrope headings, Inter body.
- Components: sticky nav that compacts on scroll, animated active-link indicator, mobile drawer, service cards with icon + "Explore Solutions", portfolio grid, horizontal→vertical timeline, editorial "Why" section, dark final CTA, detailed footer.
- Animations via Framer Motion: page transitions, hero, scroll reveals, hover/micro-interactions, portfolio image transitions. Respect `prefers-reduced-motion`.
- Mobile-responsive throughout; semantic HTML; descriptive alt text.

## Decisions, constraints & rationale

- Next.js framework; 20 pages generated; production build verified.
- Pages: Home (9 sections), Services, Our Work (listing + 3 case studies), About, Insights, Contact.
- Case study detail pages include: overview, challenge, solution, features, tech stack, mockups, outcomes only where verified.
- Contact form fields: Full Name, Business Email, Company, Country, Service Interested In, Estimated Budget, Project Description. Validation, loading, genuine success/error states.
- Backend: Supabase enquiries table; insert-only from browser (no read/update from client). No fake success messages.
- Contact details (WhatsApp, LinkedIn, Instagram, phone, email, address) live in one clearly-marked config file with empty placeholders — awaiting real values. WhatsApp/LinkedIn buttons appear automatically once set.
- SEO: unique titles/meta, Open Graph, sitemap, robots.txt, canonical URLs, Organization/Service structured data. Target keywords naturally (Software Development Company, Web Development Services, Business Automation, ERP Implementation, Shopify Development, Custom Software Solutions, Digital Transformation).
- Analytics-ready structure but no tracking scripts until configured.

## Open questions & assumptions

- Real contact details (WhatsApp number, LinkedIn, Instagram, email, address) still to be supplied by user.
- Article pages for Insights previews not yet implemented — previews are labelled editorial, not fake published articles.
- Budget/service options in contact form fixed as specified.
- `.bolt/prompt` is authoritative for any explicit user/global instructions; none currently provided.