---
name: deploy-cpanel
description: Build and package the Meridian Repute site for deployment to Node.js shared hosting (cPanel / Passenger). Use when preparing a release, creating the upload bundle, or troubleshooting a shared-hosting deploy.
---

# Package Meridian Repute for cPanel / Passenger

The site deploys as a **Next.js standalone Node server** to cPanel's
"Setup Node.js App" (Passenger). Full walkthrough: `DEPLOY.md`.

## Build the upload bundle

1. Ensure the production site URL is set (it's inlined at build time):
   confirm `NEXT_PUBLIC_SITE_URL` in `.env.local` (or the shell) is the real
   domain, e.g. `https://meridianrepute.com`.

2. Run the packaging script:
   ```bash
   npm run package:cpanel
   ```
   This does `next build`, copies `public/` and `.next/static/` into
   `.next/standalone/` (required — assets 404 otherwise), and produces:
   - `./deploy/` — the folder to upload, and
   - `./meridian-repute-standalone.zip` — zipped equivalent.

3. **Smoke-test the bundle locally** before uploading:
   ```bash
   (cd deploy && PORT=3999 NODE_ENV=production node server.js) &
   sleep 3
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3999/
   curl -s http://localhost:3999/robots.txt | head
   kill %1
   ```
   Expect `200` and a robots.txt whose `Host:`/`Sitemap:` show the production
   domain.

## Deploy to cPanel (summary — see DEPLOY.md for detail)

1. cPanel → **Setup Node.js App** → create app (Node 20/22, mode Production,
   startup file `server.js`), then Stop it.
2. Upload + extract `meridian-repute-standalone.zip` into the app's
   Application root (should contain `server.js`, `.next/`, `public/`,
   `node_modules/`).
3. Add environment variables (see `.env.example`): `NODE_ENV=production`,
   `NEXT_PUBLIC_SITE_URL`, and the `SMTP_*` / `CONSULTATION_TO_EMAIL` values.
4. **Restart** the app; verify `/`, `/robots.txt`, `/sitemap.xml`,
   `/opengraph-image`, and a real form submission.

## Common issues

- **CSS/JS 404s:** `public/` or `.next/static/` weren't copied — re-run
  `npm run package:cpanel` (the script handles this).
- **Form 500 / no email:** check `SMTP_*` env vars; read stderr in Setup
  Node.js App. The action logs failures there.
- **Wrong domain in sitemap/canonical:** `NEXT_PUBLIC_SITE_URL` was wrong at
  build time — fix it and rebuild.
