#!/usr/bin/env bash
set -euo pipefail

BUCKET="gs://www.thomasberg.me"
DIST="dist"

# Build
echo "Building..."
npm run build

# Back up current index.html from bucket before overwriting
echo "Backing up index.html from bucket..."
gsutil cp "$BUCKET/index.html" "$BUCKET/index.html.bak" 2>/dev/null \
    || echo "  (No existing index.html to back up — first deploy?)"

# Sync dist/ to bucket (no -d flag: old hashed assets are preserved for rollback)
echo "Deploying to $BUCKET..."
gsutil -m rsync -r "$DIST/" "$BUCKET/"

echo "Done. Live at https://thomasberg.me"
