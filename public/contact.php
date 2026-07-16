<?php
// Consultation form handler for the static Meridian Repute site.
// Receives a POST from the consultation form and emails it to the inbox below.
// No framework required — runs on any cPanel host with PHP + mail().

header('Content-Type: application/json; charset=utf-8');

// ─── Configure this ──────────────────────────────────────────────────────────
$TO      = 'info@meridianrepute.com';          // where consultation requests go
$FROM    = 'info@meridianrepute.com';          // must be an address on this domain
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
  // Pretend success so bots don't learn anything.
  echo json_encode(['ok' => true]);
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

// Guard against header injection via the reply-to address.
if (preg_match('/[\r\n]/', $email . $name)) {
  fail('Invalid input.');
}

$body =
  "New consultation request from the website:\n\n" .
  "Name:  $name\n" .
  "Email: $email\n\n" .
  "Message:\n" . ($message !== '' ? $message : '(none provided)') . "\n";

$headers = [
  'From: Meridian Repute Website <' . $FROM . '>',
  'Reply-To: ' . $name . ' <' . $email . '>',
  'Content-Type: text/plain; charset=utf-8',
  'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($TO, $SUBJECT, $body, implode("\r\n", $headers));

if ($sent) {
  echo json_encode(['ok' => true]);
} else {
  fail('The mail server did not accept the message. Please email us directly.', 500);
}
