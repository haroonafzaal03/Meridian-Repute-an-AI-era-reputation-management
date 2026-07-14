# Deploying Meridian Repute to Node.js shared hosting (cPanel / Passenger)

This project builds to a **standalone Node server** (`output: "standalone"` in
`next.config.ts`). That is the right target for cPanel's **Setup Node.js App**
feature (Phusion Passenger), which most Node-capable shared hosts provide.

You keep server-side features (the consultation form's Server Action / SMTP
email, dynamic headers, on-the-fly OG image) — none of which are possible with a
pure static export.

---

## 0. One-time prerequisites

- A hosting plan whose cPanel shows **Setup Node.js App** (Passenger).
- Node.js 20 or 22 available in that cPanel (match `engines` if you pin one).
- An email mailbox on the domain (e.g. `How@meridianrepute.com`) to use as the
  SMTP sender for the consultation form.

---

## 1. Build the deployable bundle (on your machine)

```bash
cd meridian-repute
npm ci
npm run package:cpanel
```

This runs `scripts/build-standalone.sh`, which:

1. `next build` → produces `.next/standalone/` (a minimal server + only the
   `node_modules` files actually used).
2. Copies `public/` and `.next/static/` into the standalone folder (Next does
   **not** do this automatically — static assets/CSS/JS 404 without it).
3. Emits `./deploy/` and `./meridian-repute-standalone.zip`.

> Because the build is standalone, you do **not** run `npm install` on the
> server — everything needed is inside the bundle.

---

## 2. Create the Node.js app in cPanel

1. cPanel → **Setup Node.js App** → **Create Application**.
2. **Node.js version:** 20 or 22.
3. **Application mode:** Production.
4. **Application root:** e.g. `meridianrepute` (a folder in your home dir).
5. **Application URL:** your domain / subdomain.
6. **Application startup file:** `server.js`.
7. Create — then **Stop** the app for now.

---

## 3. Upload the bundle

- cPanel → **File Manager** → open the Application root from step 2.
- Upload `meridian-repute-standalone.zip` and **Extract** it there.
- You should now see `server.js`, `.next/`, `public/`, and `node_modules/` in
  the application root.

(FTP/SFTP works too — upload the **contents** of `./deploy/`.)

---

## 4. Environment variables

In **Setup Node.js App** → your app → **Environment variables**, add (see
`.env.example`):

| Variable | Example |
|---|---|
| `NODE_ENV` | `production` |
| `NEXT_PUBLIC_SITE_URL` | `https://meridianrepute.com` |
| `SMTP_HOST` | `mail.meridianrepute.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `How@meridianrepute.com` |
| `SMTP_PASS` | *(mailbox password)* |
| `CONSULTATION_TO_EMAIL` | `How@meridianrepute.com` |

> `NEXT_PUBLIC_SITE_URL` is inlined at **build** time (canonical URLs, sitemap,
> JSON-LD). If it changes, rebuild in step 1. SMTP vars are read at **runtime**,
> so they can be edited on the server without rebuilding.

Passenger sets `PORT` itself — do not hardcode one.

---

## 5. Start & verify

1. **Restart** the app in Setup Node.js App.
2. Visit the domain. Then verify:
   - `/robots.txt` lists the sitemap + AI crawlers.
   - `/sitemap.xml` returns the homepage URL with your production domain.
   - `/opengraph-image` returns the branded PNG.
   - Submit the consultation form → you receive the email.

If the site 500s, open **stderr** in Setup Node.js App (or `stderr.log` in the
app root) — the consultation action logs there. A common miss is forgetting to
copy `public/` and `.next/static/` (step 1 does this for you).

---

## 6. Redeploying

Re-run `npm run package:cpanel` locally, re-upload/extract the zip (overwrite),
then **Restart** the app. Consider keeping the previous `deploy/` around for a
quick rollback.

---

## Alternative: pure static hosting (no Node)

If you ever move to a host **without** Node, switch `next.config.ts` to
`output: "export"`, replace the consultation Server Action with an external form
endpoint (e.g. Formspree) or a `mailto:` fallback, drop the dynamic
`opengraph-image.tsx` for a static PNG, then `next build` and upload the `out/`
folder to `public_html`. See `PLAN.md` for the trade-offs.
