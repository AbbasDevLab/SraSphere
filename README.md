# SraSphere Website

Responsive digital-solutions studio website for **SraSphere**, built with:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Optional environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://www.srasphere.com
NEXT_PUBLIC_WHATSAPP_NUMBER=
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

Set these in `.env.local` for local development or in the deployment environment. Configure the WhatsApp number in international format using digits only, including its country code; the WhatsApp contact option is hidden until a number is configured. Apply the SQL migration in `supabase/migrations/` to the configured Supabase project before enabling enquiry submissions.

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Production Commands

```bash
npm run lint
npm run build
npm run start
```

## Contact enquiries

The contact form validates project details and submits them to the Supabase `enquiries` table through `/api/enquiry`. Row-level security allows public inserts only, not reads or updates. If Supabase is not configured, the form reports that clearly and provides a direct email link to `hello@srasphere.com`.

## Project Structure

```text
src/
  app/
    api/enquiry/route.ts
    api/stripe/route.ts
    about/
    contact/
    insights/
    legal/
      privacy-policy/
      refund-policy/
      terms-of-service/
    services/
    work/
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    animations/
    forms/
    layout/
    ui/
  lib/
    content.ts
    site-config.ts
    utils.ts
supabase/
  migrations/
```

## Notes

- Service and article detail pages are generated from `src/lib/content.ts`.
- Contact form validation uses React Hook Form; enquiry storage requires the Supabase settings above.
- Stripe API route remains a placeholder for future subscription checkout logic.
- Legacy `/blog`, `/products`, and `/solutions` paths redirect to the current content sections.

## Learn More

To learn more about Next.js, review:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)
