---
name: deploy-cpanel
description: Build and package the Meridian Repute static site for deployment to cPanel / Apache shared hosting (Namecheap). Use when preparing a release, creating the upload bundle, or troubleshooting the live site.
---

# Package Meridian Repute for cPanel (static)

The site is a **static export** (`output: "export"`) — plain HTML/CSS/JS plus a
`contact.php` mailer. No Node runtime on the server. Full walkthrough:
`DEPLOY.md`.

## Build the upload bundle

1. Confirm the canonical host is right (inlined at build time):
   `NEXT_PUBLIC_SITE_URL` defaults to `https://www.meridianrepute.com`.

2. Package:
   ```bash
   npm run package:cpanel
   ```
   Runs `scripts/build-static.sh` → `next build` (produces `out/`) → zips it to
   `meridian-repute-static.zip` (including the hidden `.htaccess`).

3. Smoke-test locally (PHP won't run under a static server, so the form will
   show its error path — that's expected):
   ```bash
   npx --yes serve@latest out -l 3000
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
   curl -s http://localhost:3000/robots.txt | head
   ```

## Deploy (summary — see DEPLOY.md)

1. cPanel File Manager → open the `meridianrepute.com/` addon-domain doc root.
2. **Remove the old demo** files first (index.html, image-slot.js, support.js,
   scraps/, uploads/, old robots.txt/sitemap.xml, the zips).
3. Upload + extract `meridian-repute-static.zip` there (enable "Show Hidden
   Files" so `.htaccess` is visible; upload it manually if missing).
4. Ensure `info@meridianrepute.com` mailbox exists (or edit `$TO` in
   `contact.php`); set SPF/DKIM via Email Deliverability.
5. Run AutoSSL; verify home, the four `/…/` policy pages, robots, sitemap, the
   OG image, and a real form submission.

## Common issues

- **CSS/JS 404 or unstyled page:** the `_next/` folder wasn't uploaded — re-upload
  the full `out/` contents.
- **Clean URLs 404 (e.g. /privacy-policy/):** `.htaccess` missing or hidden
  files not uploaded. Confirm `.htaccess` is in the doc root.
- **Form shows an error / no email:** `contact.php` not present, PHP disabled,
  or mail/SPF misconfigured. Check the mailbox exists and Email Deliverability.
- **Wrong host in sitemap/canonical:** rebuild with the correct
  `NEXT_PUBLIC_SITE_URL`.
- **OG image broken in social previews:** ensure `.htaccess` uploaded (it forces
  `image/png` on the extensionless `opengraph-image` file).
