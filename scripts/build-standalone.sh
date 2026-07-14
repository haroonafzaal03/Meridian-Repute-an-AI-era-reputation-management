#!/usr/bin/env bash
# Builds the app and assembles a self-contained folder + zip ready to upload
# to a cPanel "Setup Node.js App" (Passenger) shared-hosting environment.
# See DEPLOY.md for the full walkthrough.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Building Next.js app (output: standalone)"
npm run build

echo "==> Assembling standalone bundle"
cp -r public .next/standalone/public
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/static

OUT_DIR="deploy"
OUT_ZIP="meridian-repute-standalone.zip"
rm -rf "$OUT_DIR" "$OUT_ZIP"
mkdir -p "$OUT_DIR"
cp -r .next/standalone/. "$OUT_DIR/"

(cd "$OUT_DIR" && zip -rq "../$OUT_ZIP" .)

echo "==> Done"
echo "Upload $OUT_ZIP to your cPanel Node.js app's application root and"
echo "extract it there, or upload the contents of ./$OUT_DIR/ directly."
echo "Application startup file: server.js"
