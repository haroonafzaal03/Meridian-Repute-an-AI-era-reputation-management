# Deploying Meridian Repute to cPanel (static, Namecheap)

This site is a **static export** (`output: "export"` in `next.config.ts`). It's
plain HTML/CSS/JS plus one small `contact.php` for the consultation form, so it
runs on any cPanel/Apache shared host with **no Node.js required**.

Target: the `meridianrepute.com` addon-domain document root, i.e.
`/home/<user>/meridianrepute.com/` (for the account in the screenshots,
`/home/intimacywick/meridianrepute.com/`).

---

## 1. Build the upload bundle (on your machine)

```bash
cd meridian-repute
npm ci
npm run package:cpanel
```

This runs `scripts/build-static.sh`, which:

1. `next build` → produces the `out/` folder (the entire website), and
2. zips it to `meridian-repute-static.zip` (including the hidden `.htaccess`).

> `NEXT_PUBLIC_SITE_URL` is inlined at build time into canonical URLs, the
> sitemap, and JSON-LD. It defaults to `https://www.meridianrepute.com`. If the
> canonical host ever changes, set it and rebuild:
> `NEXT_PUBLIC_SITE_URL=https://example.com npm run package:cpanel`.

---

## 2. Clear the old site in cPanel

In **File Manager**, open `meridianrepute.com/` (the addon-domain doc root). It
currently holds the old demo. Delete/back up:

- `index.html`, `image-slot.js`, `support.js`
- `scraps/`, `uploads/`
- `robots.txt`, `sitemap.xml` (the new build ships fresh ones)
- both `Requested design changes …zip` files

Leave the folder empty before uploading.

> Tip: keep a copy first — select all → Compress → download the zip.

---

## 3. Upload the new site

**File Manager route:**
1. Into `meridianrepute.com/`, **Upload** `meridian-repute-static.zip`.
2. Select it → **Extract** → into the same folder.
3. Delete the zip afterward.
4. Confirm the doc root now contains `index.html`, `_next/`, `contact.php`,
   `.htaccess`, `privacy-policy/`, `sitemap.xml`, `robots.txt`, etc.

> **Show hidden files** in File Manager (Settings → "Show Hidden Files") so you
> can see that `.htaccess` extracted. If it didn't, upload it manually from
> `out/.htaccess`.

**FTP/SFTP route:** upload the **contents** of `out/` (not the folder itself)
into `meridianrepute.com/`, hidden files included.

---

## 4. Wire up the consultation email

The form posts to `/contact.php`, which emails `info@meridianrepute.com` via
PHP's `mail()`.

1. Make sure `info@meridianrepute.com` exists (cPanel → **Email Accounts**), or
   edit the `$TO` / `$FROM` values at the top of `contact.php`.
2. For reliable delivery, ensure the domain's **SPF/DKIM** records are set
   (cPanel → **Email Deliverability** → Repair/Install).
3. Test: submit the form on the live site and confirm the email arrives. If it
   lands in spam, that's an SPF/DKIM issue, not the form.

---

## 5. SSL + verify

1. cPanel → **SSL/TLS Status** → run **AutoSSL** for `meridianrepute.com` and
   `www` (Let's Encrypt). The `.htaccess` already forces HTTPS and redirects
   the bare domain → `www`.
2. Visit `https://www.meridianrepute.com` and check:
   - Home + all sections render, animations run.
   - `/privacy-policy/`, `/terms-of-service/`, `/disclaimer/`,
     `/ethics-standards/` load.
   - `/robots.txt` and `/sitemap.xml` show the `www` host.
   - `/opengraph-image` returns the branded PNG (the `.htaccess` forces its
     `image/png` type).
   - The consultation form sends an email.

---

## 6. Post-launch

- Submit `https://www.meridianrepute.com/sitemap.xml` in **Google Search
  Console** and **Bing Webmaster Tools**.
- Redeploy = re-run `npm run package:cpanel`, re-upload/extract, done. No
  server restart needed (it's static).

---

## Notes

- **No Node runtime is used.** If you ever want server features (ISR, on-the-fly
  image optimization, server actions), that requires cPanel "Setup Node.js App"
  and switching `next.config.ts` back to `output: "standalone"` — see git
  history for that variant.
- `.htaccess` handles HTTPS, www-canonicalization, security headers, caching,
  gzip, the custom 404, and the OG image MIME type.
