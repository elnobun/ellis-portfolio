# Deployment

## Recommended setup

Use Vercel to host the Next.js app and keep DNS/domain management on Hostinger.

This project is a better fit for Vercel than Hostinger Premium Web Hosting because it uses:
- Next.js App Router
- dynamic metadata and sitemap generation
- an embedded Sanity Studio route
- server-side rendering and build-time data fetching

## Vercel project setup

1. Create a new Vercel project and import this repository.
2. Use the default framework preset for Next.js.
3. Set the production branch to your main working branch.

## Environment variables in Vercel

Add these variables in the Vercel project settings:

```bash
NEXT_PUBLIC_SITE_URL=https://ellisenobun.com
NEXT_PUBLIC_SANITY_PROJECT_ID=tt83u2vd
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-03-01
SANITY_STUDIO_PROJECT_TITLE=Ellis Portfolio
```

Notes:
- Do not add `SANITY_API_TOKEN` to Vercel unless you later build server-side content mutations, preview secrets, or automated import jobs there.
- If you also want `www.ellisenobun.com`, Vercel will handle both once the domain is connected.

## Domain connection with Hostinger DNS

Add these DNS records in Hostinger:

### Apex domain

```txt
Type: A
Name: @
Value: 76.76.21.21
TTL: default
```

### WWW subdomain

```txt
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: default
```

Important:
- Remove any conflicting `A`, `AAAA`, or `CNAME` records already pointing `@` or `www` somewhere else.
- DNS changes may take some time to propagate.

## Vercel domain settings

In Vercel, add both:
- `ellisenobun.com`
- `www.ellisenobun.com`

Recommended redirect behavior:
- make `ellisenobun.com` the primary domain
- redirect `www.ellisenobun.com` to `ellisenobun.com`

## Deploy flow

After the DNS is in place:

1. Trigger a production deploy in Vercel.
2. Confirm the homepage loads on `https://ellisenobun.com`.
3. Confirm the CMS loads on `https://ellisenobun.com/studio`.
4. Check `https://ellisenobun.com/sitemap.xml` and `https://ellisenobun.com/robots.txt`.

## Post-launch checks

Verify these after the first production deploy:
- homepage renders with live Sanity content
- projects and case study pages build correctly
- `ThemeToggle` works in production
- `/studio` login works
- contact links use the correct email and profile URLs
- Open Graph metadata resolves against the production domain

## Updating the production site URL locally

For local production-like testing, you can temporarily set:

```bash
NEXT_PUBLIC_SITE_URL=https://ellisenobun.com
```

in your local `.env.local`, then run a fresh build.
