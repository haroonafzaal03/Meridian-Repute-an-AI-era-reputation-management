# Consultation Email Deliverability — Fixing Spam Placement

The consultation form (`public/contact.php`) sends mail via PHP `mail()` to
`people@meridianrepute.com`. Messages were landing in spam. This document lists
every cause and the exact fix. Do the **Code** part (already committed) plus the
**DNS/Hosting** part (you apply these).

Server IP: `198.54.116.140` · Host: cPanel/Apache (Namecheap) · DNS: Namecheap.

---

## 1. Code (done — `public/contact.php`)

- **Envelope sender / Return-Path** set via `mail()`'s 5th arg `-f people@meridianrepute.com`
  so the bounce address aligns with SPF.
- **From:** `"Meridian Repute" <people@meridianrepute.com>` (a domain mailbox — never the visitor).
- **Reply-To:** the visitor's address (so replies reach them), validated + newline-stripped.
- Full headers: `Message-ID`, `Date`, `MIME-Version`, `Content-Type: text/plain; charset=utf-8`.
- Honeypot (`website` field) preserved; header-injection stripped from name/email.

> Verify the `$_POST` field names (`name`, `email`, `phone`, `message`, honeypot `website`)
> match your actual form.

---

## 2. DNS / Hosting (you apply)

### 2a. Confirm the mailbox exists
cPanel → **Email Accounts** → ensure `people@meridianrepute.com` exists (create if missing).

### 2b. SPF — Namecheap → Advanced DNS → add TXT
- **Host:** `@`
- **Value:** `v=spf1 +a +mx +ip4:198.54.116.140 include:spf.web-hosting.com ~all`
- Keep only ONE SPF record on the apex — delete any older `v=spf1...`.

### 2c. DKIM — cPanel → Email Deliverability
- Open the `meridianrepute.com` row → **Manage / Repair**.
- Because DNS is external (Namecheap), cPanel shows the record instead of installing it.
  Copy it into Namecheap → Advanced DNS as a **TXT** record:
  - **Host:** `default._domainkey`
  - **Value:** the `v=DKIM1; k=rsa; p=…` string, pasted exactly (no line breaks).
- Return to Email Deliverability → **Repair/Recheck** until DKIM is green.

### 2d. DMARC — Namecheap → Advanced DNS → add TXT
- **Host:** `_dmarc`
- **Value (start in monitor mode):**
  `v=DMARC1; p=none; rua=mailto:people@meridianrepute.com; fo=1; adkim=s; aspf=s`
- After a few days with SPF + DKIM passing aligned, tighten to `p=quarantine`.

### 2e. Verify
- Send a test; check headers show `spf=pass`, `dkim=pass`, `dmarc=pass`
  (mail-tester.com, or Gmail → Show original).
- A bare external POST to `contact.php` returns **403 (ModSecurity)** — expected.
  Test a **real browser** submission of the live form after deploy.

---

## 3. Fallback — authenticated SMTP (only if step 1+2 still spams)

If `mail()` remains unreliable after SPF/DKIM/DMARC are green, switch to
authenticated SMTP with the domain mailbox using **PHPMailer**
(see `docs/contact.smtp.php.txt (move to public/contact.php to activate)`).

1. Install PHPMailer: `composer require phpmailer/phpmailer` (or upload its `src/`).
2. Set SMTP env vars in cPanel (keeps the password out of the webroot):
   - `MR_SMTP_HOST` = `mail.meridianrepute.com` (or `localhost`)
   - `MR_SMTP_USER` = `people@meridianrepute.com`
   - `MR_SMTP_PASS` = the mailbox password
   - `MR_SMTP_PORT` = `587` (STARTTLS) or `465` (SMTPS)
3. Point the form action at `contact.smtp.php` (or rename it over `contact.php`).

SMTP authenticates as the mailbox, so From/DKIM alignment is automatic and
delivery is the most reliable — at the cost of storing a mailbox password.
Prefer the `mail()` + SPF/DKIM/DMARC path first; use this if needed.
