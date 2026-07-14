---
name: bootstrap
description: Bootstrap the Meridian Repute site for local development — install dependencies, set up environment variables, and start the dev server. Use when setting up the project on a new machine or when the dev environment isn't running.
---

# Bootstrap Meridian Repute locally

Goal: get a contributor from a fresh clone to a running local site.

## Steps

1. **Check Node version** (need 20 or 22):
   ```bash
   node -v
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```
   (Use `npm install` if there's no lockfile yet.)

3. **Create local env** from the template if missing:
   ```bash
   cp -n .env.example .env.local
   ```
   For the consultation form to actually send mail locally, fill in
   `SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS`. Without them the form still works
   and shows a "not configured" message — fine for UI work.

4. **Start the dev server:**
   ```bash
   npm run dev
   ```
   This uses webpack. On environments with a low OS file-watch (inotify) limit,
   `.env.local` sets `WATCHPACK_POLLING=true` so it won't crash. On a normal
   machine you can use `npm run dev:turbo` for faster Turbopack.

   If even `npm run dev` struggles with file watching, use the non-watching
   production preview instead:
   ```bash
   npm run preview
   ```

5. **Verify:** open http://localhost:3000 and confirm the hero, sections, nav
   menu, and consultation form render.

## Notes

- Content/copy is edited in `src/lib/content.ts` and `src/lib/site-config.ts`.
- Read `CLAUDE.md` and `docs/` before making changes.
