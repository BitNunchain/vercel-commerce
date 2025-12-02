<p align="center">
  <a href="https://vendure.io">
    <img alt="Vendure logo" height="60" width="auto" src="https://a.storyblok.com/f/328257/699x480/8dbb4c7a3c/logo-icon.png">
  </a>
</p>
<h1 align="center">
  Vendure x Next.js Commerce
</h1>
<p align="center">
    A Next.js 15 and App Router-ready ecommerce template
</p>

## Demo & Deployment

Demo available here [vercel-commerce.vendure.io](https://vercel-commerce.vendure.io)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvendure-ecommerce%2Fvercel-commerce&env=COMPANY_NAME,TWITTER_CREATOR,TWITTER_SITE,SITE_NAME,VENDURE_API_ENDPOINT,VENDURE_INSTANCE&project-name=vendure-commerce&repository-name=nextjs-storefront)

## Features

- Next.js App Router
- Optimized for SEO using Next.js's Metadata
- React Server Components (RSCs) and Suspense
- Server Actions for mutations
- Edge Runtime
- New fetching and caching paradigms
- Dynamic OG images
- Styling with Tailwind CSS
- Automatic light/dark mode based on system settings

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js Commerce. It's
recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for
this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control your Vendure
> instance
> store.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
npm install
npm run dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

### Required environment variables

- `VENDURE_API_ENDPOINT` – URL of your Vendure Shop API (e.g. Cloud Run URL)
- `VENDURE_REVALIDATION_SECRET` – secret string used by the revalidation route
- `VENDURE_INSTANCE` – identifier for your deployment context (e.g. `default`)

#### Cloud Run wiring

- Set `VENDURE_API_ENDPOINT` to your Cloud Run Shop API:
  `https://vendure-api-572691489926.us-central1.run.app/shop-api`
- Create a strong `VENDURE_REVALIDATION_SECRET` and add it to Vercel Project → Settings → Environment Variables.
- If your Vendure instance serves assets from the same host, the domain is already allowed in `next.config.ts`.

### Useful scripts

- `npm run typecheck` – TypeScript checks
- `npm run lint` – ESLint (Next.js rules)
- `npm run prettier` – Format files
- `npm run prettier:check` – Verify formatting
