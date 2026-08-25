# Myndivo website

Public marketing, support, privacy, terms, and account-deletion pages for the
Myndivo Android app (`com.ahmed_elsayed.myndivo`).

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

Import the GitHub repository into Vercel as a Next.js project. No custom build
or output settings are required. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS
production origin, without a trailing slash, for example:

```text
NEXT_PUBLIC_SITE_URL=https://myndivo.example.com
```

After deployment, Google Play Console should use these public URLs (replace
`YOUR_VERCEL_DOMAIN` with the actual production domain):

- Privacy policy: `https://YOUR_VERCEL_DOMAIN/privacy`
- Account deletion: `https://YOUR_VERCEL_DOMAIN/data-deletion`
- Terms: `https://YOUR_VERCEL_DOMAIN/terms`
- Support: `https://YOUR_VERCEL_DOMAIN/contact`

Before building the Android production release, set the same live pages in the
EAS production environment as `EXPO_PUBLIC_PRIVACY_POLICY_URL` and
`EXPO_PUBLIC_TERMS_OF_USE_URL`.
