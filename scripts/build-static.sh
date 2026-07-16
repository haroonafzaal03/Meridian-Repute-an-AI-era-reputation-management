#!/usr/bin/env bash
# Build the static site and package it for upload to cPanel (Apache) shared hosting.
# Produces ./out (the folder to upload) and ./meridian-repute-static.zip.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Building static export (next build → out/)"
npm run build

echo "==> Zipping out/ (including .htaccess and contact.php)"
rm -f meridian-repute-static.zip
# -r recurse, include dotfiles (.htaccess). Zip from inside out/ so paths are
# relative to the web root.
( cd out && zip -r -q ../meridian-repute-static.zip . )

echo "==> Done"
echo "Upload the CONTENTS of ./out (or extract meridian-repute-static.zip) into"
echo "the document root of meridianrepute.com on cPanel. See DEPLOY.md."
