<?php
// Consultation form handler for the static Meridian Repute site.
// Receives a POST from the consultation form and emails it to the inbox below.
// No framework required — runs on any cPanel host with PHP + mail().
//
// DELIVERABILITY (why mail lands in inbox vs spam):
//   1. From: is ALWAYS an address on this domain (info@meridianrepute.com), never
//      the visitor's address. Reply-To carries the visitor so replies still work.
//   2. The envelope sender / Return-Path is set to that same domain address via
//      the -f parameter, so it aligns with SPF.
//   3. A proper Message-ID (@meridianrepute.com), Date, and MIME headers are sent.
//   These MUST be paired with SPF + DKIM + DMARC DNS records for the domain
//   (set in cPanel → Email Deliverability). See DEPLOY.md / the deploy notes.

header('Content-Type: application/json; charset=utf-8');

// ─── Configure this ──────────────────────────────────────────────────────────
$DOMAIN  = 'meridianrepute.com';
$TO      = 'info@' . $DOMAIN;          // where consultation requests go
$FROM    = 'info@' . $DOMAIN;          // MUST be a real mailbox on this domain
$SUBJECT = 'New consultation request — Meridian Repute';
// ─────────────────────────────────────────────────────────────────────────────

function fail($msg, $code = 400) {
  http_response_code($code);
  echo json_encode(['ok' => false, 'error' => $msg]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  fail('Method not allowed.', 405);
}

// Honeypot — real users leave this empty.
if (!empty($_POST['company_website'])) {
  echo json_encode(['ok' => true]); // pretend success so bots learn nothing
  exit;
}

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (mb_strlen($name) < 2) {
  fail('Please enter your full name.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  fail('Please enter a valid email address.');
}
if (mb_strlen($message) > 4000) {
  fail('Your message is too long.');
}

// Guard against header injection through any field that touches a header.
if (preg_match('/[\r\n]/', $name . $email)) {
  fail('Invalid input.');
}

// Keep the visitor name out of the header structure; sanitize for the display name.
$replyName = preg_replace('/[^\p{L}\p{N}\s\.\-\_]/u', '', $name);
$replyName = trim(mb_substr($replyName, 0, 120));

$body =
  "New consultation request from the website:\r\n\r\n" .
  "Name:  $name\r\n" .
  "Email: $email\r\n\r\n" .
  "Message:\r\n" . ($message !== '' ? $message : '(none provided)') . "\r\n";

$messageId = '<' . bin2hex(random_bytes(16)) . '@' . $DOMAIN . '>';

$headers = [
  'From: Meridian Repute Website <' . $FROM . '>',
  'Reply-To: ' . ($replyName !== '' ? $replyName . ' ' : '') . '<' . $email . '>',
  'Return-Path: <' . $FROM . '>',
  'Message-ID: ' . $messageId,
  'Date: ' . date('r'),
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=utf-8',
  'Content-Transfer-Encoding: 8bit',
  'Auto-Submitted: auto-generated',
  'X-Mailer: MeridianRepute-Form',
];

// -f sets the envelope sender (Return-Path) so the message aligns with SPF.
$sent = @mail($TO, $SUBJECT, $body, implode("\r\n", $headers), '-f ' . $FROM);

if ($sent) {
  echo json_encode(['ok' => true]);
} else {
  fail('The mail server did not accept the message. Please email us directly.', 500);
}
