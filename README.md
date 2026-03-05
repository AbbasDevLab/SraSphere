# SraSphere Website

Modern startup-style website for **SraSphere**, built with:

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

2. Set environment variables:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

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

## Project Structure

```text
src/
  app/
    api/stripe/route.ts
    about/
    blog/
    contact/
    legal/
      privacy-policy/
      refund-policy/
      terms-of-service/
    products/
    solutions/
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
    site-config.ts
    utils.ts
```

## Notes

- Theme support includes light/dark mode toggle.
- Contact form is validated with React Hook Form.
- Stripe API route is a placeholder for future subscription checkout logic.
- `blog` route is included as a starter structure.

## Learn More

To learn more about Next.js, review:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)
